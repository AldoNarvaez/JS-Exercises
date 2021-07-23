
class ObjectNumber {
    constructor(number) {
        let value;
        if(typeof number==="number")
          {value=number;}
        else{throw new Error("invalid parameter")}
        Object.defineProperty(this, 'numb', {
            get (){ return value },
            set (n) { if(typeof n==="number"){
                      value=n;
                      } 
                      else{throw new Error("invalid parameter")}
            }
        })
    }
}


var n = new ObjectNumber(22);
console.log(n.numb)
console.log(n.numb+50)
n.numb=30;
console.log(n.numb)
//n.numb="hola";
//console.log(n.getNumber)