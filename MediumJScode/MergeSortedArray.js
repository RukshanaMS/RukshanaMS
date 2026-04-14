// Merge two sorted arrays without using built-in sort.

// recursive way of sorting single array
function sortedArr(arr) {
    if (arr.length <= 0) return arr;
    let swapped = false;
    for(let i = 0; i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
             swapped = true;
        }
    }
    if( swapped ) return sortedArr(arr);
    return arr;
}

console.log("mergeSortedArr :", sortedArr([2,8,1,0,6])); //mergeSortedArr : [ 0, 1, 2, 6, 8 ]

//recursive single sorting
function recursiveMergeSort(arr) {
    if(arr.length <= 1) return arr;
    let pivot = arr[0];
    let left = arr.filter(x => x < pivot);
    let right = arr.filter(x => x > pivot);

    return [...recursiveMergeSort(left), pivot, ...recursiveMergeSort(right)];
}
console.log("recursiveMergeSort :", recursiveMergeSort([3,1,0,5,8,9]))

function mergeArrayBySplit(arr){
    if (arr.length <=1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeArrayBySplit(arr.slice(0,mid));
    const right = mergeArrayBySplit(arr.slice(mid));

    return [...left, ...right]
}
console.log("mergeArrayBySplit :", mergeArrayBySplit([2,8,0,1,6]));

// merged 2 sorted array
function mergeSortedArr(a, b){
    if (a.length === 0) return b;
    if (b.length === 0) return a;

    return a[0] < b[0] ? [a[0], ...mergeSortedArr(a.slice(1), b)] : [b[0], ...mergeSortedArr(a, b.slice(1))];
}
console.log("mergeSortedArr :", mergeSortedArr([2,4], [1,3,4])); //mergeSortedArr : [ 1, 2, 3, 4, 4 ] works only for sorted array
console.log("mergeSortedArr :", mergeSortedArr([5,2,4], [1,3,4])); //mergeSortedArr : [ 1, 3, 4, 5, 2, 4 ] not suitable for unsorted one

// merge([1,3,5], [2,4,6])
// → 1 + merge([3,5],[2,4,6])
// → 2 + merge([3,5],[4,6])
// → 3 + merge([5],[4,6])
// → 4 + merge([5],[6])
// → 5 + merge([],[6])
// → 6

// [5, ...[6]] → [5,6]
// [4, ...[5,6]] → [4,5,6]
// [3, ...[4,5,6]] → [3,4,5,6]
// [2, ...[3,4,5,6]] → [2,3,4,5,6]
// [1, ...[2,3,4,5,6]] → ✅ [1,2,3,4,5,6]

function whileMergeSorted(a,b){
    let i  = 0, j = 0;
    let result = [];

    while(i < a.length && j < b.length) {
        if(a[i] < b[j]){
            result.push(a[i]);
            i++;
        } else {
            result.push(b[j]);
            j++;
        }
    }
    return [...result, ...a.slice(i), ...b.slice(j)];
}
console.log("whileMergeSorted :", whileMergeSorted([2,3,4], [7,8,9]));
// while loop → merges only until one array ends ==> return [...result]; //[2,3,4]
// result     → partial sorted data
// slice()    → remaining sorted data
// spread     → combine everything

