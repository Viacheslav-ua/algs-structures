const factorial = (n) => {
    if(n === 1) {
        return 1
    }
    console.log(n);
    return n * factorial(n-1)
}

// console.log('fact', factorial(8));

// Числа фибоначи 1,1,2,3,5,8,13,21,34,55

const fibonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fibonachi(n-1) + fibonachi(n-2)
}

console.log(fibonachi(10));
