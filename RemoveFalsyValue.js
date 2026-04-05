// Write a function that removes all falsy values from an array.
// Here are 4 different JavaScript ways to remove all falsy values from an array.
// Falsy values in JS are: false, 0, "", null, undefined, NaN

//using filters
function removeFalsy(arr){
    return arr.filter(Boolean);
}
console.log("removeFalsy :", removeFalsy(["yes", true, 2, "", undefined, NaN, false, 0, null]));

function removeFalsy2(arr) {
    return arr.filter(value => value);
}

console.log(removeFalsy2([0, "", false, 4, undefined, "hello"]));
// [4, "hello"]

// using loops
function removeFalsyByLoop(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            result.push(arr[i]);
        }
    }
    return result;
}
console.log("removeFalsyByLoop :", removeFalsyByLoop([2, "check", 1, 0, undefined, null, "", NaN, false]));

//using reduce()
function removeFalsy4(arr) {
    return arr.reduce((acc, curr) => {
        if (curr) acc.push(curr);
        return acc;
    }, []);
}

console.log(removeFalsy4([undefined, 5, 0, "hi", NaN, true]));
// [5, "hi", true]