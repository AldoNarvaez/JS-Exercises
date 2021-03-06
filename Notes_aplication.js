let butCreate=document.getElementById("buttonCreate");
    butCreate.addEventListener("click", create);
//localStorage.clear();
let textArea = document.getElementsByName('comments')[0];
textArea.addEventListener('keydown', Tabs);

    let saved=document.querySelector(".savedNotes");
    saved.addEventListener("click",inNote);

if (!localStorage.getItem(0)){
    localStorage.setItem(0,'0');
}

savedNotes()

    function savedNotes(){
        butCreate.style.display="inline";

        

        let index=Object.keys(localStorage);
        index.sort()
        
        for (var i = 1; i < index.length; i++) {
            let v=index[i]
        let p=document.createElement("p");
        p.setAttribute("class","note");
        if (JSON.parse(localStorage.getItem(v))["note"].length>15){
            p.textContent=JSON.parse(localStorage.getItem(v))["note"].slice(0,15)+"..."}
        else{
             p.textContent=JSON.parse(localStorage.getItem(v))["note"];
        }
            let butDelete=document.createElement("button");
            butDelete.setAttribute("id","buttonDelete");
            butDelete.setAttribute("num",v);
            butDelete.textContent="Delete";        
            let butEdit=document.createElement("button");
            butEdit.setAttribute("id","buttonEdit");
            butEdit.setAttribute("num",v);
            butEdit.textContent="Edit"
            let butView=document.createElement("button");
            butView.setAttribute("id","buttonView");
            butView.setAttribute("num",v);
            butView.textContent="View"
            
            let div=document.querySelector(".savedNotes");
            div.appendChild(p);  
            div.appendChild(butDelete);
            div.appendChild(butView);
            div.appendChild(butEdit);
        }

    }


    function create() {

        let index=Object.keys(localStorage);

        let textArea=document.getElementsByName("comments")[0];
        let text=textArea.value;
        if(Boolean(text)){
          let p=document.createElement("p");
            text.textContent="";
            p.setAttribute("class","note");
            if(text.length>15){
                p.textContent=text.slice(0,15)+"...";
            }
            else{p.textContent=text;}
            let date = new Date();
            let note = {"creation Date":date.toString(), "modified":date.toString(), "note":text};
            let data = JSON.stringify(note);
            let save=text;
            localStorage.setItem(index.length,data);

            let butDelete=document.createElement("button");
            butDelete.setAttribute("id","buttonDelete");
            butDelete.setAttribute("num",index.length);
            butDelete.textContent="Delete";        
            let butEdit=document.createElement("button");

            butEdit.setAttribute("id","buttonEdit");
            butEdit.setAttribute("num",index.length);
            butEdit.textContent="Edit";
            let butView=document.createElement("button");

            butView.setAttribute("id","buttonView");
            butView.setAttribute("num",index.length);
            butView.textContent="View"
            let div=document.querySelector(".savedNotes");
            div.appendChild(p);  
          div.appendChild(butDelete);
          div.appendChild(butView);
          div.appendChild(butEdit);
            textArea.value="";

        }
                
    }

    function inNote(clicked){

        let bt=clicked.target;
        if (bt.getAttribute("id")=="buttonDelete"){
            deleteNote(bt);

        }
        else if(bt.getAttribute("id")=="buttonEdit"){
            editNote(bt);

        }
        else if(bt.getAttribute("id")=="buttonView"){
            viewNote(bt);

        }


    }

    function viewNote(note) {
        let b=note.getAttribute("num");
        document.querySelector(".savedNotes").innerHTML="";
        
        butCreate.style.display="none";
        let butBack=document.createElement("button");
            butBack.setAttribute("id","back");
            butBack.textContent="Back";
            butBack.addEventListener("click",back);

        let div=document.getElementsByTagName("body");
        div[0].appendChild(butBack);
        let dates=document.querySelector(".Dates");

        let textArea=document.getElementsByName("comments")[0];
        let s=JSON.parse(localStorage.getItem(Number(b)))["note"];
        let d1=JSON.parse(localStorage.getItem(Number(b)))["creation Date"];
        let d2=JSON.parse(localStorage.getItem(Number(b)))["modified"]
        dates.textContent="Creation Date: "+d1+"\n"+"Modified Date: "+d2+".";
        textArea.value=s;
        textArea.readOnly=true;

    }

    function back() {
    let dates=document.querySelector(".Dates");
    dates.textContent=""
    let textArea=document.getElementsByName("comments")[0];
    textArea.value="";
    let bb=document.querySelector("#back");
    textArea.readOnly=false;

     document.querySelector("body").removeChild(bb);
     savedNotes();
    }

    function editNote(note) {
        let b=note.getAttribute("num");
        document.querySelector(".savedNotes").innerHTML="";
        butCreate.style.display="none";
        let textArea=document.getElementsByName("comments")[0];
        let s=JSON.parse(localStorage.getItem(Number(b)))["note"];
        textArea.value=s;
        let butCancel=document.createElement("button");
            butCancel.setAttribute("id","cancel");
            butCancel.textContent="Cancel";
            butCancel.addEventListener("click",cancel);

        let butEdit=document.createElement("button");
            butEdit.setAttribute("id","edit");
            butEdit.textContent="Save changes";
            butEdit.addEventListener("click",changeNote);
        let dates=document.querySelector(".Dates");
        let d1=JSON.parse(localStorage.getItem(Number(b)))["creation Date"];
        let d2=JSON.parse(localStorage.getItem(Number(b)))["modified"]
        dates.textContent="Creation Date: "+d1+"\n"+"Modified Date: "+d2+".";

        let div=document.getElementsByTagName("body");
        div[0].appendChild(butCancel);
        div[0].appendChild(butEdit);
        function changeNote() {
            let r=document.getElementsByName("comments")[0].value;
            let date = new Date();
            let note = {"creation Date":d1, "modified":date.toString(), "note":r};
            let data = JSON.stringify(note);
            localStorage.setItem(b,data);

            //localStorage.setItem(b,textArea.value);
            textArea.value="";
            div[0].removeChild(butCancel);
            div[0].removeChild(butEdit);
            dates.textContent="";
            savedNotes();

            }

    }

    function cancel() {
     let bt=document.querySelector("#cancel");
     document.querySelector("body").removeChild(bt);
     let be=document.querySelector("#edit");
     document.querySelector("body").removeChild(be);
     savedNotes();
     let textArea=document.getElementsByName("comments")[0];
     textArea.value="";

    }


    function deleteNote(note) {

        let b=note.getAttribute("num");
        let n=Object.keys(localStorage).length;
        document.querySelector(".savedNotes").innerHTML="";
        //location.reload();
        if(n==2){
            localStorage.removeItem(1);
        }
        else if(b==n-1){
             localStorage.removeItem(b);

        }
        else{
            for(let i=b; i<n-1; i++){
                let t=localStorage.getItem(Number(i)+1);
                localStorage.setItem(i,t);
                if(i==n-2){
                localStorage.removeItem(Number(i)+1);

                }  
            }
        }

      

        savedNotes()
    }

function Tabs(e){  
    if (e.key == 'Tab') {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.slice(0, start) +  "\t" + this.value.slice(end);
        this.selectionEnd = start + 1;
    }
}
