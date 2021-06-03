
function A() {
 console.log("A: 30 secs");
};

function B() {
 console.log("B: 1 min");
};

function C() {
 console.log("C: 1 min 15 secs");
};

setInterval(A,30000);
setInterval(B,60000);
setInterval(C,75000);


