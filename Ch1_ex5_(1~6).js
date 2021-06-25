let num=123456789;
let word="ferrocarril";

const numb=function (value) {
	if (typeof value=="string"){
		
		let vowel="aeiou"
		let c=0
		for(let j=0; j<value.length; j++){
			if(vowel.includes(value[j])){
					c=c+1;
				}
			}
	 	return c;	
	}
	else{
		let v=Math.floor(Math.log10(num))+1;
		return v;
	}
}

console.log(numb(num))
console.log(numb("ferrocarril"))