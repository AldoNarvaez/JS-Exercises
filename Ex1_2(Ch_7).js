
//a)
let exa=".abc";
let regexa=/.abc/;

console.log(regexa.test(exa));


//b)
let exb="aaa!!1111";
let regexb=/a+b?!!1{4}/;

console.log(regexb.test(exb));


//c)
let exc="...a.b";
let regexc=/.{3}a\.b/;

console.log(regexc.test(exc));


//d)
let exd="hola";
let regexd=/\w/;

console.log(regexd.test(exd));


//e)
let exe="a b";
let regexe=/\s/;

console.log(regexe.test(exe));


//f)
let exf="33";
let regexf=/\d/;

console.log(regexf.test(exf));


//g)
let exg="aaa!!1111";
let regexg=/./;

console.log(regexg.test(exg));


//h)
let exh="a";
let regexh=/[abc]/;

console.log(regexh.test(exh));


//i)
let exi="abcc";
let regexi=/(abc)/;

console.log(regexi.test(exi));


//j)
let exj="aldO_93@chat.com";
let regexj=/[a-zA-Z_\$\.]+[A-Za-z_\$0-9\.]*@[a-zA-Z_\$\.]+[a-zA-Z_\$0-9\.]*\.(com|net|org){1}/;

console.log(regexj.test(exj));


//k)
let exk="(0 n)";
let regexk=/\([0oOn]{1}(_|\s)[0oOn]{1}\)/;

console.log(regexk.test(exk));
