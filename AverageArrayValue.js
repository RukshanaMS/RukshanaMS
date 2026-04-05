// Implement a function that returns the average value of numbers in an array.

// loops
function AverageArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum +=arr[i];
    }
    return sum/arr.length;
}
console.log("AverageArray :", AverageArray([10,20,20]));

//reduce()
function AverageWithReduce(arr){
    const average = arr.reduce((sum, current) => sum +=current, 0);
    return average/arr.length;
}
console.log("AverageWithReduce :", AverageWithReduce([3,6,9,12]));

//forof
function AverageWithForof(arr){
    let sum = 0;
    for(let val of arr){
        sum += val;
    }
    return sum / arr.length;
}
console.log("AverageWithForof :", AverageWithForof([4,8,10]));

// recursive
function recursiveAverageval(arr, n = arr.length){
    if( n === 0 ) return 0;
    if( n === 1 ) return arr[0];
    const sum = recursiveAverageval(arr, n-1) * (n - 1) + arr[n - 1];
    console.log("sum :", sum);
    return sum/n
}
console.log("recursiveAverageval :", recursiveAverageval([4,8,10]));