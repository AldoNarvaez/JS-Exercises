let arr=["casa","aldo","ferrocarril", "comer","zapato","yellow"];
let pr="hola";


const sorting=function (array,sort="ascending",type="alphabetic") {
	if (type=="alphabetic"){
		
			if (sort=="ascending"){
				return array.sort();
			}
			else if(sort="descending"){
				return array.sort().reverse();
			}

		}
		else if(type=="length"){
			if(sort=="ascending"){
 			return arr.sort(function(a,b){
		return b.length-a.length;})						
			
 			}
 			else if(sort=="descending"){
 		return	arr.sort(function(a,b){
	return a.length-b.length;} )
		}

		}
	
	

	else if(type=="consonant"){

  	return arr.sort(function(a,b){
	let reg=/[^aeiou]/ig;
	let v=a.match(reg);
	let t=b.match(reg);
	if(sort=="ascending"){
	return v.length-t.length;
	}
	else if(sort=="descending"){
	return t.length-v.length;
	}
    })

 			
 	
}
}


console.log(arr)
console.log(sorting(arr))
console.log(sorting(arr,"descending"))
console.log(sorting(arr,"ascending","consonant"))
console.log(sorting(arr,"descending","consonant"))
console.log(sorting(arr,"ascending","length"))
console.log(sorting(arr,"descending","length"))

