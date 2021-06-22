const addRec= function(array) {
	const ar=[];
	for(let element of array ){
		ar.push(element)
	}
	if (ar.length==1){return ar[0]}

	else {
		n=ar.length;
		ar[n-2]=ar[n-2]+ar[n-1];
		ar.pop(ar[n-1]);
		return addRec(ar)

	}
	 

}

array=[1,3,5,7,1];
console.log(array)
console.log(addRec(array))
console.log(array)