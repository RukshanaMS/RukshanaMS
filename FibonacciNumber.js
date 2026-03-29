// recurrsive function
function fibonacciCheck(n){
    if(n <=1) return n;
    if(n>1) return fibonacciCheck(n-1) + fibonacciCheck(n-2);
}
console.log("fibonacciCheck :", fibonacciCheck(8));
 
// iterative method using loop
function generateFibonacci(n){
    let fib = [0,1];
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1]+fib[i-2];
    }
    return fib.slice(0, n);
}
console.log("generateFibonacci :", generateFibonacci(9));

// Recusrive function for over full sequency length
function getFibonacciSerious(n){
    if(n<=1) return [0];
    if(n<=2) return [0,1];

    // recursive to get overall n-1
    let series = getFibonacciSerious(n-1);
    console.log("series :", series)
    series.push(series[series.length-1]+ series[series.length-2]);
    return series;
}
console.log("generateFibonacci :", getFibonacciSerious(5));