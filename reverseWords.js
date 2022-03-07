arr = [
  "p",
  "e",
  "r",
  "f",
  "e",
  "c",
  "t",
  "  ",
  "m",
  "a",
  "k",
  "e",
  "s",
  "  ",
  "p",
  "r",
  "a",
  "c",
  "t",
  "i",
  "c",
  "e",
];

/** RETURNING
 *  arr = [' ','h','e','y',' ','y','o','u']
 *              p1
 *         				p2
 *  result = ['y','o','u',' ','h','e','y',]
 */

/** CONTRAINTS
 *  Return the original array?
 *  Best case: Return reversed ordered array
 *  Worst case: null
 *  [], empty array -> Will always have items in array
 *  ['e'], one item -> ['e']
 *  [' ', 'h', 'e', 'y'], beginning with space -> ['h', 'e', 'y', ']
 *  ['words',' ', ' ', 'some'], multiple space -> ['some', ' ', 'words']
 */

/** BRUTE PSUEDO SOLUTION
 *  S: O(N), T: O(N), Introduce a new data structure based on input
 *  ['y', 'o', 'u', ' ', 'h', 'e', 'y',]
 *  Loop through array in reverse
 *  Per iteration, push the item into a new array so it's overall structure is reversed
 */
/** OPTIMIZED PSUEDO SOLUTION
 *  S: O(1),
 *  T: O(N),
 *  - Helper function that will reverse words at start and stop position
 *  - Because we're retuning the original array, mutate original array
 */

const reverseWords = (array) => {
  const result = [];

  // Loop through array push a word into the array when a word is created
  for (let i = array.length; i > 0; i--) {
    if (array[i] !== "  " || array[i] === " ") {
      result.push(" ");
    } else if (array[i] === "  ") {
      result.push(" ");
    }
  }

  return result;
};

console.log(reverseWords(arr));
