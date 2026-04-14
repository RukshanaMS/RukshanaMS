// Find the second largest number in an array.

function secondlargestElementBySort(arr) {
    const sorted = [...arr].sort((a,b) => b - a);
    return sorted[1];
}
console.log("secondlargestElementBySort :", secondlargestElementBySort([12, 24, 4, 6, 8, 10])); // 12

// Here’s the reason why we write:
// const sorted = [...arr].sort((a, b) => b - a);
// instead of simply:
// arr.sort((a, b) => b - a);

// ✅ Short Answer
// Because
// 👉 arr.sort() MUTATES the original array,
// 👉 while [...arr] creates a copy, keeping the original array unchanged.

// ✅ Full Explanation
// ✅ 1. arr.sort() sorts the array in place
// JavaScript’s Array.prototype.sort() modifies the original array.
// Example:
// let a = [10, 5, 20];let b = a.sort((a, b) => b - a);console.log(a); // [20, 10, 5]  ✅ mutated!console.log(b); // [20, 10, 5]``
// The original array a is changed.
// This is called in‑place mutation.

// ✅ 2. [...arr] creates a shallow copy
// Using the spread operator:
// [...arr]
// creates a new array with the same values.
// So this keeps the original array safe:
// const sorted = [...arr].sort((a, b) => b - a);
// Now:

// sorted → sorted array
// arr → still untouched

// Example:
let arr = [10, 5, 20];
let sorted = [...arr].sort((a, b) => b - a);
console.log(arr);   // [10, 5, 20] ✅ original preserved
console.log(sorted);  // [20, 10, 5]
function secondlargestElementByLoops(arr) {
    let max = -Infinity; 
    let secondMax = -Infinity;

    for ( let num of arr) {
        if(num > max) {
            secondMax = max;
            max = num;
        } else if ( num < max && num > secondMax) {
            secondMax = num;
        }
    }
    return secondMax;
}
console.log("secondlargestElementByLoops :", secondlargestElementByLoops([100, 120, 80, 177, 152, 88])); //152

function secondlargestElementBySet(arr) {
    const uniquesort = [...new Set(arr)];
    uniquesort.sort((a,b) => b - a);
    return uniquesort[1];
}
console.log("secondlargestElementBySet ", secondlargestElementBySet([10,5,26])); // 10

function secondlargestElementByFiltering(arr) {
    const max = Math.max(...arr);
    const filtered = arr.filter(n => n !== max);
    return Math.max(...filtered);
}
console.log("secondlargestElementByFiltering :",secondlargestElementByFiltering([10, 5, 20, 8, 15])); // 15