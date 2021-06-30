let reg=/[\w\d]+/i
let ex1="aBc";
let ex2="xyz";
let ex3="aK89";

const shift=function (entry) {
    let str="";
    let code;
    for (var i = 0; i < entry.length; i++) {
        code=entry.charCodeAt(i);
        if (code==122){
            code=97;
        }
        else if(code==57){
            code=48;
        }
        else{
            code=code+1;
        }
        nstr=String.fromCharCode(code);
        str=str+nstr;    

    }
    return str
}


console.log(ex1.replace(reg,shift(ex1)))
console.log(ex2.replace(reg,shift(ex2)))
console.log(ex3.replace(reg,shift(ex3)))