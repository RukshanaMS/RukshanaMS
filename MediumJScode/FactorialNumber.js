// Write a recursive factorial function.

function factorialNum(n){
    if(n === 0) return 1;
    return n * factorialNum(n-1);
}
console.log("factorialNum :", factorialNum(5));

// loops
function factorialLoops(num){
    let n = 1;
    for(let i = n; i <= num; i++){
        n = i * n;
    }
    return n;
}
console.log("factorialLoops :", factorialLoops(5));

// iternary
function factorialTernary(num){
    return num === 0 ? 1 : num * factorialTernary(num -1);
}
console.log("factorialTernary :", factorialTernary(4));
