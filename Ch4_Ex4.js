

const dataType = function(){
	let res=[];
	for (var i = 0; i < arguments.length ; i++) {
		let type=typeof arguments[i];
		if (type =="number"){
			if( Number.isInteger(arguments[i]) ){
				res.push(type);
			}
			else (res.push("float"))
		}
		else if(type=="object"){
			if(Array.isArray(arguments[i])){
				res.push("array")

			}
			else{res.push(type)}

			
		}
		else{res.push(type)}


   // res.push(tipo);
  }
return res
}

console.log(dataType(3.333333e1, 1, 6.2831, "pi*2", [function(){}, 1], {}, function () {})); 
