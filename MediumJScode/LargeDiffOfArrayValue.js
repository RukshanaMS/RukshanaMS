// Find the largest difference between two numbers in an array.

// using Math internal methods
function findLargeDifference(arr){
    return Math.max(...arr)- Math.min(...arr);
}
console.log("findLargeDifference :", findLargeDifference([10,20,30,40,50,60,70]))

// using sort methods
function findLargeDifferenceBySort(arr){
    const array = arr.sort();
    return array[array.length-1]-array[0];
}
console.log("findLargeDifferenceBySort :", findLargeDifferenceBySort([11,22,33,44,55,66,77,88,99]));

// using loops
function findLargeDifferenceByLoop(arr){
    let min = Infinity;
    let max = -Infinity;

    for(let n of arr) {
        if (n < min) min = n;
        if (n > max) max = n;
    }
    return max-min;
}
console.log("findLargeDifferenceByLoop :", findLargeDifferenceByLoop([1,2,3,4,5,6,7,8]));

// using reduce
function findLargeDifferenceByReduce(arr){
    const {min, max} = arr.reduce((acc, val) => {
        console.log("acc :", acc, " val :", val);
        acc.min = Math.min(acc.min, val);
        acc.max = Math.max(acc.max, val);
        return acc;
    }, {min : Infinity, max : -Infinity})
    return max-min;
}
console.log("findLargeDifferenceByReduce arr:",findLargeDifferenceByReduce([45,10,15,20,25,30]));
console.log("findLargeDifferenceByReduce 2 value:",findLargeDifferenceByReduce([45,10]));
console.log("findLargeDifferenceByReduce single value:",findLargeDifferenceByReduce([45]));
console.log("findLargeDifferenceByReduce empty:",findLargeDifferenceByReduce([]));




// acc : { min: Infinity, max: -Infinity }  val : 45
// acc : { min: 45, max: 45 }  val : 10
// acc : { min: 10, max: 45 }  val : 15
// acc : { min: 10, max: 45 }  val : 20
// acc : { min: 10, max: 45 }  val : 25
// acc : { min: 10, max: 45 }  val : 30
// findLargeDifferenceByReduce : 35


// ✅ Step‑by‑step execution
// ✅ Initial accumulator:
// { min: Infinity, max: -Infinity }

// ✅ First (and only) value: 45
// acc.min = Math.min(Infinity, 45) → 45
// acc.max = Math.max(-Infinity, 45) → 45

// So after reduce:
// min = 45
// max = 45

// ✅ Return value:
// max - min = 45 - 45 = 0

// ✅ So the function is behaving correctly based on your formula.

// ✅ But logically… what should the answer be?
// If the question is:

// “Largest difference between two numbers in an array.”

// Then you need at least 2 numbers.
// A single number does not have a difference.
// So instead of returning 0, you should return:
// ✅ 0 (if you define “difference of one number = 0”)
// ✅ OR throw an error
// ✅ OR return null
// ✅ OR return undefined
// Depending on your requirement.

// ✅ ✅ Fix: handle edge cases properly
// ✅ If array has fewer than 2 numbers → return something meaningful
 
function findLargeDifferenceByReduce(arr){
    if (arr.length < 2) {
        return "Error: Need at least two numbers";
        // or return null;
        // or return undefined;
        // or return 0; 
    }

    const {min, max} = arr.reduce((acc, val) => {
        acc.min = Math.min(acc.min, val);
        acc.max = Math.max(acc.max, val);
        return acc;
    }, {min : Infinity, max : -Infinity});

    return max - min;
}

console.log(findLargeDifferenceByReduce([45])); 
// ✅ Now it won't return 0 incorrectly.

// ✅ Why empty [] breaks?
// Try:
// JavaScriptfindLargeDifferenceByReduce([])Show more lines
// Internally:

// Reduce receives no items
// min = Infinity
// max = -Infinity

// Final result:
// -Infinity - Infinity → NaN

// So again, without guarding the input, results become meaningless.
// ✅ Adding early checks fixes both cases.

// ✅ Summary
// InputOld OutputCorrect Behavior[45,10,15,20,25,30]✅ 35✅ Correct[45,10]✅ 35✅ Correct[45]❌ 0Should warn / handle[]❌ NaNShould warn / handle

//using recursion
function largestDiffRec(arr, index = 0, min = Infinity, max = -Infinity) {
  if (index === arr.length) {
    return max - min;
  }

  min = Math.min(min, arr[index]);
  max = Math.max(max, arr[index]);

  return largestDiffRec(arr, index + 1, min, max);
}

console.log("largestDiffRec :", largestDiffRec([4, 2, 10, 1, 6])); // 9
console.log("largestDiffRec :", largestDiffRec([])); // -infinity
console.log("largestDiffRec:",largestDiffRec([5])); // 0
