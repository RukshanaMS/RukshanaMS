//loops
function stringRev(str){
    console.log("str length :", str.length)
    let res = "";
    for(let i= str.length-1; i>=0; i--){
        res+= str[i];
    }
    return res;
}
console.log("stringRev :", stringRev("hi"));

function whileLoop(str){
    let right = str.length-1;
    let revString=""

    while(right >= 0){
        revString+=str[right];
        right--;
    }
    return revString;

}
console.log("whileLoop :", whileLoop("bye"));

//using reverse() way
function stringReversal(str){
    return str.split("").reverse().join("");
}
console.log("stringReversal", stringReversal("hello"));

//using recursive way
function reverseRecursive(str){
    if(str === "") return "";
    return reverseRecursive(str.slice(1))+str[0];
}
console.log("reverseRecursive", reverseRecursive("world"));
// reverseRecursive("world")
// → reverseRecursive("orld") + "w
// reverseRecursive("orld")
// → reverseRecursive("rld") + "o"
// "" + "d"        = "d"
// "d" + "l"       = "dl"
// "dl" + "r"      = "dlr"
// "dlr" + "o"     = "dlro"
// "dlro" + "w"    = "dlrow"

// using reduce()
function reverseReduce(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}
console.log("reverseReduce:", reverseReduce("coding"));

// ["c", "o", "d", "i", "n", "g"]
// char+rev
// "c" + ""
// "o" + "c"
// "d" + "oc"
// "i" + "doc"
// "n" + "idoc"
// "g" + "nidoc"
