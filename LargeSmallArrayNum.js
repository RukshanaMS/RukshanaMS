function minMaxValue(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i=1; i<arr.length-1; i++){
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return {min, max};
}
console.log("minMaxValue :", minMaxValue([8,9,10,11,12]));

// Math internal method
function findMinMax(arr) {
    return {
        min: Math.min(...arr),
        max: Math.max(...arr)
    };
}

console.log(findMinMax([3, 1, 9, 7, 2]));

const arr = [2,4,6,8,10];
const minvalue = Math.min(...arr);
const maxValue = Math.max(...arr);
console.log("minvalue using Math :", minvalue,"maxValue using Math :", maxValue );


// sort way
// ✅ Why ...arr is needed
// Because .sort() mutates (changes) the original array.

// const arr = [3, 1, 2];
// const sorted = arr.sort(); // modifies arr!!
// console.log(arr);    // [1, 2, 3]  <-- mutated

// If you want to sort without modifying the original, you must create a shallow copy first.
// [...arr] creates a new array:
// const copy = [...arr];
// const copy = [...arr];

function sortArrayValues(arr){
    const sorted = [...arr].sort((a,b) => a-b);
    console.log("sorted :", sorted);
    return {
        min: sorted[0],
        max: sorted[arr.length-1]
    }
}
console.log("sortArrayValues:", sortArrayValues([5,40,15,20,25,30]));

//reduce()
function reduceMinMaxVal(arr){
    return arr.reduce((acc, val)=>{
        if (val < acc.min) acc.min = val;
        if (val > acc.max) acc.max = val;
        return acc;
    }, {min : arr[0], max : arr.length-1})
}
console.log("reduceMinMaxVal :", reduceMinMaxVal([2,5,1,6,7,0,11]));

// Two‑pointer traversal
function minMaxArrayList(arr){
    let left = 0;
    let right = arr.length-1;

    let minValue =[];
     let maxValue =[];

    while(left <= right){
        minValue.push(arr[left]);
        maxValue.push(arr[right]);
        left++;
        right--;
    }

    return {minValue, maxValue};
}
console.log("minMaxArray :", minMaxArrayList([1,2,3,4,5]));
// minMaxArray : { minValue: [ 1, 2, 3 ], maxValue: [ 5, 4, 3 ] } 

//outputs
// minMaxValue : { min: 8, max: 11 }
// { min: 1, max: 9 }
// minvalue using Math : 2 maxValue using Math : 10
// sorted : [ 5, 15, 20, 25, 30, 40 ]
// sortArrayValues: { min: 5, max: 40 }
// reduceMinMaxVal : { min: 0, max: 11 }
// minMaxArray : { minValue: [ 1, 2, 3 ], maxValue: [ 5, 4, 3 ] }