
let hex="#3020FF"
let hexpr2="#ABCDEFG334"

let hexnot = /^#?([a-f\d]{2})([a-f\d])([a-f\d])/i ;

const hexToRGB = function (hex) {
	let arh=[]
	if(hex.length==6 || hex.length==7){
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
	else{throw new Error("Not RGB format")}

}
console.log(hexToRGB(hex))
//console.log(hexToRGB(hexpr2))

//Using RegEx

let number = '#3020ff';

function fromHexToRgb(hex){
    let hexnot = hex.match(/\w{2}/gi);
		let rgb=[]

    for (l of hexnot){
        rgb.push(parseInt(l, 16));
    }
    
    return ("rgb("+rgb+")");
}
console.log(fromHexToRgb(hex))