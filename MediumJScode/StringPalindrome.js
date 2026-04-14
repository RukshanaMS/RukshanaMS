// Check if a string is a palindrome ignoring case and non-alphanumeric characters.

function strPalindrome(str) {
    const rev = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log(("rev :", rev));
    return rev === rev.split("").reverse().join("");
}
console.log("strPalindrome :", strPalindrome("hello children!"));
console.log("strPalindrome :", strPalindrome("ammA0"));
console.log("strPalindrome :", strPalindrome("&amma&"));

// Method 	Returns true if...	Stops when...
// every()	All elements pass the test.	It finds the first false result.
// some()	At least one element passes the test.	It finds the first true result.
// every()✅ All must pass
// some()✅ At least one must pass

// array.every((element, index, array) => {
//   // condition to test
//   return Boolean; //true or false
// });
// ``

// There are no elements
// So the loop never runs
// No element returns false
// Therefore 👉 nothing violated the rule

// ✅ Result: true

// It returns true because there are no elements that fail the condition.
// This is called vacuous trut


//  syntax for some(), filter(), map(), or reduce(), tell me 

// Here you go ✅ — syntax + quick examples for
// some(), filter(), map(), and reduce() in JavaScript.

// ✅ some() — At least one element passes
// Syntax
// JavaScriptarray.some((element, index, array) => condition);
// Example
// JavaScript[1, 3, 5, 8].some(num => num % 2 === 0);// true (8 is even)Show more lines
// ✅ Returns true if any one element satisfies the condition.
// ❌ Returns false if none do.

// ✅ filter() — Select elements
// Syntax
// JavaScriptarray.filter((element, index, array) => condition);
// Example
// JavaScript[1, 2, 3, 4].filter(num => num % 2 === 0);// [2, 4]Show more lines
// ✅ Returns a new array with elements that pass the test.
// ❌ Original array is not modified.

// ✅ map() — Transform elements
// Syntax
// JavaScriptarray.map((element, index, array) => newElement);
// Example
// JavaScript[1, 2, 3].map(num => num * 2);// [2, 4, 6]Show more lines
// ✅ Returns a new array of the same length
// ✅ Used to transform data

// ✅ reduce() — Combine into a single value
// Syntax
// JavaScriptarray.reduce((accumulator, current, index, array) => {  return updatedAccumulator;}, initialValue);Show more lines
// Example (Sum)
// JavaScript[1, 2, 3, 4].reduce((sum, num) => sum + num, 0);// 10Show more lines
// Example (Palindrome logic idea)
// JavaScript["a", "b", "a"].reduce((rev, ch) => ch + rev, "");// "aba"Show more lines
// ✅ Reduces array to one value (number, string, object, array)

// 🔁 Quick Comparison
// Method    |    Returns     |   Purpose
// some()    |   boolean      |    Any element passes?
// every()   |   boolean      |    All elements pass?
// filter()  |   array        |    Select elements
// map()     |   array        |    Transform elements
// reduce()  |   any          |    Combine into one

// ✅ Interview One‑Liners

// some() → “Checks if any element satisfies a condition.”
// filter() → “Returns elements that pass a test.”
// map() → “Transforms each element.”
// reduce() → “Reduces an array to a single value.”


console.log("[].every(() => false); // true :",[].every(() => false));

//using every() //clean.length-1-i mirror index
function strEveryPalindromeCheck(str){
    const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    console.log("clean :", clean);
    return [...clean].every((char, i)=> char === clean[clean.length-1-i]);
}
console.log("strEveryPalindromeCheck", strEveryPalindromeCheck("A man, a plan, a canal: Panama"));

// const clean = "madam";
// [...clean]   // ["m", "a", "d", "a", "m"]

function isPlaindromebywhile(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,"");

    let left = 0;
    let right = clean.length-1;
    
    while (left < right){
        if(clean[left++] !== clean[right--]) return false;
    }
    return true;
}
console.log("isPlaindromebywhile", isPlaindromebywhile("A man, a plan, a canal: Panama"));

function isPlaindromMiironindex(str) {
    for (let i = 0; i < str.length / 2 ; i++){
        let j = arr.length - 1 - i; // mirror index from end
        if(str[i] !== str[j]){
            return false;
        }
    }
    return true;
}
console.log("isPlaindromMiironindex", isPlaindromMiironindex("dada"));

function isPlaindromebywhileone(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g,"");

    let left = 0;
    let right = clean.length-1;
    
    while (left < right){
        if(clean[left] !== clean[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log("isPlaindromebywhileone", isPlaindromebywhileone("A man, a plan, a canal: Panama"));

// no regex
function isPalindrome4(str) {
  const isAlphaNum = c => /[a-z0-9]/i.test(c);
  let left = 0, right = str.length - 1;

  while (left < right) {
    while (left < right && !isAlphaNum(str[left])) left++;
    while (left < right && !isAlphaNum(str[right])) right--;
    if (str[left].toLowerCase() !== str[right].toLowerCase()) return false;
    left++; right--;
  }
  return true;
}
