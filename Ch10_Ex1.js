var myLib = {
    math: {
        real: {
            add: function (a, b){/*code goes here*/ },
            sub: function (a, b){ /*code goes here*/},
            mul: function (a, b){ /*code goes here*/}
        },
        complex: {
            Num: function (real, img){/*code goes here*/},
            add: function (a, b){ /*code goes here*/},
            sub: function (a, b){ /*code goes here*/},
            mul: function (a, b){ /*code goes here*/}
              },
        matrix: {
            add: function (a, b){ /*matrix addition*/},
            sub: function (a, b){ /*matrix subtraction*/},
            mul: function (a, b){ /*matrix multiplication*/},
            eye: function (size){ /*identity matrix*/},
            dot: function (m, a){ /*dot product*/},
            times:function(a, b){ /*element-wise multiplication*/}
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
const r=myLib.math.real;
var answer1=r.sub(r.add(20,22),r.mul(2,5));

console.log(answer1);


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

const s=myLib.math;
const comp=s.complex;
const mat=s.matrix;
var answer2=mat.times(mat.eye(4),comp.sub(comp.Num(s.real.add(5,2),-3),comp.Num(7,4)));
console.log(answer2);


console.log(m1)





