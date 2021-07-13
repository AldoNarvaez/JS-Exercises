class Number {
  constructor( number) {
    this.number = number;
  }

  get getNumber() {
  	if (typeof this.number==="number"){
    return this.number;}
    else{ throw new Error("invalid parameter")}
  }
  set newNumber(value) {
    if (typeof value==="number"){
      this.number=value;}
    else{ throw new Error("invalid parameter")}
	}
}

var temp = new Number(22);
console.log(temp.getNumber)
temp.newNumber=30;
console.log(temp.getNumber)
temp.newNumber="hola";
console.log(temp.getNumber)