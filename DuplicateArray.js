// Implement a function to remove duplicates from an array.

function duplicateArray(arr){
    return [...new Set(arr)];
}
console.log("duplicateArray :", duplicateArray([2,3,4,5,5,4,3,2]));

function duplicateArrWithReduce(arr){
    return arr.reduce((acc, current)=> {
        if(!acc.includes(current)) {
            acc.push(current);
        }
        return acc;
    },[])
}
console.log("duplicateArrWithReduce :", duplicateArrWithReduce([9,9,8,7,6,5]));

function duplicateWithRecursive(arr, index = 0, result = []){
    if (index === arr.length) return result;

    if(!result.includes(arr[index])){
        result.push(arr[index]);
    }
    return duplicateWithRecursive(arr, index+1, result);
}
console.log("duplicateWithRecursive :", duplicateWithRecursive([10,1,2,30,2,10]));