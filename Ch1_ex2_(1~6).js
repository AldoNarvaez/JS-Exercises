const f= function (n) {
	return("Hello times "+n);
}

const limitFun=function(fn,num){
	let c=0;
	const count=function () {
		if(c<num){
			c=c+1;
			return f(c)
		}
		else{return "Does not execute"}		
	}
	return count
}

let limited=limitFun(f,2);
console.log(limited)
console.log(limited())
console.log(limited())
console.log(limited())
console.log(limited())



