const addRec= function(array) {
	if (array.length==1){return array[0]}

	else {
		n=array.length;
		array[n-2]=array[n-2]+array[n-1];
		array.pop(array[n-1]);
		return addRec(array)

	}
	 

}

array=[1,3,5,7];

console.log(addRec(array))