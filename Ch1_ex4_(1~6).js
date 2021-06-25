let objA={"name":"Aldo","surname":"Cao"};
let objB={"birth":1993,"place":"Veracruz"};

const copyProp=function (objA,objB,props=[]) {
	if (props[0]==undefined){
		let prop=Object.getOwnPropertyNames(objB);
		for(let t of prop){
			objA[t]=objB[t];
		}
		return objB
	}

	else{
		for(let r of props){
			objA[r]=objB[r];
		}
	}
}
console.log(objA)
console.log(objB)


copyProp(objA,objB)
console.log(objA)
console.log(objB)

copyProp(objB,objA,["surname"])
console.log(objA)
console.log(objB)

