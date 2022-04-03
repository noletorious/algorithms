/** Reverse strings
 *
 * 1. Iteratively
 * 2. Using built-in js methods
 * 3. Using built-in js methods
 * 4. Recursively stack, T: O(2^n), S:O(n)
 * 5. Recursively, T: O(2^n), S:O(n)
 *
 */

const my_string = "Hello, my name is Noel";

// S: O(n)
// T: O(n)
function reverseString1(str) {
  // an empty array to hold the newly ordered array
  const reversed = [];
  // get the legnth of the string and minus 1 to get the end position
  const stringLength = str.length - 1;
  // loop through the array
  for (i = stringLength; i >= 0; i--) {
    reversed.push(str[i]);
  }
  const output = reversed.join("");
  return output;
}

// S:O(n)
// T:O(?)
function reverseString2(str) {
  return str.split("").reverse().join("");
}

function reverseString3(str) {
  return [...str].reverse().join("");
}

function reverseString4(str) {
  let strArray = str.split("");
  let reversedArray = [];

  function addToArrayFromEnd(arr) {
    if (arr.length > 0) {
      reversedArray.push(arr.pop());
      addToArrayFromEnd(arr);
    }
  }

  addToArrayFromEnd(strArray);

  return reversedArray.join("");
}

function reverseString5(str) {
  if (str <= 1) {
    console.log("end? - " + str);
    return str;
  } else {
    console.log("within else - " + str);
    return reverseString5(str.substring(1)) + str.charAt(0);
  }
}

console.log(reverseString5(my_string));
