
//localStorage.clear();

const pubsub={
	events:{},

	subscribe: function (evName, fn) {
		this.events[evName]=this.events[evName] || [];
		this.events[evName].push(fn);
	},
	unsubscribe: function (argument) {

	},
	publish : function (evName, data) {
		if(this.events[evName]){
			let arr=this.events[evName];
			for(var i=0; i<arr.length;i++){
				if(data!=undefined){
				arr[i](data);}
				else{ arr[i]();
							break}
			}
		}
	}

}

const memory={
	localNotes:[],
	localDates:[],
	stack: [],

	render: function () {
		if (!localStorage.getItem(0)){
			//console.log("no notes")
    		localStorage.setItem(0,'');
		}
		else{
			stack=JSON.parse(localStorage.getItem(0))
		}
		let index=Object.keys(localStorage);
        index.sort()
        //console.log(localStorage);

        for (var i = 1; i < index.length; i++){
        	let v=index[i]
        	//console.log(localStorage.getItem(v))
            let notei=JSON.parse(localStorage.getItem(v))["note"];
            memory.localNotes.push(notei)
        }
        if(localStorage.getItem(0)!=''){
        let st= JSON.parse(localStorage.getItem(0));
        memory.stack=st; }

        pubsub.publish("UpdateNotes",memory.localNotes)
		pubsub.subscribe("createNote",memory.addNote);
		pubsub.subscribe("noteDeleted",memory.deleteNote);
		pubsub.subscribe("locateNote",memory.locateNote);
		pubsub.subscribe("modifyNote",memory.modifyNote);
		pubsub.subscribe("shift",memory.shift);
		pubsub.subscribe("editedNote",memory.edited);
        pubsub.subscribe("undo",memory.command);
        pubsub.subscribe("render",memory.render);
    	pubsub.subscribe("searching",memory.search);




	}
		,
	addNote:function (data) {
		
		let date = new Date();
		let index=Object.keys(localStorage);
		let note = {"creation Date":date.toString(), "modified":date.toString(), "note":data};
        let datum = JSON.stringify(note);
        localStorage.setItem(index.length,datum);
		memory.localNotes.push(data);
		memory.localDates.push(date);
		let stackElement={"created":datum,"num":index.length}
		memory.stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(memory.stack))
		pubsub.publish("UpdateNotes",memory.localNotes);
	},
	deleteNote: function (j) {
		let n=Object.keys(localStorage).length;
		let stackElement={"deleted":localStorage.getItem(j),"num":j}
		memory.stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(memory.stack))
		if(n==2){
            localStorage.removeItem(1);

        }
        else if(j==n-1){
            localStorage.removeItem(j);

        }
        else{
            for(let i=j; i<n-1; i++){
                let t=localStorage.getItem(Number(i)+1);
                localStorage.setItem(i,t);
                if(i==n-2){
                localStorage.removeItem(Number(i)+1);

                }  
            }
        }

		memory.localNotes.splice(j-1,1);
		pubsub.publish("UpdateNotes",memory.localNotes);
	},
	locateNote: function(j){
		let a=memory.localNotes[j-1];
		pubsub.publish("textArea",a)

	},
	
	search: function (str) {
		let regex=new RegExp(str,"i");
		let data= memory.localNotes;
		let dataSearch=[];
		if(str){
		for(var i=0; i<data.length; i++){
			if(regex.test(data[i])){
				dataSearch.push(data[i])
			}
			else{dataSearch.push("")}
		}

		pubsub.publish("UpdateNotes",dataSearch);}
		else{pubsub.publish("UpdateNotes",memory.localNotes)}
	},

	shift: function (vec) {
		var to=vec[0];
		var from=vec[1];
		let t=localStorage.getItem(to);
		let f=localStorage.getItem(from);
		var note1=JSON.parse(f)["note"];
		var note2=JSON.parse(t)["note"];
		memory.localNotes[to-1]=note1;
		memory.localNotes[from-1]=note2;
		localStorage.setItem(to,f);
		localStorage.setItem(from,t);
		let stackElement={"shifted":vec};
		memory.stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(memory.stack));
		pubsub.publish("UpdateNotes",memory.localNotes)
	
		},
		

	edited: function (vec) {
		memory.localNotes[vec[1]-1]=vec[0];
		let objlocal=JSON.parse(localStorage.getItem(vec[1]));
		let newobj=JSON.parse(localStorage.getItem(vec[1]));
		objlocal["num"]=vec[1];
		console.log(objlocal);
        let stackElement={"edited":objlocal};
		memory.stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(memory.stack))
		newobj["modified"]=new Date().toString();
		newobj["note"]=vec[0];
		let obj=JSON.stringify(newobj);
		localStorage.setItem(vec[1],obj);

		pubsub.publish("UpdateNotes",memory.localNotes);

	},

	command: function () {
	let obj=memory.stack[memory.stack.length-1];
	console.log(obj)
	if(obj["deleted"]){
		let l=Number(obj["num"]);
		let m=Object.keys(localStorage).length;
		for(var i=l; i<=m; i++){
			if(i==m){
				localStorage.setItem(l,obj["deleted"])
			}
			else{localStorage.setItem(m-i+l,localStorage.getItem(m-i+l-1))}
		
		}
	memory.stack.pop();
	localStorage.setItem(0,JSON.stringify(memory.stack))
	memory.render();
	location.reload()
	}
	else if(obj["created"]){
		//console.log("worked!")
		let j=obj["num"];
		let n=Object.keys(localStorage).length;
		if(n==2){
            localStorage.removeItem(1);

        }
        else if(j==n-1){
            localStorage.removeItem(j);

        }
        else{
            for(let i=j; i<n-1; i++){
                let t=localStorage.getItem(Number(i)+1);
                localStorage.setItem(i,t);
                if(i==n-2){
                localStorage.removeItem(Number(i)+1);

                }  
            }
        }    
	memory.stack.pop();
	localStorage.setItem(0,JSON.stringify(memory.stack))
	memory.render();
	location.reload();
	}

	else if(obj["edited"]){
		let num=obj["edited"]["num"];

		//console.log(num);
		delete obj["edited"]["num"]
		let ob=obj["edited"]
		
		localStorage.setItem(num,JSON.stringify(ob));
		memory.stack.pop();
		localStorage.setItem(0,JSON.stringify(memory.stack))
		memory.render()
		location.reload();

	}

	else if(obj["shifted"]){
		let newShift=obj["shifted"];
		let r=newShift[0];
		let s=newShift[1];
		
		let t=localStorage.getItem(s);
		let f=localStorage.getItem(r);
		var note1=JSON.parse(f)["note"];
		var note2=JSON.parse(t)["note"];
		localStorage.setItem(s,f);
		localStorage.setItem(r,t);
		memory.stack.pop();
		localStorage.setItem(0,JSON.stringify(memory.stack))
		memory.render();
		location.reload();
	}
}
		


}

const notes={

	render:function (container) {
		let temp=document.querySelector("#notes");
		div=temp.content.cloneNode(true);
        container.appendChild(div);

		let textArea=document.getElementsByName("comments")[0];
        textArea.value="";
        let saved=document.querySelector(".saved")
    	saved.addEventListener("click",notes.inNote);
    	let butCreate=document.getElementById("buttonCreate");
        butCreate.addEventListener("click", notes.newNote);
    	pubsub.subscribe("UpdateNotes",notes.updateNotes);
    	let searchArea=document.querySelector("#search");
    	searchArea.addEventListener("keyup",notes.search);
    	let butUndo=document.getElementById("buttonUndo");
        butUndo.addEventListener("click", notes.Undo);
	},
	Undo: function () {
 	pubsub.publish("undo",undefined);
 	},

	search:function () {
		let text=document.getElementsByName("search")[0];
		let str=text.value;
		pubsub.publish("searching",str)
		
		

		
	},
	newNote: function () {
		let textArea=document.getElementsByName("comments")[0];
        let text=textArea.value;
        if (text){
		pubsub.publish("createNote",text);}
		textArea.value="";
	},

	updateNotes:function (data) {

		if(Object.keys(localStorage)!=0){

	    let div=document.querySelector(".savedNotes");
		div.innerHTML="";
		let fragment=document.createDocumentFragment();
		for(var i = 0; i<data.length ; i++) {
			
			let noteDiv=document.createElement("div");
			noteDiv.setAttribute("id","note "+(data.length-i));
			noteDiv.setAttribute("draggable","true");
			noteDiv.setAttribute("ondragstart","dragging(event)")
			noteDiv.setAttribute("class","note");
			noteDiv.setAttribute("num",data.length-i);
			//let p=document.createElement("p");
			let butDelete=document.createElement("button");
            butDelete.setAttribute("class","buttonDelete");
            butDelete.setAttribute("num",data.length-i);
            butDelete.textContent="Delete";        
            let butEdit=document.createElement("button");
            butEdit.setAttribute("class","buttonEdit");
            butEdit.setAttribute("num",data.length-i);
            butEdit.textContent="Edit"
            let butView=document.createElement("button");
            butView.setAttribute("class","buttonView");
            butView.setAttribute("num",data.length-i);
            butView.textContent="View"
			noteDiv.innerHTML=data[data.length-1-i];
			let space=document.createElement("br")
			if(noteDiv.innerHTML!=""){
			noteDiv.appendChild(space)
			noteDiv.appendChild(butDelete);
            noteDiv.appendChild(butView);
            noteDiv.appendChild(butEdit);
			fragment.appendChild(noteDiv)}
		}
		div.appendChild(fragment);}
		else{
	    let div=document.querySelector(".savedNotes");
		div.innerHTML="";}
	},

	inNote: function(clicked){

        let bt=clicked.target;
        if (bt.getAttribute("class")=="buttonDelete"){
            notes.noteDeleted(bt);

        }
        else if(bt.getAttribute("class")=="buttonEdit"){
            notes.noteEdit(bt);

        }
        else if(bt.getAttribute("class")=="buttonView"){
            notes.noteView(bt);

        }
        else if(bt.getAttribute("num")){
        	dragging(bt)

        }
    },

    noteDeleted:function (note) {
		let b=note.getAttribute("num");
        pubsub.publish("noteDeleted",b)
       
               },
    noteView: function (note) {
    let b=note.getAttribute("num");
    document.querySelector(".savedNotes").innerHTML="";
    let butCreate=document.getElementById("buttonCreate");
    butCreate.style.display="none";
    let butBack=document.createElement("button");
    butBack.setAttribute("id","back");
    butBack.textContent="Back";
    butBack.addEventListener("click",notes.back);
    let div=document.querySelector(".buttons");
    div.appendChild(butBack);
    pubsub.subscribe("textArea",notes.textAreaView);
    pubsub.publish("locateNote",b)

    },

    back:function () {
		location.reload();

		let text=document.getElementsByName("search")[0];
		text.value="";

	    },

    textAreaView:function (note) {
    	
		let textArea=document.getElementsByName("comments")[0];
        textArea.value=note;
        textArea.readOnly=true;
    	
        },
    noteEdit:function (note) {
    	let b=note.getAttribute("num");
        document.querySelector(".savedNotes").innerHTML="";
        let butCreate=document.getElementById("buttonCreate");
            butCreate.style.display="none";
        let textArea=document.getElementsByName("comments")[0];
        let butCancel=document.createElement("button");
            butCancel.setAttribute("id","cancel");
            butCancel.textContent="Cancel";
            butCancel.addEventListener("click",notes.back);
        pubsub.subscribe("textArea",notes.textAreaEdit);

        let butEdit=document.createElement("button");
            butEdit.setAttribute("id","edit");
            butEdit.setAttribute("num",b);
            butEdit.textContent="Save changes";
            butEdit.addEventListener("click",notes.changeNote);
        let div=document.querySelector(".buttons");
        div.appendChild(butCancel);
        div.appendChild(butEdit);
        pubsub.publish("locateNote",b);
		


    },

    changeNote:function (clicked) {
    	let bt=clicked.target;
    	b=bt.getAttribute("num");
		let textArea=document.getElementsByName("comments")[0];
        let text=textArea.value;
        if (text){
        //pubsub.publish("noteDeleted",b);
        pubsub.publish("editedNote",[text,b]);
		textArea.value="";
		butCancel=document.querySelector("#cancel");
		butEdit=document.querySelector("#edit");
		let div=document.querySelector(".buttons");
        div.removeChild(butCancel);
        div.removeChild(butEdit);
        let butCreate=document.getElementById("buttonCreate");
            butCreate.style.display="inline";

    	}

	},
    textAreaEdit:function (note) {
		let textArea=document.getElementsByName("comments")[0];
        textArea.value=note;
        textArea.readOnly=false;

    	
        },

    checkZ: function(e) {
    if (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) {
      notes.Undo();
    }
  }
}
function allowDrop(ev) {
  ev.preventDefault();
}

function dragging(ev) {
	ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {
  ev.preventDefault();
  var note2=ev.target.id;
  var data = ev.dataTransfer.getData("text");
  let to=document.getElementById(note2);
  let from=document.getElementById(data);
  var n=to.getAttribute("num");
  var m=from.getAttribute("num");
  pubsub.publish("shift",[n,m])

  
}


(function () {
 
let saved=document.querySelector(".saved");

notes.render(saved);
memory.render()
document.addEventListener('keydown', notes.checkZ)
})();