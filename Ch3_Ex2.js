const add=function(){
  let a=0;
  for (var i = 0; i < arguments.length ; i++) {
   a=arguments[i]+a;
  }
  return a
}

console.log(add(1,2)+add(1,4,6,7,2))
