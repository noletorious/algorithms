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

// console.log("Brute force: " + longestSubstringBrute(str1));

/** Pointer method #1 Currently incorrect
 *
 * T: O(n)
 * S: O(n)
 *
 */

const str2 = "abcbaachijklmnophhhhhachijklmnopyzx";
// p1          |
// p2          |

const longestSubstringShifters = (str) => {
  let longest = 0;
  let p1 = 0,
    p2 = 0;
  let chars = {};
  let innerLongest = 0;

  while (str[p2]) {
    if (!chars[str[p2]]) {
      chars[str[p2]] = p2;
      p2++;
      innerLongest++;
    } else {
      p1 = p2;
      chars = {};
      innerLongest = 0;
    }
    longest = Math.max(innerLongest, longest);
  }

  return longest;
};

// console.log("Shifter force: " + longestSubstringShifters(str2));

/**  Pointer method #2
 *
 *  T: O(n)
 *  S: O(n)
 *
 */

/**
 *
 *  longest = 0
 *  innerLongest = 0
 *  chars  {
 *  a:0,
 *  d:1,
 *  b:4,
 *  c:3,
 *  b:X
 *
 *  }
 *
 */

//            01234567
const str3 = "adbcbaac";
//            i
//             p
const longestSubstringShifters2 = (str) => {
  if (str === "") return 0;

  let longest = 0;
  let chars = {};
  let pointer = 0;

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    const seenCharIndex = chars[currentChar];
    if (seenCharIndex >= left) {
      pointer = seenCharIndex + 1;
    }
    chars[str[i]] = i;
    longest = Math.max(longest, pointer - i + 1);
  }
  return longest;
};

console.log("Shifter force2: " + longestSubstringShifters(str2));
