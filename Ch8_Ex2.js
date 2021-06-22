
function A() {
 console.log("A: 30 secs");
};

function B() {
 console.log("B: 1 min");
};

function C() {
 console.log("C: 1 min 15 secs");
};

const Primary= function(){
	let c=0;
	const Second=function(){
		c=c+1;
		if(c%2==0){
			if (c%4==0)
			{return A(),B();}
			else{A();}
		}
		//if(c%4==0){
		//	return B();
		//}
		if(c%5==0){
			return C()
		}

	}
	return Second
}

let t=Primary();
setInterval(t,5000);


