const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6, 9];
let m = 3;
let n = 4;

var merge = function (nums1, m, nums2, n) {
  //create pointers so we can compare values at locations in the respective arrays
  let first = m - 1;
  let second = n - 1;
  let index = m + n - 1;

  while (second >= 0) {
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

  return nums1;
};

console.log(merge(nums1, m, nums2, n));
