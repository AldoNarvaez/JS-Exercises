const Fibonacci = function (n){
if (n<=1){
  return n
}

else { return (Fibonacci(n-1)+Fibonacci(n-2))}

}

console.log(Fibonacci(4))

//for(let i=0; i<=10;i++){
//console.log(Fibonacci(i))}
