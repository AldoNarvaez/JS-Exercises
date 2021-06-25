let arr=["casa","aldo","ferrocarril", "comer","zapato","yellow"];
let pr="hola";


const sorting=function (array,sort="ascending",consonant=false) {
	if (consonant==false){
		if (sort=="ascending"){
			return array.sort();
		}
		else if(sort="descending"){
			return array.sort().reverse();
		}
	}

	if (consonant==true){
   		let n=array.length;
		let vowel="aeiou"
		let ar1=[];
		for(let i=0; i<n; i++){
			let r=array[i].length;
			let c=r;
			for(let j=0; j<r; j++){
				if(vowel.includes(array[i][j])){
					c=c-1;
				}
			}
	
			ar1.push(c);
 		}

 		if(sort=="ascending"){
 			for (var s = 0; s <n ; s++) {
 				let v=ar1[s];
 				let l=array[s];
 				let m=s;
 				while(m>=1 && ar1[m-1]>v){
 					ar1[m]=ar1[m-1]
 					array[m]=array[m-1]
 					m=m-1;
 				 			}
 				ar1[m]=v;
 				array[m]=l;
 			}
 			return array;
 		}
 		else if(sort=="descending"){
 			for (var s = 0; s <n ; s++) {
 				let v=ar1[s];
 				let l=array[s];
 				let m=s;
 				while(m>=1 && ar1[m-1]<v){
 					ar1[m]=ar1[m-1]
 					array[m]=array[m-1]
 					m=m-1;
 				 			}
 				ar1[m]=v;
 				array[m]=l;
 			}
 			return array;
 		}
	}


}

console.log(arr)
console.log(sorting(arr))
console.log(sorting(arr,"descending"))
console.log(sorting(arr,"ascending",true))
console.log(sorting(arr,"descending",true))

