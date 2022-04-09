/** Longest Nonrepeating Substring */

/** Brute
 *
 * Loop through each possible combination.
 *
 * T:O(n^2)
 * S:O(n)
 *
 */

const str1 = "aaabceefgd";
//             ||

const longestSubstringBrute = (str) => {
  let longest = 0;
  for (let i = 0; i < str.length; i++) {
    let chars = {};
    let innerLongest = 0;
    for (let j = i; j < str.length; j++) {
      const currentChar = str[j];
      if (!chars[currentChar]) {
        chars[currentChar] = true;
        innerLongest++;
        longest = Math.max(longest, innerLongest);
      } else {
        break;
      }
    }
  }
  return longest;
};

console.log("Brute force: " + longestSubstringBrute(str1));

/** Pointer method
 *
 * T: O(n)
 * S: O(n)
 *
 */

/** Variables

 longest = 
 p1 = 
 p2 = 
 innerLongest = 
 chars = {

 }

 */

const str2 = "abcbaac";
// p1          |
// p2          |

const longestSubstringShifters = (str) => {
  let longest = 0;
  let p1 = 0,
    p2 = 0;
  let chars = {};
  let innerLongest = 0;

  while (p1 < str.length) {
    if (!chars[str[p2]]) {
      chars[str[p2]] = p2;
      p2++;
      innerLongest++;
    } else {
      p1 = p2;
      chars = {};
    }
    longest = Math.max(innerLongest, longest);
  }

  console.log(chars);
  return longest;
};

console.log("Shifter force: " + longestSubstringShifters(str2));
