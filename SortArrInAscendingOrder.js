// Write a function that sorts an array of numbers in ascending order.

// using sort method
function sortArray(arr){
    return arr.sort((a,b)=> a-b);
}
console.log("sortArray :", sortArray([5,2,3,52,1,0]));

//using bubble sort
function sortArrayWithBubbleSort(arr){
    let a = [...arr];

    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j <arr.length; j++) {
            if (a[j] > a[j + 1]) {
                // swap
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
        return a;
    }
}
console.log("sortArrayWithBubbleSort :", sortArrayWithBubbleSort([5,2,3,52,1,0,6]));

//using recursive
function recursiveSort(arr, n = arr.length) {
    // If array is empty OR size reduces to 1 → already sorted
    if (n <= 1) return arr;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    return recursiveSort(arr, n - 1);
}
console.log("recursiveSort:", recursiveSort([10, 30, 20, 40, 80, 70]));
console.log("recursiveSort empty:", recursiveSort([]));
console.log("recursiveSort one element:", recursiveSort([20]));
console.log("recursiveSort 2 element:", recursiveSort([90, 70]));

// array.splice(startIndex, deleteCount, item1, item2, ...);

/* The findIndex() method in JavaScript returns the index of the first 
 element in an array that satisfies a provided testing function. If no element satisfies the condition, 
 it returns -1.
 */
function sortWithReduce(arr) {
    return arr.reduce((sorted, current) => {
        // find correct position to insert the current element
        let index = sorted.findIndex(x => {
            console.log("x:", x, "current:", current);
            return x > current;
        });
        console.log("sorted :", sorted, "index :", index, "current :", current);
        if (index === -1) {
            sorted.push(current);        // add to end
        } else {
            sorted.splice(index, 0, current); // insert at index
        }

        return sorted;
    }, []);
}

console.log("sortWithReduce:", sortWithReduce([10,40,30]));

