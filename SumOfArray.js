// Implement a function to sum all numbers in an array.

function sumOfArrWithReduce(arr){
    return arr.reduce((acc, current) => current + acc, 0);
}
console.log("sumOfArr :", sumOfArrWithReduce([1,2,3,4,5]));

function sumOfArrWithForLoop(arr){
    let res = 0;
    for(let i =0; i<arr.length; i++){
        res = res+arr[i];
    }
    return res;
}
console.log("sumOfArrWithLoop :", sumOfArrWithForLoop([3,6,9]));

function sumOfArrWithForOf(arr){
    let res = 0;
    for(let num of arr){
        res +=num
    }
    return res;
}
console.log("sumOfArrWithForOf :", sumOfArrWithForOf([1, 2, 3, 4])); // 10

function sumOfArrWithWhile(arr){
    let sum = 0;
    let i = 0;

    while(i < arr.length){
        sum += arr[i];
        i++;
    }
    return sum;
}
console.log("sumOfArrWithWhile :", sumOfArrWithWhile([1, 2, 3, 4])); // 1

function sumRecursiveSlice(arr) {
    if (arr.length === 0) return 0;     // base case
    return arr[0] + sumRecursiveSlice(arr.slice(1));
}

console.log(sumRecursiveSlice([1, 2, 3, 4])); // 10