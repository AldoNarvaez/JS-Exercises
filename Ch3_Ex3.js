
const myMath = {
add : function(){
  let a=0;
  for (var i = 0; i < arguments.length ; i++) {
   a=arguments[i]+a;
  }
  return a},

  mul : function(){
  let a=1;
  for (var i = 0; i < arguments.length ; i++) {
   a=arguments[i]*a;
  }
  return a},

  
  fact : function(n){
  let t=1;
  for (var i = 1; i < n+1 ; i++) {
   t=t*i;
  }
  return t}


};
console.log(myMath.add(1,2,3));
console.log(myMath.mul(1,2,3));
console.log(myMath.fact(5));
