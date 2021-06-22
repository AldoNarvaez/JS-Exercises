    function CustomObject (a, b) {
        this.a = a;
        this.b = b;
    }
CustomObject.prototype.c = function () 
{ return this.a + this.b; };

CustomObject.prototype.d = function () 
{ return this.a*this.b; };


var obj = new CustomObject (2, 3);
//console.log(Object.getOwnPropertyNames(obj))
//console.log(obj.__proto__)
//console.log(obj.hasOwnProperty("c"))

const printObjProp=function(obj,bol=false){
  let prop=Object.getOwnPropertyNames(obj);
  if (bol==false){
    for (var t of Object.getOwnPropertyNames(obj.__proto__)) {
         if (t!="constructor"){
              prop.push(t);
         }
    }
   }
return prop
}   
console.log(printObjProp(obj))
console.log(printObjProp(obj,false))
console.log(printObjProp(obj,true))