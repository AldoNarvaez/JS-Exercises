const f= function (n) {
	return("Hello times "+n);
}

const limitFun=function(fn,num){
	let c=0;
	const count=function (...arg) {
		if(c<num){
			c=c+1;
			return fn(...arg)
		}
		else{throw new Error("Limit of executions reached")}		
	}
	return count
}

const Another=function (n) {
	return ("Goodbye times "+n)
	}

let limited=limitFun(f,2);
console.log(limited)
console.log(limited(1))
console.log(limited(2))
console.log(limited())
console.log(limited())

let lim=limitFun(Another,2);
console.log(lim)
console.log(lim(1))
console.log(lim(2))
console.log(lim())



