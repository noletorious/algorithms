const array = [94, 2, 44, 24, 9, 1, -1];

/** ARRAYS (and strings) */

// Shift -> removes first element, returns that element
const shift = array.shift();

// Unshift -> adds one or more elements to beginning of array, returns new array legnth
const unshift = array.unshift(shift);

// Slice -> returns a shallow copy of an array, with start and end parameters. Start is inclusive, end is exclusive.
// Splice ->  changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// Push -> adds one or more elements to end of array, returns new length of array.
//Pop -> removes that last element of an array, returns that element

const str = "The quick brown fox jumps over the lazy dog.";

/** STRINGS */

// str.chartAt(4) -> returns the character at the index
// output: q

// str.indexOf("dog") ->  returns the index of the first occurrence of the specified substring
// output: 40

//

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
