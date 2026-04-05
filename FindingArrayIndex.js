// Implement a function that finds the index of an element in an array (return -1 if not found).

const array = [2,3,4,5,6,7,8,9];
console.log("array index :",array.indexOf(3));

function arrIndex(val){
    if (array.length === 0) return -1;
    return array.indexOf(val);
}
console.log("arrIndex :", arrIndex(7));

/*The findIndex() method in JavaScript returns the index of the first element in an array that satisfies a specific testing condition.
 If no elements pass the test, it returns -1.
 
 In JavaScript, the indexOf() method is used to find the first occurrence of a specific value within a string or an array
 
 */

function arrFindIndex(val){
    return array.findIndex(value => value === val);
}
console.log("arrFindIndex :", arrFindIndex(9));
console.log("arrFindIndex :", arrFindIndex());

//  A return statement IMMEDIATELY exits the entire function. 
// so always after checking entire element then only return here it will check for first elemt and exits 
// function arrIndexByLoops(val){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === val){
//             return i;
//         } else {
//             return -1;
//         }
//     }
// }

function arrIndexByLoops(val){
    for(let i = 0; i < array.length; i++){
        if(array[i] === val){
            return i;
        }
    }
    return -1;
}
console.log("arrIndexByLoops :", arrIndexByLoops(6));
console.log("arrIndexByLoops :", arrIndexByLoops());

// array.reduce((accumulator, currentValue, index, array) => {
    // logic
// }, initialValue);
// Name             Meaning
// accumulator      stores intermediate results
// currentValue     the current element in the loop
// index            current index
// array            entire array
// initialValue     starting value of accumulator

function reduceArrayIndex(val){
    return array.reduce((arr, current, idx) => current === val ? idx : arr, -1);
}
console.log("reduceArrayIndex :", reduceArrayIndex(6));
console.log("reduceArrayIndex :", reduceArrayIndex());

// using recursion
function recursiveArrayindex(array, val, index = 0){
    if (array.length === 0) return -1;
    return array[0] === val ? index : recursiveArrayindex(array.slice(1), val, index +1)
}
console.log("recursiveArrayindex :", recursiveArrayindex([20,40,50,80,90], 90));
console.log("recursiveArrayindex :", recursiveArrayindex([20,40,50,80,90], 100));


