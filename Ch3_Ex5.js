    function CustomObject (a, b) {
        this.a = a;
        this.b = b;
    }
CustomObject.prototype.c = function () 
{ return this.a + this.b; };

CustomObject.prototype.d = function () 
{ return this.a*this.b; };


var obj = new CustomObject (2, 3);


const printObjProp=function(obj,bol=false){
  if (bol==false){
    for (keys in obj){
      if (typeof obj[keys] == "function"){
          console.log(obj[keys]());
      }
      else {console.log(obj[keys]);}
    }

   }
   else {
    for(keys in obj){
      if (obj.hasOwnProperty(keys)==true)
        console.log(obj[keys]);
    }
   }

}

printObjProp(obj,true)