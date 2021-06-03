const number = function(number) {
	let n=number
	this.getNumber =function(){
		if (typeof n=="number"){
			return n
		}
		else {return "invalid parameter"}
	}
	
	this.setNumber= function (value){
		if (typeof n=="number"){
			n=value;
			return n
		}
		else {return "invalid parameter"}
	}

	}

var numb= new number(20);

console.log(numb.getNumber())
numb.setNumber(100);
console.log(numb.getNumber())