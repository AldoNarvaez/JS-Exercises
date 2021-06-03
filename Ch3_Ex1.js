mul=function(a,b){
	var num = a*b;
	let base = "0123456789abc";
	let n=base.length;

	var val = "";
  while (num > 0) {
    val = base[num % n] + val;
    num = (num - (num % n)) / n;
  }
  return val
}

console.log(mul(6,9))
