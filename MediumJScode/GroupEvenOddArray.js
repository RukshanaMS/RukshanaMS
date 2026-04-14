// Group array elements based on a condition (e.g., even vs odd).

function groupByEvenOddByLoops(arr) {
    const groups = { even: [], odd: []};
    
    for ( let element of arr) {
        if( element % 2 === 0) groups.even.push(element);
        else groups.odd.push(element);
    }
    return groups;
}
console.log("groupByEvenOddByLoops :", groupByEvenOddByLoops([1, 2, 3, 4, 5, 6]));

function groupByEvenOddByReduce(arr) {
    return arr.reduce((acc, ele) => {
        (ele % 2 === 0 ? acc.even : acc.odd).push(ele);
        return acc;
    }, { even : [], odd: []}
    );
}
console.log("groupByEvenOddByReduce :", groupByEvenOddByReduce([1, 2, 3, 4, 5, 6]));

function groupByEvenOddByFiltertwice(arr) {
    return {
        even : arr.filter(n => n % 2 === 0),
        odd : arr.filter(n => n % 2 !== 0)
    };
}
console.log("groupByEvenOddByFiltertwice :", groupByEvenOddByFiltertwice([1, 2, 3, 4, 5, 6]));

function groupByEvenOddByMap(array) {
    const map = new Map([ // Creating a Map with two categories
        ["even", []],
        ["odd", []]
    ]);

//     This initializes a Map like:
// even → []
// odd  → []

// Meaning:

// All even numbers go into the "even" array.
// All odd numbers go into the "odd" array.
    array.forEach(num => {
        map.get(num % 2 === 0 ? "even" : "odd").push(num);
    });

    return Object.fromEntries(map); //Converting Map back to a normal object
}
console.log("groupByEvenOddByMap :", groupByEvenOddByMap([1, 2, 3, 4, 5, 6]));

// groupByEvenOddByLoops : { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }
// groupByEvenOddByReduce : { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }
// groupByEvenOddByFiltertwice : { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }
// groupByEvenOddByMap : { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }