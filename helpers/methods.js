/** ARRAYS (and strings) */

const array = [94, 2, 44, 24, 9, 1, -1];

// Shift -> removes first element, returns that element
const shifted = array.shift();
shifted;

// Unshift -> adds one or more elements to beginning of array, returns new array legnth
const unshifted = array.unshift(shifted);
unshifted;

// Slice -> returns a shallow copy of an array, with start and end parameters. Start is inclusive, end is exclusive.
const sliced = array.slice(1, 4);
sliced;

// Splice ->  changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
array.splice(5, 1, "a");
array;

// Push -> adds one or more elements to end of array, returns new length of array.
let pushed = array.push(["p", "u", "s", "h"]);
pushed;

//Pop -> removes that last element of an array, returns that element
let popped = array.pop();
popped;

/** STRINGS */

const str = "The quick brown fox jumps over the lazy dog.";

// returns the character at the index of 4
let charAt = str.charAt(4);
charAt;

// first he first match in a string
let indexOf = str.indexOf("e");
indexOf;

/** JS OBJECTS  */

// MAP -> Like an object and an array had a baby

const map1 = new Map();
map1.set("a", 3);
map1.set("🐉", () => {});
map1.get("a"); // 3
map1.has("a"); // true

const map1Iterator = map1.entries();
for (const [key, value] of map1Iterator) {
  console.log(`${key}: ${value}`);
}

//SET -> Like an object and an array had a baby
