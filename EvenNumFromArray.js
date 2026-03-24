//1 filter loop
let array = [2,3,4,5,7,8];
const evenArrayList = array.filter(evenval => evenval % 2 === 0);
console.log("evenArrayList:", evenArrayList)

// 2 for loop
function evenArrayLst(arr) {
    let newEvenArray = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]%2 === 0) {
            newEvenArray.push(arr[i])
        }
    }
    return newEvenArray;
}
console.log("evenArrayLst :", evenArrayLst([3,4,6,9]));

//3 reducer
function reducerevenArrayList(arr) {
    return arr.reduce((acc, current)=>{
        if(current % 2 === 0){
            acc.push(current);
        }
        return acc;
    }, [])
}
console.log("reducerevenArrayList :", reducerevenArrayList([5,20,25,30]));

//4 forEach
const arrayEven = [2,4,5,6,8];
let result = [];
arrayEven.forEach(num => {
    if(num % 2 === 0) return result.push(num);
});
console.log("arrayevenForEachList :", result);

//5 forOf
function forOfEven(arr) {
    let result = [];
    for(num of arr){
        if(num % 2 === 0){
            result.push(num);
        }
    }
    return result;
}
console.log("forOfEven :", forOfEven([11,22,33,44,55]));