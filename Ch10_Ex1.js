var myLib = {
    math: {
        real: {
            add: function (a, b){ return a+b},
            sub: function (a, b){ return a-b},
            mul: function (a, b){ return a*b}
        },
        complex: {
            Num: function (real, img){return real/img/*code goes here*/},
            add: function (a, b){ return a+b/*code goes here*/},
            sub: function (a, b){ return a-b/*code goes here*/},
            mul: function (a, b){ return a*b/*code goes here*/}
              },
        matrix: {
            add: function (a, b){ return a+b/*matrix addition*/},
            sub: function (a, b){ return a-b /*matrix subtraction*/},
            mul: function (a, b){ return a*b/*matrix multiplication*/},
            eye: function (size){ return 5/*identity matrix*/},
            dot: function (m, a){ return m*b/*dot product*/},
            times:function(a, b){ return a*b/*element-wise multiplication*/}
           }
    }
};

//First Call
var answer = myLib.math.real.sub(
                  myLib.math.real.add (20, 22), 
                  myLib.math.real.mul(2,5));
console.log(answer)

//Call using with
with(myLib.math.real){
  let answer=sub(add(20,22),mul(2,5))
  console.log(answer);
}

//Simplify Call
var ad=myLib.math.real.add(20, 22);
var mul=myLib.math.real.mul(2, 5);
var answer2=myLib.math.real.sub(ad,mul);


//Second Call
var ans = myLib.math.matrix.times(
              myLib.math.matrix.eye (4), 
              myLib.math.complex.sub (
                       myLib.math.complex.Num (
                             myLib.math.real.add(5,2),
                             -3), 
                       myLib.math.complex.Num (7,4)
              )
          );
console.log(ans)

//Call using with
with(myLib.math){
  let ans=matrix.times(matrix.eye(4),
    complex.sub(complex.Num(real.add(5,2),-3),complex.Num(7,4)) );
  console.log(ans)
}                            
                       
//Simplify Call

var nc1=myLib.math.complex.Num (7,4);
var r1=myLib.math.real.add(5,2);
var nc2=myLib.math.complex.Num(r1,-3);
var sc=myLib.math.complex.sub(nc2,nc1);
var m2=myLib.math.matrix.eye(4);
var m1=myLib.math.matrix.times(m2,sc);

console.log(m1)





