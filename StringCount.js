// Given a string, count occurrences of each character.

function stringCount(str){
    let count = 0;
    for(let i = 0; i<=str.length-1; i++){
        count++;
    }
    return count;
}
console.log("stringCount :", stringCount("string"));

// reduce ways
function charCountReduce(str){
    return str.split("").reduce((acc, char)=> {
       char = acc + 1;
       return char;
    }, 0)
}
console.log("charCountReduce :", charCountReduce("hello"));

// recursive way
function recursiveCharCount(str){
    if (str === "") return 0;
    return 1 + recursiveCharCount(str.slice(1));
}
console.log("recursiveCharCount :", recursiveCharCount("HAPPY"))

// using reduce
const letters = ['a','b','a','c','b','a'];

const count = letters.reduce((acc, curr) => {
    console.log("acc before:", acc, curr)
    acc[curr] = (acc[curr] || 0) + 1;
     console.log("acc after:", acc, curr)
    return acc;
}, {});

console.log(count);
// { a: 3, b: 2, c: 1 }