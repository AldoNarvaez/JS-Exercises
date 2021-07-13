const addRec2=function (arr,i=0, s=0) {
	s=s+arr[i];
	const n=arr.length;
	if(i+1==n){
		return s;
	}
	else {
		return addRec2(arr,i+1,s);
	}

}

array=[1,3,5,7,9];
console.log(array)
console.log(addRec2(array))
console.log(array)

//const addRec= function(array) {
//	const ar=[];
//	for(let element of array ){
//		ar.push(element)
//	}
//	if (ar.length==1){return ar[0]}
//
//	else {
//		let n=ar.length;
//		ar[n-2]=ar[n-2]+ar[n-1];
//		ar.pop(ar[n-1]);
//		return addRec(ar)

//	}
	 

//}
