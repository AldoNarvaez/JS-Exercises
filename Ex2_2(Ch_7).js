//A
let regexa=/((jan|febr)uary|march|april|june|(jul|ma)y|(sept|nov|dec)ember|october|august)\s\d{2},\s\d{4}/i;
let exia="September 29, 1972";
let exiia="February 99, 0001";
let exiiia="June 04, 3000";
console.log(regexa.test(exia));
console.log(regexa.test(exiia));
console.log(regexa.test(exiiia));

//B
let regexb=/\w\d+|\d+\w/i;
let exib="A52";
let exiib="d747";
let exiiib="27X";
console.log(regexb.test(exib));
console.log(regexb.test(exiib));
console.log(regexb.test(exiiib));

//C
let regexc=/\w+\.(txt|java|cpp)/i;
let exic="test.java";
let exiic="program.cpp";
let exiiic="newReport.txt";
console.log(exic.match(regexc));
console.log(exiic.match(regexc));
console.log(exiiic.match(regexc));

//D
let regexd=/(.)(.).\2\1/
let exid="aabaa";
let exiid="aba";
let exiiid="12321";
let exiiiid="12355";

console.log(exid.match(regexd));
console.log(exiid.match(regexd));
console.log(exiiid.match(regexd));
console.log(exiiiid.match(regexd));



//E
let input = "Bee zapp crow Eagle Zorro mouse Ape you";
let regexe = /\b[b-y]+\b/ig;//+\b[b-y]?/ig;
console.log(input.match(regexe))

//F
let inputf = "Is <b>4 < -1/12</b> true? The <b>answer</b> will <em>surprise</em> you";
let regexf = /<(\w+)>(.*?)<\/\1>/gi;

console.log(inputf.match(regexf))

