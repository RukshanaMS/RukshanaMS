// Merge two arrays by alternating elements.

function mergeArrys(a, b) {
    const res = [];
    const maxLen = Math.max(a.length, b.length);
    console.log("maxLen :", maxLen);

    for ( let i = 0; i< maxLen ; i++){
        if( i < a.length ) res.push(a[i]);
        if( i < b.length ) res.push(b[i]);
    }
    return res;
}
console.log("mergeArrys :", mergeArrys([1,2,3], [4,5,6]));
// maxLen : 3
// mergeArrys : [ 1, 4, 2, 5, 3, 6 ]
console.log("mergeArrys :", mergeArrys([1,2,3,6], [8,9,10,11]));
// maxLen : 4
// mergeArrys : [
//   1,  8, 2,  9,
//   3, 10, 6, 11
// ]
console.log("mergeArrys :", mergeArrys([1,2,3], [3,6,7]));
// maxLen : 3
// mergeArrys : [ 1, 2, 3 ]
console.log("mergeArrys :", mergeArrys([1,2,3], []));// maxLen : 3
// mergeArrys : [ 1, 3, 2, 6, 3, 7 ]

console.log("mergeArrys :", mergeArrys([], [8,9,10,11]));
// maxLen : 4
// mergeArrys : [ 8, 9, 10, 11 ]
console.log("mergeArrys :", mergeArrys([], []));
// maxLen : 0
// mergeArrys : []

function mergeArraysWhile(a, b) {
    const result = [];
    let i = 0;

    while( i < a.length || i < b.length ){
        if (i < a.length) result.push(a[i]);
        if (i < b.length) result.push(b[i]);
        i++;
    }
    return result;
}
console.log("mergeArraysWhile :", mergeArraysWhile([11,22,33], [44,55,66])); //[ 11, 44, 22, 55, 33, 66 ]
console.log("mergeArraysWhile :", mergeArraysWhile([10,20,30,60], [88,99,100,110])); // [
//   10,  88, 20,  99,
//   30, 100, 60, 110
// ]
console.log("mergeArraysWhile :", mergeArraysWhile([], [30,60,70])); //[ 30, 60, 70 ]

// using reduce
// ✅ Step‑by‑Step Explanation
// ✅ 1. Math.max(a.length, b.length)
// This finds the larger length of the two arrays.
// For:
// a = [1,3,5] → length = 3b = [2,4,6] → length = 3
// So:
// Math.max(3,3) → 3


// ✅ 2. Array(Math.max(...))
// This creates an empty array with that length:
// Array(3)  // [empty × 3]

// ✅ 3. [...Array(3)] spreads it
// This converts the sparse array into a real array with undefined values:
// [undefined, undefined, undefined]
// This array is only used to loop 3 times.

// ✅ 4. .reduce((acc, _, i) => {...}, [])
// You run reduce 3 times (because the array has 3 elements).
// Parameters:

// acc → accumulator array (starts as [])
// _ → current element (we don’t need it, so _)
// i → index (0, 1, 2)


// ✅ 5. Inside reduce:
// ✅ Iteration 1 → i = 0
// acc = []
// a[0] = 1 → push
// b[0] = 2 → push
// acc = [1, 2]

// ✅ Iteration 2 → i = 1
// acc = [1, 2]
// a[1] = 3 → push
// b[1] = 4 → push
// acc = [1, 2, 3, 4]

// ✅ Iteration 3 → i = 2
// acc = [1, 2, 3, 4]
// a[2] = 5 → push
// b[2] = 6 → push
// acc = [1, 2, 3, 4, 5, 6]


// ✅ 6. Final returned result
// [1, 2, 3, 4, 5, 6]


// ✅ Final Output
// [1, 2, 3, 4, 5, 6]``
function mergeArrayReduce(a,b) {
    return [...Array(Math.max(a.length, b.length))].reduce((acc, _, i) => {
        if( i < a.length ) acc.push(a[i]);
        if( i < b.length ) acc.push(b[i]);
        return acc;
    }, [])
}
console.log("mergeArrayReduce :", mergeArrayReduce([20], [30,60,70])); //[ 20, 30, 60, 70 ]

function mergeArrayReduce1(a,b) {
    const maxLength = Math.max(a.length, b.length)
    return Array.from({ length: maxLength }).reduce((acc, _, i) => {
        if( i < a.length ) acc.push(a[i]);
        if( i < b.length ) acc.push(b[i]);
        return acc;
    }, [])
}
console.log("mergeArrayReduce1 :", mergeArrayReduce1([20, 30], [30,60,70])); // [ 20, 30, 30, 60, 70 ]

//  4. Using flatMap (clean + modern)
// ✅ flatMap() Syntax
// array.flatMap(callback(element, index, array), thisArg)
// flatMap() works like map(), but automatically flattens one level of the returned arrays.

// ✅ Parameters Explained (with examples)
// ✅ 1. callback(element, index, array)
// This function runs once for each element in the array.
// It receives three arguments:
// A. element
// The current item in the array.
// B. index
// The position of the current element.
// C. array
// The original array on which flatMap was called.

// ✅ Example showing all 3 parameters:
 const arr = ["a", "b", "c"];
 const result = arr.flatMap((element, index, array) => {  
    console.log("element:", element);  
    console.log("index:", index);  
    console.log("array:", array);  
    return [element, element.toUpperCase()];
    });
  console.log("faltMap  result :", result);
// ✅ Output:
// element: a
// index: 0
// array: ["a", "b", "c"]

// element: b
// index: 1
// array: ["a", "b", "c"]

// element: c
// index: 2
// array: ["a", "b", "c"]

// Final result:
// ["a", "A", "b", "B", "c", "C"]

// ✅ 2. thisArg (optional)
// thisArg allows you to provide a custom this value inside your callback.
// ✅ Example using thisArg

const multiplier = { factor: 10 };
const array = [1, 2, 3];
const result1 = array.flatMap(function (num) {  
    return [num * this.factor];
}, multiplier);
console.log("flatMap with thisArg :", result1);
// ✅ Output:
// [10, 20, 30]

function mergeArrayFlatMap(a,b){
    const maxLength = Math.max(a.length, b.length);
    return Array.from({length : maxLength}).flatMap((_, i) => {
        return [a[i], b[i]].filter(v => v !== undefined);
    });
}
console.log("mergeArrayFlatMap :", mergeArrayFlatMap([2,4,6], [1,3,5]));

// ✅ HOW THIS WORKS (Step‑by‑Step)
// ✅ 1. Find the larger length
// const maxLen = Math.max(a.length, b.length);
// For:
// a = [1, 3, 5] → length 3
// b = [2, 4, 6] → length 3

// So:
// maxLen = 3


// ✅ 2. Create an array of size maxLen
// Array.from({ length: maxLen })
// This produces:
// [undefined, undefined, undefined]

// This lets us loop 3 times (i = 0, 1, 2).

// ✅ 3. Use .flatMap() to alternate‑merge
// 🔍 For each index i, we create:
// [a[i], b[i]]
// Step-by-step:

// i    a[i]    b[i]    pair
// 0    1       2       [1, 2]
// 1    3       4       [3, 4]
// 2    5       6       [5, 6]

// ✅ 4. Filter out undefined values
// .filter(v => v !== undefined)
// This is required ONLY if arrays have different lengths.

// ✅ 5. flatMap flattens the result
// Normally map would give:
// [[1,2], [3,4], [5,6]]

// But flatMap auto‑flattens one level:
// [1, 2, 3, 4, 5, 6]

// ✅ That’s your final merged alternating array.

// ✅ Final Output
// [1, 2, 3, 4, 5, 6]