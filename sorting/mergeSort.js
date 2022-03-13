const nums1 = [9, 2, 3, 4];
const nums2 = [2, 5, 6, 9];
let m = 4;
let n = 4;

// naive approach
// time: O(n^2),
// space: O(1n), linear because we and extra array to push into

var nMerge = function (nums1, m, nums2, n) {
  // create a new array
  // loop through nums1 array, i
  // loop through nums2 array, j
  // check if i is greater and than j
  // if so, insert i into array and decrement j
  // if not, insert j into array and decrement i
  // once checking all items in both arrays, copy new array into nums1
};

// smarter approach
// time: O(n),
// space: O(1), because we don't need to create new memory space for a temp array

// edge cases:
// nums1 || nums2 = [], ?
// m !== n, ?
// nums1 > nums2

var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let index = m + n - 1;

  // test checks:
  // check if nums1 or nums2 is empty

  while (second >= 0) {
    //O(n)
    let fVal = nums1[first];
    let sVal = nums2[second];
    if (fVal > sVal) {
      nums1[index] = fVal;
      first--;
      index--;
    } else {
      nums1[index] = sVal;
      second--;
      index--;
    }
  }

  // if there are still items left to sort, deal with the rest
  // while(first > 0){...}

  return nums1;
};
