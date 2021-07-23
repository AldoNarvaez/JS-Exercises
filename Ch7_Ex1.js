
let hex="#3020FF"
let hexpr2="#ABCDEFG334";
let number = '#3020f';



//With RegEx

function fromHexToRgb(hex){
    let hexnot = hex.match(/^#?[a-f\d]{6}$/gi);
    if (hexnot){
        let hexnot2=hexnot[0].match(/[a-f\d]{2}/gi)
    
    	let rgb=[]
    

        for (l of hexnot2){
            rgb.push(parseInt(l, 16));
        }
    
        return ("rgb("+rgb+")");
	}
	else{throw new Error("Not RGB format")}
}
console.log(fromHexToRgb(hex))
console.log(fromHexToRgb(number))
console.log(fromHexToRgb(hexpr2))

//Without RegEx

//const hexToRGB = function (hex) {
//	let arh=[]
//	if(hex.length==6 || hex.length==7){
//		if (hex[0]=="#"){
//			for (var i = 1; i < hex.length; i++) {
//				if(i%2==0){
//					arh.push(hex[i-1]+hex[i])
//				}
//			}
//		}
//		else{
//			for (var i = 0; i < hex.length; i++) {
//				if(i%2==0){
//					arh.push(hex[i]+hex[i+1])
//				}
//			}
//		}

//		let rgb=[]

//		for (var i = 0; i < arh.length; i++) {
//			rgb.push(parseInt(arh[i],16));
//		}

//		return ("rgb("+rgb+")")
//	}
//	else{throw new Error("Not RGB format")}

//}

//console.log(hexToRGB(hex))
//console.log(hexToRGB(number))


