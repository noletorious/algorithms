/** CLOSURES
 *  - A function with in it's lexical scope/environment is a closure.
 *  - Inner functions have access to their respective outter functions scope and variables even though the outter function is done running and no longer accessible.
 *
 */

// Typical function in function example
const sum = (a) => {
  return function (b) {
    return b ? sum(a + b) : a;
  };
};

console.log(sum(1)(2)(3)());

const x = () => {
  let a = 2;
  return function y() {
    a = "4";
    console.log(a + a);
  };
};
x()(); // a variable is a different a

// Real word scenario
// const fetchLink = (url) => {
//   fetch(url).then(() => {
//     console.log(url);
//   });
// };

/** CLOSURES AND CALLSTACK
 * 1. fetchLink is called
 * 2. the fetch + then function runs,
 * 3. theoretically, fetchLink function is done
 * 4. the then() could still be in the callback queue
 * 5. then inner then() still has access the url
 */

const y = () => {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
};
y(); // i is leaked scope

const p = () => {
  for (var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    close(i);
  }
};
p(); // i is leaked scope

/** INTERESTING EXAMPLE
 *  - The issue lies in the difference between var and let.
 *  - The for loop runs immediately and the setTimeout can't do shit about it.
 *  - So by the time that setTimeout starts, i has incremented to 6.
 *  - You could also turn var into let on line 42, let is block scope
 */
