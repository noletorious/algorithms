/** ISSUES
 * DEALING WITH NEGATIVE NUMBERS
 */

/** Median of two sorted arrays
 *
 * BRUTE
 * T: O(?)
 * S: O(s)
 *
 */

let nums1 = [1, 2, 3];
//                   i
let nums2 = [2, 3, 4];
//                 j

// result = [1,2,2,3,3]

// is nums1[i] = nums2[j]
// if so, push both nums1[i] and nums2[j] to result and increment both

// is nums1[i] < nums2[j]
// if so, push nums1[i] to result and increment i

// is nums2[j] < nums1[i]
// if so, push nums2[i] to result and increment j

function findMedianSortedArrays(nums1, nums2) {
  //get the lengths to determine if the result is odd or not
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  // create the new array to
  let result = []; // O(n)
  let median = 0;
  let p1 = 0;
  let p2 = 0;

  let isOdd = (nums1Len + nums2Len) % 2 === 1 ? true : false;

  // merge the list together in acsending order, stop when you reach the end of a short list
  while (p1 < nums1Len && p2 < nums2Len) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1], nums2[p2]);
      p1++;
      p2++;
    }
    if (nums1[p1] < nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
    }
    if (nums1[p1] > nums2[p2]) {
      result.push(nums2[p2]);
      p2++;
    }
  }

  // if there are still items left in itner
  while (p1 < nums1Len) {
    result.push(nums1[p1]);
    p1++;
  }

  while (p2 < nums2Len) {
    result.push(nums2[p2]);
    p2++;
  }

  // find the middle
  let mid = Math.floor(result.length / 2);

  if (isOdd) {
    // return the the center item
    median = result[mid];
  } else {
    let rightNum = result[mid];
    let leftNum = result[mid - 1];
    median = (rightNum + leftNum) / 2;
  }

  return median;
}

console.log("Median: " + findMedianSortedArrays(nums1, nums2));
