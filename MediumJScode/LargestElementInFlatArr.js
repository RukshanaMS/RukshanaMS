// Find the largest element in a nested array.

// flat()
function largestArray(arr){
    const flat =  arr.flat(Infinity);
    return Math.max(...flat);
}
console.log("largestArray :", largestArray([1,[8,9,10],15]));

//using reduce() // -Infinity has consider the max value so assign it to accumulator
function reducelargestArray(arr){
    let flattenArray = arr.flat(Infinity);
    console.log("flattenArray :", flattenArray);
    return flattenArray.reduce((acc, current) => current > acc? current : acc, -Infinity);
}
console.log("reducelargestArray :", reducelargestArray([1,[2,3,[4,5,6,]], 9]));

//  Recursive Flatten + Max 
function recursiveArray(arr){
    let result = [];
    for(let item of arr){
        if(Array.isArray(item)){
            result.push(...recursiveArray(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

const flat = recursiveArray([1,[2,3,[4,5,6]], 9]);
console.log("Flattened:", flat);
console.log("Max:", Math.max(...flat));

//using pure recursive
// Math.max(num1, num2, num3, ...) same Math.min compares num and gives result
function pureRecusrive(arr){
    let max = -Infinity;

    for(let item of arr){
        if(Array.isArray(item)){
            max = Math.max(max, pureRecusrive(item));
        } else {
             max = Math.max(max, item);
        }
    }
    return max;
}
console.log("pureRecusrive :", pureRecusrive([11, 12, [13 ,14 ,[15 ,16 ,17 ,[20]], 25], 30]));

//  Using reduce + Recursion
function reduceMax(arr) {
  return arr.reduce((max, item) => {
    if (Array.isArray(item)) {
      return Math.max(max, reduceMax(item));
    }
    return Math.max(max, item);
  }, -Infinity);
}

console.log(reduceMax([1,[2,3,[4,5,6]], 45])); // 9