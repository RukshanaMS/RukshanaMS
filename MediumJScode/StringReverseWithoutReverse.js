// Reverse the order of words in a sentence without using reverse()
function revserStrByLoops(str) {
    let rev = '';
    for(let i = str.length-1 ; i >= 0; i--){
        rev += str[i];
    }
    return rev;
}
console.log("revserStrByLoops :", revserStrByLoops("reversal"))
// ✅ Works for characters
// ❌ Not for reversing words in a sentence

// Reverse by Looping Backwards (No reverse(), No split-reverse)
function reverseWords1(str) {
    let words = str.split(" "); //split by spaces
    console.log("words after split :", words) // [ 'JavaScript', 'is', 'awesome' ]
    let result = "";
    for (let i = words.length - 1; i >= 0; i--) {
        result += words[i];           
        if (i !== 0) result += " ";
        console.log("result for i loop :", result, i)   
        // result for i loop : awesome 2
        // result for i loop : awesome is 1
        // result for i loop : awesome is JavaScript 0
    }    
    return result;
}
console.log("reverseWords1 :",reverseWords1("JavaScript is awesome"));
// ✅ Uses loops
// ✅ No .reverse()

// In JavaScript, the unshift() method adds one or more elements to the beginning of an array and returns the new length of that array.
function reverseSentencyByUnshift(str){
    let arr = [];
    for (let word of str.split(" ")) {
        arr.unshift(word);
    }
    console.log("array result :", arr);
    return arr.join(" ");
}
console.log("reverseSentencyByUnshift :", reverseSentencyByUnshift("JavaScript is awesome"));

function reverseSentencyByPop(str){
    let words = str.split(" ");
    let arr = [];
    while (words.length > 0){
        arr.push(words.pop()); // pop() is for array not for string so convert string into array format by shift()
    }
    // console.log("arr :", arr); reverseSentencyByPop : [ 'Alen', 'is', 'name', 'My' ]
    return arr.join(" ");  
}
console.log("reverseSentencyByPop :", reverseSentencyByPop("My name is Alen"));

function reverseSentenceByRecursion(str){
    const words = str.split(" ");
    if(words.length === 1) return words[0];
    return reverseSentenceByRecursion(words.slice(1).join(" "))+" "+words[0];
}
console.log("reverseSentenceByRecursion :", reverseSentenceByRecursion("Javascript is good"));
console.log("reverseSentenceByRecursion :", reverseSentenceByRecursion("Javascript"));
console.log("reverseSentenceByRecursion :", reverseSentenceByRecursion(""));
console.log("reverseSentenceByRecursion :", reverseSentenceByRecursion("latop is working fine for today"));


// reverseSentenceByRecursion : good is Javascript
// reverseSentenceByRecursion : Javascript
// reverseSentenceByRecursion : 

// Using a Stack (LIFO)
function reverseWordsUsingStack(str) {
    const stack = str.split(" ");
    let result = "";

    while (stack.length > 0) {
        result += stack.pop();
        if (stack.length > 0) result += " ";
    }
    return result;
}

console.log("reverseWordsUsingStack: ",reverseWordsUsingStack("JavaScript is awesome"));



