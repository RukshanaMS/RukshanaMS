// Check if two strings are anagrams.
// An anagram is when two strings contain the same characters in the same quantity, but possibly in a different order.
// 👉 Example:

// "listen" and "silent" ✅ Anagrams
// "hello" and "world" ❌ Not anagrams

// Method 1: Sort and Compare
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}
console.log("isAnagram :", isAnagram("hello", "lelho"));
console.log("isAnagram :", isAnagram("daddy", "mommy"));


// String.prototype.includes() checks whether one string appears as a substring of another, in the same order.
function isAnagramIncludes(s1, s2) {
    return s1.includes(s2)
}
// "hello".includes("ell") // true
console.log("isAnagramIncludes :", isAnagramIncludes("hello", "lelho")); //false 
console.log("isAnagramIncludes :", isAnagramIncludes("nazu", "uzna")); //false

// Method 2: Character Frequency using Object
function anagramFrequencyCheck(a, b){
    if (a.length !== b.length) return false;
    const count = {};

    for(let char of a){
        count[char] = (count[char] || 0) + 1; // check for char counts 
    }
    for(let char of b){
        if(!count[char]) return false; // if same char is available will decrease the count
        count[char]--;
    }
    return true;
}
console.log("anagramFrequencyCheck :", anagramFrequencyCheck("silent", "listen")); //true

// count[char] = (count[char] || 0) + 1; works as below
// char      Action            Resulting count
// l          count["l"] = 1    { l: 1 }
// i          count["i"] = 1    { l:1, i:1 }
// s          count["s"] = 1    { l:1, i:1, s:1 }
// t          count["t"] = 1    { l:1, i:1, s:1, t:1 }
// e          count["e"] = 1    { l:1, i:1, s:1, t:1, e:1 }
// n          count["n"] = 1    { l:1, i:1, s:1, t:1, e:1, n:1 }

// So final map after first loop:
// {
//   l:1,
//   i:1,
//   s:1,
//   t:1,
//   e:1,
//   n:1
// }

// Loop through string b and reduce counts
// Now we loop "silent":
// Iteration through "silent":


// char   Available?   count after decrement
// s       yes (1)     { s:0, l:1, i:1, t:1, e:1, n:1 }
// i       yes (1)     { s:0, i:0, l:1, t:1, e:1, n:1 }
// l       yes (1)     { s:0, i:0, l:0, t:1, e:1, n:1 }
// e       yes (1)     { s:0, i:0, l:0, e:0, t:1, n:1 }
// n       yes (1)     { s:0, i:0, l:0, e:0, n:0, t:1 }
// t       yes (1)     { s:0, i:0, l:0, e:0, n:0, t:0 }
// Every character found → counts decreased to 0.


//example b
// console.log("anagramFrequencyCheck :", anagramFrequencyCheck("reading", "studyng")); //false

// Why does it fail on the first character?
// Your code contains this logic: if (!count[char]) return false;
// This means:

// If the character is not found in the frequency map
// → the count is undefined
// → !undefined is true
// → therefore return false

// Visual walkthrough
// Frequency map from "reading":
// {
//   r:1,
//   e:1,
//   a:1,
//   d:1,
//   i:1,
//   n:1,
//   g:1
// }

// Check "studyng":

// 's' → not in map → return false ✅
// Code stops here (no need to continue)

// Using a Single Map
function anagarmByMap(a, b) {
    if( a.length !== b.length) return false;

    const map = new Map();

    for(let char of a){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let char of b){
        if(!map.get(char)) return false;
        map.set(char, map.get(char) - 1);
    }
    return true;
}
console.log("anagarmByMap :", anagarmByMap("feature", "turefea")); //true
console.log("anagarmByMap :", anagarmByMap("signature", "turesign")); // false
console.log("anagarmByMap :", anagarmByMap("triangle", "integral")); // true

// Using Character Count Array (Optimized for lowercase alphabets)
function isAnagram(a, b) {
    //case sensitive
    //  a = a.toLowerCase(); 
    //   b = b.toLowerCase(); 

  if (a.length !== b.length) return false;

  const freq = new Array(26).fill(0); //create characters from a-z from 0 -25 indexes

  for (let char of a) freq[char.charCodeAt(0) - 97]++; //char.charCodeAt(0) - 97 indicates  97-97 = 0 98-97 = 1  ...122-97 = 25 and updates frequency with +! for char exist
  for (let char of b) freq[char.charCodeAt(0) - 97]--; // decrease the freq updates
    console.log("freq result :", freq); 
//     freq result : [
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0, 0, 0, 0, 0, 0, 0,
//   0, 0
// ]
  return freq.every(count => count === 0);
}
console.log(isAnagram("apple", "pleap")); // true


