let e1="aabaa";
let e2="bbbb";
let e3="hola";
let e4="grotorg";

const isPalindrome=function (string) {
let n=string.length;
let reg=""
let pal=Math.floor(n/2);

for (var i = 0; i <pal ; i++) {
	reg=reg+"(.)"
	if(i==pal-1 && n%2!=0)
		reg=reg+"."
}


for (var i = 0; i <pal ; i++) {
	reg=reg+`\\${pal-i}`;
}

let regex=new RegExp(reg);
return (regex.test(string));
}

console.log(isPalindrome(e2))


