//iterative loop
function factorialNumber(num){
    let result = 1;
    for(let i=result ; i<= num ; i++) {
        result=result*i;
    }
    return result;
}
console.log("factorialNumber :", factorialNumber(5));

//recursive way
function recursiveFactorial(n){
    if(n === 0 ||  n === 1) return 1;
    return n*recursiveFactorial(n-1);
}
console.log("recursiveFactorial :", recursiveFactorial(6));

// .reduce() is for array so pass array to get the factorial;
function redcuceFuncFactorial(n){
    return n.reduce((acc, currentVal) => currentVal*acc, 1);
}
console.log("redcuceFuncFactorial :",redcuceFuncFactorial([1,2,3,4,5,6]));

//.reduce() for making array from number
// Array.from({length: num}, (_, i) => (i+1)) length defines array length, _ is value which is undefined ,i for index
function reduceFactorial(num){
    return Array.from({length: num}, (_, i) => (i+1)).reduce((acc, currentVal) => currentVal*acc,1);
}
console.log("reduceFactorial :", reduceFactorial(5));
