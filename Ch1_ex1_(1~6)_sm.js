let arr=["casa","aldo","ferrocarril", "comer","zapato","yellow"];
let pr="hola";


const sorting=function (array,sort="ascending",consonant=false, length=false) {
	if (consonant==false){
		if(length==false){
			if (sort=="ascending"){
				return array.sort();
			}
			else if(sort="descending"){
				return array.sort().reverse();
			}

		}
		else{
			if(sort=="ascending"){
 			return arr.sort(function(a,b){
		return b.length-a.length;})						
			
 			}
 			else if(sort=="descending"){
 		return	arr.sort(function(a,b){
	return a.length-b.length;} )
		}

		}
	}
	

	if (consonant==true){

   		
 		if(sort=="ascending"){
 			return arr.sort(function(a,b){
	let reg=/[^aeiou]/ig;
	let v=a.match(reg);
	let t=b.match(reg);
	return v.length-t.length;

} )
 			
 		}
 		else if(sort=="descending"){
 		return	arr.sort(function(a,b){
	let reg=/[^aeiou]/ig;
	let v=a.match(reg);
	let t=b.match(reg);
	return t.length-v.length;

} )
		}


	}
}


console.log(arr)
console.log(sorting(arr))
console.log(sorting(arr,"descending"))
console.log(sorting(arr,"ascending",true))
console.log(sorting(arr,"descending",true))
console.log(sorting(arr,"ascending",false,true))
console.log(sorting(arr,"descending",false,true))

