function stritleCase(str){
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(" ")
}
console.log("stritleCase :", stritleCase("checking whether sentence are coming with title case character"))

//split("") splits each charcaters where split(" ") splies the space

//using regex \b finds starting letter of the word \w finds alpha numeric characters A-Z, a-z, 0-9
function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}
console.log(" to toTitleCase :", toTitleCase("checking whether 9sentence are coming with title case character"));

function toTitleCase1(str) {
    return str.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase());
}
console.log(" to toTitleCase1 :", toTitleCase1("checking whether 9sentence are coming with title case character"));


//change title with no internal functions
function ToTitleCaseWithoutSplit(str){
    let result="";
    let charCaseChange = true;
    for(let char of str.toLowerCase()){
        if(charCaseChange && /[a-z]/.test(char)){
            result +=char.toUpperCase();
            charCaseChange = false;
        } else {
            result += char;
        }
        
        // Reset on ANY non-letter (space, number, punctuation)
        if (!/[a-z]/.test(char)) {
            charCaseChange = true;
        }
    }
    return result;
}
console.log("ToTitleCaseWithoutSplit :", ToTitleCaseWithoutSplit("checking 2the sentence Title"));