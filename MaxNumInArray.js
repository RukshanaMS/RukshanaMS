// 1 for loop
function maxNumberInarray(arr){
    let maxval = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxval){
            maxval=arr[i];
        }
    }
    return maxval;
}
console.log("maxNumberInarray :", maxNumberInarray([2,4,5,6,7,9]));

/*2 
    Math.max => if directed added value without ... will get NaN as Math.max() expects individual 
    numbers (like Math.max(1, 2, 3)), but you passed it a single Array.
    */
const arr = [2, 4, 5, 6, 7, 10];
const maximumVal = Math.max(...arr);
console.log("maximumVal :", maximumVal)

//3 reducer
function reduceMaxval(arr){
    return arr.reduce((max, current) => current > max ? current : max, arr[0]);
}
console.log("reducerMaxval :", reduceMaxval([5,10,15,20,25]));

//4 sort method
function sortMaxArray(arr){
    const sorted = arr.sort((a,b) => b-a); //descending order like 5,4,3,2,1
    console.log("sorted :", sorted);
    return sorted[0];
}
console.log("sortMaxArray :", sortMaxArray([3,4,5,6,7,8,9]));

//5 recurrsive way
function recursiveMaxVal(arr){
    console.log("arr length 111:", arr.length);
    if(arr.length === 1) return arr[0];
    const firstVal = arr[0];
    console.log("firstVal :", firstVal);
    const restMax = recursiveMaxVal(arr.slice(1));
    console.log("restMax :", restMax);
    return firstVal > restMax ? firstVal : restMax;
}
console.log("recursiveMaxVal :", recursiveMaxVal([2,4,5,11]));

/*The slice() method in JavaScript is used to extract a portion of an array or a string and return it as a new array or new string, 
respectively, without modifying the original. This is known as a shallow copy.
arrayOrString.slice(startIndex, endIndex); starts from startIndex , ends before endIndex
arr.slice(1) = [4,5,11];
arr.slice(2,4) = [5,11];
arr.slice(0,3) = [2,4,5]
slice(1)	"Skip the first one, take the rest."	[4, 5, 11]
slice(-1)	"Give me just the very last one."	[11]
slice(1, -1)	"Chop off both ends."	[4, 5]
*/