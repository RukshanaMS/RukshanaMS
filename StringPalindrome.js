// 1 string reverse
function stringPal(str){
    return str === str.split('').reverse().join('') ? true : false;
}
console.log("stringPal 1:", stringPal("mam"));
console.log("stringPal 2:", stringPal("Sir"));

//2 for loop
function strForLoop(str){
    let reversedString = '';
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString+=str[i];
    }
    console.log("reversedString :", reversedString);
    return reversedString === str ? true : false;
}
console.log("strForLoop :", strForLoop("hello"));

// 3 The "Two-Pointer" While Loop
function strPalidromPointers(str){
    console.log("str length :", str.length);
    let left = 0;
    let right = str.length-1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        } 
        left++;
        right--;
    }
    return true;
}
console.log("strPalidromPointers Two-Pointer Way:", strPalidromPointers("noon"));

//4. recursive method
function isPalRecursive(str) {
    console.log("str length 0", str[0]);
    if (str.length <= 1) return true; // Base Case
    
    if (str[0] !== str[str.length - 1]) return false;
    
    // Slice off the first and last characters and check again
    return isPalRecursive(str.slice(1, -1)); 
}
console.log("Recursive Way 1:", isPalRecursive("mm"));
console.log("Recursive Way 2:", isPalRecursive("ma"));
console.log("Recursive Way 3:", isPalRecursive("madam"));


//5 every method
function isPalEvery(str) {
    return str.split('').every((char, i) => char === str[str.length - 1 - i]);
}
console.log("Every Method:", isPalEvery("level"));
