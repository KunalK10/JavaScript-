// functions HackerRank

// Implementing Function of factorial with parameter integer(n)
// n! 

function factorial(n) {
    let result = (n < 2) ? 1 : n * factorial(n-1);
    return result;
}

console.log(factorial(10));

