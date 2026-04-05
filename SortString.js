// Write a function that sorts an array of strings alphabetically.

// Using .sort() (default alphabetical sorting)
// Works for basic alphabetical order
// Sorts in ascending order automatically
function sortString(str){
    return str.sort();
}
console.log("sortString :", sortString(["b", "v", "i"]));
console.log(sortString(["Banana", "apple", "cherry"]));

// Using .sort() with a custom comparator and works for all languages
// Useful when you want case‑insensitive sorting.
// Handles uppercase/lowercase correctly
function sortStrings(str){
    return str.sort((a,b)=> a.localeCompare(b));
}
console.log("sortStrings localeCompare:", sortStrings(["b", "v", "I"]));
console.log("sortStrings localeCompare:", sortStrings(["Banana", "banana", "apple", "cherry"]));

// Bubble Sort for strings
// localeCompare() returns a number that tells us which string comes first alphabetically.
//  localeCompare() return values

// Return value            Meaning 
// -1 (or negative)        a comes before b alphabetically 
//  0                      Both are equal
//  1 (or positive)        a comes after b alphabetically
function bubbleSort(str){
    let string = [...str];

    for(let i = 0; i < string.length; i++){
        for(let j = 0; j < string.length; j++){
            if(string[j].localeCompare(string[j+1]) > 0) {
                [string[j+1], string[j]] = [string[j], string[j+1]]
            }
        }
        return string;
    }
}
console.log("bubbleSort :", bubbleSort(["banana", "apple", "cherry"]));

//recusive()
function recursionStringSort(str){
    if(str.length <= 1) return str;
    let min = str[0]; // find smallest string alphabeticall
    for(string of str) {
        if(string.localeCompare(min) < 0){
            min = string;
        }
    }
    // remove the smallest and recurs
    let remainingStr = str.filter( x => x !== min);
    return [min, ...recursionStringSort(remainingStr)]
}
console.log("recursionStringSort :", recursionStringSort(["usha", "kamal", "neeraj", "Nitesh", "Uday"]));