// prime number check
function isPrime(n) {
    if (n <= 1) return false;

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0 ) return false;
    }

    return true;
}

console.log("isPrime :", isPrime(1));

// for length 20
for(let i=0; i<=20; i++){
    if(isPrime(i)) {
        console.log(" length 20 value :", i)
    }
}

//for array
function isArrayPrime (n1) {
    if(Array.isArray(n1)){
        const n = [...new Set(n1)]; // remove duplicates
        console.log("isArray :", n)
        let isPrimeArrList = [];
        for (let i = 0; i < n.length; i++) {
            if(isPrime(n[i])) {
                isPrimeArrList.push(n[i]);
            }

        }
        return isPrimeArrList;
    }
}

console.log("isArrayPrime :", isArrayPrime([1,2,2,5,8,9,0]));