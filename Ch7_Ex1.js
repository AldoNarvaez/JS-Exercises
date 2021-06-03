
let hex="#3020FF"

let hexnot = /^#?([a-f\d])([a-f\d])([a-f\d])/i ;

const hexToRGB = function (hex) {
	let arh=[]

	if (hex[0]=="#"){
		for (var i = 1; i < hex.length; i++) {
			if(i%2==0){
				arh.push(hex[i-1]+hex[i])
			}
		}
	}
	else{
		for (var i = 0; i < hex.length; i++) {
			if(i%2==0){
				arh.push(hex[i]+hex[i+1])
			}
		}
	}

	let rgb=[]

	for (var i = 0; i < arh.length; i++) {
		rgb.push(parseInt(arh[i],16));
	}

	return ("rgb("+rgb+")")

}




console.log(hexToRGB(hex))