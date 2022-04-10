// Practice concepts

// Factorial of 5: !5 = 5 * 4 * 3 * 2 * 1

const factorialIterativly = (n) => {
  let result = 1;

  for (let i = n; i > 0; i--) {
    console.log(i);
    result = result * i;
  }

  return result;
};

const factorialRecursively = (n, result = 1) => {
  if (n <= 0) {
    return result;
  } else {
    result = result * n;
    return factorialRecursively(n - 1, result);
  }
};

console.log("factorialIteratively: " + factorialIterativly(5)); // 120
console.log("factorialRecursively: " + factorialRecursively(5));

// Fibnoacci value at the 5th index:
// 0,1,1,2,3,5,8,13,21
// 0 1 2 3 4 5 6 7  8
//     i
// n = 3
// result = 1

const fibonacciIteratively = (n) => {
  // Create a stack(array) to represent the fibb sequence
  let fibSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
  }
  return fibSequence[n];
};

/** 

// Callstack


// Sequence
fib(5) =>

 */

const fibonacciRecursively = (n) => {
  console.log(n);
  if (n < 2) return n;
  console.log("CURRENT: " + n);
  return fibonacciRecursively(n - 1) + fibonacciRecursively(n - 2);
};

console.log("fibonacciIteratively: " + fibonacciIteratively(6)); // 8
console.log("fibonacciRecursively: " + fibonacciRecursively(6)); // 8
