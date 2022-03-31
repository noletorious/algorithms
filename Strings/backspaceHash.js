const str1 = "ak#z#b"; //ab
const str2 = "ab#b"; //ab

/** Typed Out String
 *
 * Given two strings, any # is considered a backspace.
 * Q: Does case sensitivity matter? Yes.
 * C: If str1.length !== str2.length, return false.
 *
 */

/** Brute
 *  
 * T:O(n+m), S: O(n+m)
 * 
  
 1. Create a helper function that creates a new array, checking for #
 2. Create compare function that compares the two arrays
 3. Check if length of str1 and str2 are the same, if not return false
 4. If so, check if str1[i] and str2[i] are the same, if not return false
 5  return true, since tho failures happend

 * 
 */

const createNewString = (string) => {
  const newString = [];
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== "#") {
      newString.unshift(string[i]);
    } else {
      i--;
    }
  }
  return newString;
};

const bruteBackspaceHash = (string1, string2) => {
  const str1 = createNewString(string1);
  const str2 = createNewString(string2);
  if (str1.length !== str2.length) {
    return false;
  } else {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
  }
  return false;
};

console.log(bruteBackspaceHash(str1, str2));

/** Typed Out String
 * 
 * Optimized
 * T:O(n+m) S: O(1)
 * 
1. Create a hashmap
1. Loop through string1 and string2 as long as there is a item in either
2. 

* ak#z#b
  1 
* ab#b
  2

 */

const backspaceHash = (string1, string2) => {
  let p1 = string1.length - 1;
  let p2 = string2.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    // if p1 or p2 is equal to "#"
    if (string1[p1] === "#" || string2[p2] === "#") {
      // if p1 is equal to "#"
      if (string1[p1] === "#") {
        // forwad count moves past the current # and the next p1
        let forwardCount = 2;
        while (forwardCount > 0) {
          forwardCount--; //forwardCount = 0
          p1--;
          if (string1[p1] === "#") {
            forwardCount += 2;
          }
        }
      }
      if (string2[p2] === "#") {
        // forwad count moves past the current # and the next p1
        let forwardCount = 2;
        while (forwardCount > 0) {
          forwardCount--; //forwardCount = 1
          p2--;
          if (string2[p2] === "#") {
            forwardCount += 2;
          }
        }
      }
    } else {
      // if the string2[p1] and string2[p2] don't match
      if (string1[p1] !== string2[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

console.log(backspaceHash(str1, str2));
