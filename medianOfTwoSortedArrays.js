/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 
 */

let nums1 = [3];
let nums2 = [-2, -1];

var findMedianSortedArrays = function (nums1, nums2) {
  const nums1Len = nums1.length;
  const nums2Len = nums2.length;

  let median = 0;
  let mergedArray = []; // O(n)
  let p1 = 0;
  let p2 = 0;

  let isOdd = (nums1Len + nums2Len) % 2 === 1 ? true : false;

  // merge the list together in acsending order, stop when you reach the end of a short list
  while (p1 < nums1Len && p2 < nums2Len) {
    if (nums1[p1] <= nums2[p2]) {
      mergedArray.push(nums1[p1]);
      mergedArray.push(nums2[p2]);
    } else {
      mergedArray.push(nums2[p2]);
      mergedArray.push(nums1[p1]);
    }
    p1++;
    p2++;
  }

  // if there are still items left in itner
  while (p1 < nums1Len) {
    mergedArray.push(nums1[p1]);
    p1++;
  }

  while (p2 < nums2Len) {
    mergedArray.push(nums2[p2]);
    p2++;
  }

  // find the middle
  let mid = Math.floor(mergedArray.length / 2);

  if (isOdd) {
    // return the the center item
    median = mergedArray[mid];
  } else {
    let rightNum = mergedArray[mid];
    let leftNum = mergedArray[mid - 1];
    median = rightNum / leftNum;
  }

  return median;
};

console.log(findMedianSortedArrays(nums1, nums2));
