// Generate a random alphanumeric string of given length.

// ✅ Step‑by‑step explanation:


// chars string
// A collection of characters you want to randomly pick from:
// ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789

// Initialize result as an empty string
// This will store the final random output.

// For loop (i < length)
// Runs as many times as the length you pass.
// Since you call randomString1(10), the loop runs 10 times.


// Inside the loop

// Math.random() generates a random number between 0 and 1.
// Multiply with chars.length (62 characters).
// Math.floor() converts it into a whole number index.
// chars.charAt(...) picks the character at that index.
// result += ... appends that character.

// Return the final string

// ✅ What should be the output?
// Since it’s random, every time you run:
// JavaScriptconsole.log(randomString1(10));Show more lines
// You will get a different 10‑character alphanumeric string, like:

// "aZ91FbT3pQ"
// "kL8pS0dEf2"
// "Qw9Xy7Ab1C"

// There is no single fixed answer — it will always be random.

// ✅ In short
// ✅ The function generates a random alphanumeric string of the given length (10 in your example).
// ✅ The output will look like "A3kLm92BdX" but changes each time.

//  1. Using Math.random() + custom character set
function randomAlphanumericLoops(length){
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for(let i = 0; i <length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
console.log("randomAlphanumericLoops :", randomAlphanumericLoops(5)); //pkFnR
console.log("randomAlphanumericLoops :", randomAlphanumericLoops()); // nothing
console.log("randomAlphanumericLoops :", randomAlphanumericLoops(0)); // nothing

// 2. Using Array.from() + mapping

// ✅ 1. Array.from({ length })
// This creates an array with the specified number of elements, but all elements are initially undefined.
// Example:
// JavaScriptArray.from({ length: 5 })// → [undefined, undefined, undefined, undefined, undefined]Show more lines
// So for randomString2(10) → an array of length 10 is created.

// ✅ 2. The second argument: the mapping function
// JavaScript() => chars[Math.floor(Math.random() * chars.length)]Show more lines
// This function runs once for each array element.
// What it does each time:

// Math.random() → gives a random number between 0 and 1.
// Multiply by chars.length (62 characters).
// Math.floor() → turns it into a valid array index (0–61).
// chars[...] → picks a random character from:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
// abcdefghijklmnopqrstuvwxyz
// 0123456789



// So each array item becomes one random character.

//Array.form() SYNTAX
// Array.from(items)
// Array.from(items, mapFn)
// Array.from(items, mapFn, thisArg)
// Parameters
// items
// An iterable or array-like object to convert to an array.

// mapFn Optional
// A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead. The function is called with the following arguments:

// element
// The current element being processed in the array.

// index
// The index of the current element being processed in the array.

// thisArg Optional
// Value to use as this when executing mapFn.

// Return value
// A new Array instance.

// ✅ Array.from() — Syntax
// Basic syntax
// JavaScriptArray.from(arrayLike [, mapFn [, thisArg]])Show more lines

// ✅ Parameters Explained
// 1. arrayLike (required)
// Any object that is array‑like or iterable, such as:

// strings
// arrays
// NodeList
// Set
// Map
// objects with { length: n }

// Example:
// JavaScriptArray.from("abc")   // ["a", "b", "c"]Array.from({ length: 3 })  // [undefined, undefined, undefined]Show more lines

// 2. mapFn (optional)
// A function applied to each element before inserting it into the new array.
// Similar to Array.map() but used during creation.
// Example:
// JavaScriptArray.from([1, 2, 3], x => x * 2)// [2, 4, 6]Show more lines

// 3. thisArg (optional)
// Value used as this inside the mapping function.
// Example:
// JavaScriptconst obj = { multiplier: 10 };Array.from([1, 2, 3], function(x) {  return x * this.multiplier;}, obj);// [10, 20, 30]Show more lines

// ✅ Common Useful Forms
// ✅ 1. Create an array with a certain length
// JavaScriptArray.from({ length: 5 })// [undefined, undefined, undefined, undefined, undefined]Show more lines

// ✅ 2. Create an array and fill with computed values
// JavaScriptArray.from({ length: 5 }, (_, i) => i)// [0, 1, 2, 3, 4]Show more lines

// ✅ 3. Convert iterable → array
// JavaScriptArray.from("hello")// ["h", "e", "l", "l", "o"]Show more lines

// ✅ 4. Convert NodeList → array
// JavaScriptlet divsArray = Array.from(document.querySelectorAll("div"));Show more lines

// ✅ 5. Generate random string characters (your use-case)
// JavaScriptconst chars = "ABCabc123";const result = Array.from({ length: 10 }, () =>  chars[Math.floor(Math.random() * chars.length)]).join("");Show more lines

// ✅ In summary
// Array.from():

// Converts array-like or iterable objects into arrays.
// Can generate arrays of any length.
// Supports a mapping function like .map().
// Very useful for random generators, ranges, string splitting, etc.

function randomAlphanumericArray(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from({length : length}, () => {
        return chars[Math.floor(Math.random() * chars.length)]
    }).join("")
}

// callback can be
// 1.  () => chars[Math.floor(Math.random() * chars.length)] || 
//  2.() => {
    // return chars[Math.floor(Math.random() * chars.length)]
//  }
console.log("randomAlphanumericArray :", randomAlphanumericArray(10));

// 3. Using Base36 encoding (Math.random().toString(36))
// ✅ Step‑by‑Step Explanation
// ✅ 1. Math.random()
// Generates a random decimal number between 0 and 1, like:
// 0.348973475392
// 0.992832748234
// 0.052837462738

// ✅ 2. .toString(36) converts the number to Base‑36
// Base‑36 uses:
// 0–9  and  a–z

// So:
// JavaScriptMath.random().toString(36)Show more lines
// might give something like:
// "0.ks8f2j9q2"
// "0.z19pc8d44"
// "0.h4m9s8k3k"


// ✅ 3. .slice(2) removes the "0."
// So:
// "0.ks8f2j9q2".slice(2) → "ks8f2j9q2"
// "0.z19pc8d44".slice(2) → "z19pc8d44"

// This gives a random alphanumeric string.

// ✅ 4. Loop until we have enough characters
// JavaScriptwhile (str.length < length) {  str += ...;}Show more lines
// Example:
// Suppose we want length 10.
// Loop may generate:

// "ks8f2j9q2" → length 9
// (not enough)
// "z19pc8d44" → length 18 total
// (now enough)


// ✅ 5. Cut the extra characters
// JavaScriptreturn str.slice(0, length);Show more lines
// So only the first 10 characters are returned.
// Example final output:
// "ks8f2j9q2z"


// ✅ ✅ What the Output Looks Like
// Running:
// JavaScriptconsole.log(randomString4(10));Show more lines
// Will give random results like:
// "gk2f8s4mqp"
// "x9b1t3wz6k"
// "qpd8l49azx"

// Each run gives a different 10‑character alphanumeric string.

// ✅ Why developers like this method
// ✅ Shortest code
// ✅ Uses built‑in Base‑36 → fast
// ✅ Easy to understand
// ✅ Produces good randomness (not crypto‑secure)

function randomAlphanumericString(length) {
    let str = "";
    while (str.length  < length) {
        str += Math.random().toString(36).slice(2); // remove "0.""
    }
    return str.slice(0, length);
}
console.log("randomAlphanumericStringn :", randomAlphanumericString(4));