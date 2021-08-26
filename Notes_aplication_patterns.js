let saved=document.querySelector(".saved");

let stack= [];
function command() {
	let obj=stack[stack.length-1];
	if(obj["deleted"]){
		let l=Number(obj["num"]);
		let m=Object.keys(localStorage).length;
		for(var i=l; i<=m; i++){
			if(i==m){
				localStorage.setItem(l,obj["deleted"])
			}
			else{localStorage.setItem(m-i+l,localStorage.getItem(m-i+l-1))}
		
		}
	stack.pop();
	localStorage.setItem(0,JSON.stringify(stack))
	memory.render();
	location.reload()
	}
	else if(obj["created"]){
		console.log("entro!")
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
	stack.pop();
	localStorage.setItem(0,JSON.stringify(stack))
	memory.render();
	location.reload()}

	else if(obj["edited"]){
		console.log("entro?")
		stack.pop();
		localStorage.setItem(0,JSON.stringify(stack))
		command();
		command()
	}
}
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
				arr[i](data);
			}
		}
	}

}

const memory={
	localNotes:[],
	localDates:[],

	render: function () {
		if (!localStorage.getItem(0)){
			console.log("no hay ninguna")
    		localStorage.setItem(0,'');
		}
		else{
			stack=JSON.parse(localStorage.getItem(0))
		}
		let index=Object.keys(localStorage);
        index.sort()
        
        for (var i = 1; i < index.length; i++){
        	let v=index[i]
            let notei=JSON.parse(localStorage.getItem(v))["note"];
            memory.localNotes.push(notei)
        } 

        pubsub.publish("UpdateNotes",memory.localNotes)
		pubsub.subscribe("createNote",memory.addNote);
		pubsub.subscribe("noteDeleted",memory.deleteNote);
		pubsub.subscribe("locateNote",memory.locateNote);
		pubsub.subscribe("modifyNote",memory.modifyNote);
		pubsub.subscribe("shift",memory.shift);

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
		stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(stack))
		pubsub.publish("UpdateNotes",memory.localNotes);
	},
	deleteNote: function (j) {
		let n=Object.keys(localStorage).length;
		let stackElement={"deleted":localStorage.getItem(j),"num":j}
		stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(stack))
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
		pubsub.publish("UpdateNotes",memory.localNotes)
		
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
    	pubsub.subscribe("render",memory.render);
    	let searchArea=document.querySelector("#search");
    	searchArea.addEventListener("keyup",notes.search);
    	pubsub.subscribe("searching",memory.search);
    	let butUndo=document.getElementById("buttonUndo");
        butUndo.addEventListener("click", notes.Undo);
	},
	Undo: function () {
		command();
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
			noteDiv.setAttribute("id","note "+(i+1));
			noteDiv.setAttribute("draggable","true");
			noteDiv.setAttribute("ondragstart","dragging(event)")
			noteDiv.setAttribute("class","note");
			noteDiv.setAttribute("num",i+1);
			//let p=document.createElement("p");
			let butDelete=document.createElement("button");
            butDelete.setAttribute("id","buttonDelete");
            butDelete.setAttribute("num",i+1);
            butDelete.textContent="Delete";        
            let butEdit=document.createElement("button");
            butEdit.setAttribute("id","buttonEdit");
            butEdit.setAttribute("num",i+1);
            butEdit.textContent="Edit"
            let butView=document.createElement("button");
            butView.setAttribute("id","buttonView");
            butView.setAttribute("num",i+1);
            butView.textContent="View"
			noteDiv.innerHTML=data[i];
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
        if (bt.getAttribute("id")=="buttonDelete"){
            notes.noteDeleted(bt);

        }
        else if(bt.getAttribute("id")=="buttonEdit"){
            notes.noteEdit(bt);

        }
        else if(bt.getAttribute("id")=="buttonView"){
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
        console.log(text);
        if (text){
        pubsub.publish("noteDeleted",b);
        pubsub.publish("createNote",text);
		textArea.value="";
		butCancel=document.querySelector("#cancel");
		butEdit=document.querySelector("#edit");
		let div=document.querySelector(".buttons");
        div.removeChild(butCancel);
        div.removeChild(butEdit);
        let butCreate=document.getElementById("buttonCreate");
            butCreate.style.display="inline";

        let stackElement={"edited":222};
		stack.push(stackElement);
		localStorage.setItem(0,JSON.stringify(stack))
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


notes.render(saved);
memory.render()
document.addEventListener('keydown', notes.checkZ)
console.log(memory.localNotes)
///console.log(localStorage)
