// Flatten a nested array into a single-level array.
const array = [[2,3], [1], [4,5,6]];
console.log("flaten methods :", array.flat());


// [1, [2, [3]]].flat(1)
// // → [1, 2, [3]]   ✅ flattened 1 level only

// [1, [2, [3]]].flat(2)
// // → [1, 2, 3]     ✅ flattened 2 levels

const arr = [1, [2, 3], [4, [5, 6]], 7];
function flatten1(arr) {
  return arr.flat(Infinity); // but “ INFINITY Flatten EVERYTHING completely.”
}

console.log("flatten1 :", flatten1(arr));
// [1, 2, 3, 4, 5, 6, 7]


function reduceArrayFlat(array){
    return array.reduce((acc, current) => {
        return Array.isArray(current) ? acc.concat(reduceArrayFlat(current)) : acc.concat(current);
    }, []);
}
console.log("reduceArrayFlat :", reduceArrayFlat([0, [2,3], [1], [4,5,6], 9]))

function recursiveArrayFlat(arr){
    let result = [];

    for(let element of arr){
        if(Array.isArray(element)){
            result.push(...recursiveArrayFlat(element)); // spreading each elements of an array is important
        } else {
            result.push(element)
        }
    }
    return result;
}
console.log("recursiveArrayFlat :", recursiveArrayFlat(array));


/* Spread operator (...) + concat:
JavaScript[].concat(...arr)Show more lines
only spreads the first level items:

0 → ok
[4, [3,5], 8] → array is NOT spread deeply
9 → ok
*/
function spreadArrayFlat(arr){
    return [].concat(...arr); // it will not fully flatten so dont use this
}
console.log("spreadArrayFlat :", spreadArrayFlat([0, [4, [3,5], 8], 9])); //[ 0, 4, [ 3, 5 ], 8, 9 ]