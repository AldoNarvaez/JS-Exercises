

const dataType = function(){
	let res=[];
	for (var i = 0; i < arguments.length ; i++) {
		tipo=typeof arguments[i];
		if (tipo =="number"){
			if( /\./.test(arguments[i])==true ){
				res.push("float");
			}
			else (res.push(tipo))
		}
		else if(tipo=="object"){
			if(Array.isArray(arguments[i])){
				res.push("array")

			}
			else{res.push(tipo)}

			
		}
		else{res.push(tipo)}


   // res.push(tipo);
  }
return res
}


console.log(dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {})); 
