// Find the second smallest element in an array.
function secondSmallest1(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[1];
}
console.log(secondSmallest1([5, 1, 9, 2, 6])); // 2

function secondSmallestArray(arr) {
    const sorted = [...new Set(arr)].sort((a,b)=> a - b);
    return sorted.length >= 2 ? sorted[1] : null;
}
console.log("secondSmallestArray :", secondSmallestArray([1,2,3,4,5,6,7,8,8]));

function secondSmallestByMath(arr) {
    const min = Math.min(...arr);
    const filtered = arr.filter ( x => x !== min);
    return Math.min(...filtered);
}
console.log("secondSmallestByMath :", secondSmallestByMath([11, 10,78, 90]));

function secondSmallestArrayLoops(arr) {
    if (arr.length < 2) return null;

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
            console.log("1 :","num :", num, "smallest :", smallest, "secondSmallest :", secondSmallest);
        } else if (num > smallest && num < secondSmallest) {
            secondSmallest = num;
             console.log("2 :","num :", num, "smallest :", smallest, "secondSmallest :", secondSmallest);
        }
    }
    return secondSmallest === Infinity ? null : secondSmallest;
}

 console.log("secondSmallestArrayLoops :", secondSmallestArrayLoops([8,7,5,5,6,8]));
// 1 : num : 8 smallest : 8 secondSmallest : Infinity
// 1 : num : 7 smallest : 7 secondSmallest : 8
// 1 : num : 5 smallest : 5 secondSmallest : 7
// 2 : num : 6 smallest : 5 secondSmallest : 6
// secondSmallestArrayLoops : 6