

var str = '{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}}';

function dataParse(str){
    return eval("(" + str + ")");
}
console.log(dataParse(str))
var r=dataParse(str)
console.log(r.prop1)
console.log(r.myFn(1,2))
r.prop2=36;
console.log(r)
