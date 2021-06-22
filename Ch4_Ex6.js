const flatten=function (array) {
let flat=[];

return array.reduce((a , b ) => { if (Array.isArray(b)==true ){return a.concat(flatten(b));} 
else{ return a.concat(b);} 
}, flat ); 

 
}

const distance = function(){
	let a=[]
	for (var i = 0; i < arguments.length ; i++){
   a.push(arguments[i]);
  }

a=flatten(a);

  let n=a.length;
  if(n<=2 || n%2!=0){throw new Error("Insufficient parameters")}
  else if (n==4) {

  	const d=Math.sqrt((a[0]-a[2])*(a[0]-a[2])+(a[1]-a[3])*(a[1]-a[3]));
  	return d
  }
  else if (n==6){
  	const d=Math.sqrt((a[0]-a[3])*(a[0]-a[3])+(a[1]-a[4])*(a[1]-a[4])+(a[2]-a[5])*(a[2]-a[5]));

  	return d
  }
  else if(n>6){throw new Error("Too many parameters")}


}

console.log(Math.sqrt(2));
//console.log(distance(1, 2, 2))
console.log(distance(1, 2, 2,2))
console.log(distance(1, 2,1,2,2,4));

console.log(distance([1,2],[2,2]));
console.log(distance([1,2,1],[2,2,4]));
//console.log(distance([1,2],[2,3,4]));

let v= [[1,2],[2,2]];
const r= [1,2,[3,4]]
console.log(Array.isArray(r))
console.log(r.flat())


