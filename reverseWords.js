let sentence = ["h", "e", "y", "  ", "t", "h", "e", "r", "e", "  ", "y", "o", "u"];
// output -> ["y", "o", "u","  ", "t", "h", "e", "r", "e", "  ","h", "e", "y" ]

/** QUESTIONS AND CONSTRAINTS
 * 
 *  - [" ", "h", ...], starts with a space? -> trims beginning and end if they are spaces
 *  - Are we returning the original array? 
 *  - [" ", " "], array with just spaces? -> 
 * 
 */

/** BRUTE SOLUTION
 * 
 *  T: O(n^2)
 *  S: O(n^2)
 * 
 *  Concept: output = [...endWord," ",output]
  
  1. Create variables, mainly the output array
  2. Loop thought the sentence array from the end
    - Push each letter to a new array, essentially reversing and copying the original array
  3. Loop through array, 
    - Create a new array that will hold the word
    - While looping array, 
      - until check if space, create word
    - Update the output with new word, output = [...endWord," ",output]
  4. return output
  
 */

/** OPTIMIZED SOLUTION, shifting pointer method
 * 
 *  T: O(n)
 *  S: O(1)
 * 

  1. Write a swappingEndsToCenter helper function, swapEnds(arr, start, end)
  2. Use the swapEnds functions to swap the array once, now the words in the right position
  3. If first element in array is space, shift
  4. If last element in array is space, pop
  3. Loop through the array in order to swap the words in the correct order
      - If p1 === " ", using two pointers,
      - swap the words at coordnates start = p2, end = p1 - 1 using the helper function
      - p2 = p1 + 1, p1++
    -p++
  4. return arr

*/

const reverseWords = (array) => {};

console.log(reverseWords(arr));
