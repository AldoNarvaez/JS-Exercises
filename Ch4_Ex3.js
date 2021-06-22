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
		}
		else {return "invalid parameter"}
	}

	}

var numb= new number(20);

//console.log(numb.getNumber())
//numb.setNumber(100);
//console.log(numb.setNumber(100))
//console.log(numb.getNumber())

class Number {
  constructor( number) {
    this.number = number;
  }
  get getNumber() {
    return this.number;
  }
  set newNumber(value) {
    this.number = value;

}
}
var temp = new Number(22);
console.log(temp.getNumber)
temp.newNumber=30;
console.log(temp.getNumber)