// Sort an array of objects by a specific key.

const person = [
    {name : "kamal", age: 22},
    {name : "priya", age: 10},
    {name : "seetha", age: 37},
    {name : "ramesh", age: 56},
];

function sortArrayKey(arr, key){
    return arr.sort((a, b) => a[key] - b[key]);
}
console.log("sortArrayKey :", sortArrayKey([...person], "age"));

//uisng compartors
function sortArrayByKeys(arr){
    return arr.sort((a,b) => a.age - b.age);
}
console.log("sortArrayByKeys :", sortArrayByKeys(person));

//loaclecompare()
function sortArryBylocaleCompare(arr){
    return arr.sort((a,b) => a.name.localeCompare(b.name));
}
console.log("sortArryBylocaleCompare :", sortArryBylocaleCompare(person));

//using loops
function sortKeysByLoops(arr, key){
    let sorted = [...arr];

    for(let i = 0; i < sorted.length; i++){
        for(let j = 0; j < sorted.length-1; j++){

            const value1 = sorted[j][key];
            const value2 = sorted[j+1][key];

            let shouldSwap = typeof value1 === "string" ? value1.localeCompare(value2) > 0 : value1 > value2;

            if(shouldSwap){
                [sorted[j], sorted[j+1]] = [sorted[j+1], sorted[j]];
            }
        }
    }
    return sorted;
}
console.log("sortKeysByLoops :", sortKeysByLoops(person, "name"));