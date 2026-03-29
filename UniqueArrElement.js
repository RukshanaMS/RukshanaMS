// Write a function that returns unique elements from an array.

//loops
function uniqueArr(arr){
    let result =[];

    for(let i = 0;i< arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i]);
        }
    }
    return result;

}
console.log("uniqueArr :",uniqueArr([0,2,3,4,2,4]));

//new Set way
function uniqeArray(arr){
    return [...new Set(arr)];
}
console.log("uniqeArray new set array way:", uniqeArray([7,8,9,3,1,7,9,8]));

//reduce()
function reduceUniqueArr(arr){
    return arr.reduce((acc, val)=> {
        if(!acc.includes(val)){
             acc.push(val)
        }
        return acc;
    }, [])
}
console.log("reduceUniqueArr :", reduceUniqueArr([100,200,300,600,300,200,100]));

// filter()
function filterUniqueArr(arr){
    return arr.filter((val, index) => arr.indexOf(val) === index)
}
console.log("filterUniqueArr :", filterUniqueArr([3,4,3,4,5,6,7]));


// new Map()
// A Map requires pairs like:
// [ key, value ]
// EX: 
// const m = new Map([
//   ["name", "Rukshana"],
//   ["age", 25]
// ]);
// But arrays like [2,3,2,3,4] are NOT pairs. 
// console.log("new map() :", new Map([2,3,2,3,4,5,6,7]));
// So this will also throw an error:

function uniqueWithMap(arr) {
    let map = new Map();
    let result = [];

    for (let num of arr) {
        if (!map.has(num)) {
            map.set(num, true);
            result.push(num);
        }
    }

    return result;
}

console.log("uniqueWithMap:", uniqueWithMap([2,3,2,3,4,5,6,7]));

function uniqueWithMap(arr) {
    let map = new Map();
    return arr.filter(num => !map.has(num) && map.set(num, true));
}

console.log(uniqueWithMap([0,2,3,4,2,4]));


// Using a Loop + Object (frequency map)
function frequencyMapArray(arr){
    let freq = {};
    let result = [];

    for(let num of arr){
        if(!freq[num]){
            freq[num] = true;
            result.push(num);
        }
    }
    return result;
}
console.log("frequencyMapArray :",frequencyMapArray([1,2,3,1,2,3,0]));

// ✔ freq = {}
// This is an object used as a map to keep track of which numbers you have seen already.
// Example:
// {
//   0: true,
//   2: true,
//   3: true,
//   4: true
// }

// ✔ Loop: for (let num of arr)
// You iterate through each number of the array.
// ✔ Condition: if (!freq[num])
// This checks:

// If the number is not already present in the freq object
// → then this is the first time you are seeing it.

// freq[num] => Uses the value inside num as the key
// freq["5"] => What JS converts numeric keys into
// freq.num => Looks for a literal property named "num"

// A Set stores unique values only.A Map stores key–value pairs like an object, BUT:

// keys can be anything (number, string, object, array, function)
// preserves insertion order
// faster for heavy lookups

// set map uses get delete has methods for checking


// const s = new Set([1, 2, 3, 3, 4]);
// console.log(s); // Set(4) { 1, 2, 3, 4 }
//  2. new Map() — Key–Value Store (Better than Object)
// A Map stores key–value pairs like an object, BUT:

// keys can be anything (number, string, object, array, function)
// preserves insertion order
// faster for heavy lookups

// ✔ Creating a Map:
// JavaScriptconst m = new Map();Show more lines
// ✔ Set values:
// JavaScriptm.set("name", "Rukshana");m.set(10, "age");m.set({ x: 1 }, "objectKey");Show more lines
// ✔ Get values:
// JavaScriptconsole.log(m.get("name"));  // RukshanaShow more lines
// ✔ Check key:
// JavaScriptm.has(10); // trueShow more lines
// ✔ Delete key:
// JavaScriptm.delete("name");Show more lines
