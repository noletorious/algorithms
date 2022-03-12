/** TWO SUM ALGORITHM
 *
 *  [1, 3, 7, 5, 9, 2]
 *      i
 *            j
 *  target = 11
 *  output = [4,5]
 *
 */

/** QUESTIONS AND CONSTRAINTS
 *
 * Q: Empty array? 2 <= nums.length <= 104
 * Q: Integers in array negative? -109 <= nums[i] <= 109
 * Q: Target negative? -109 <= target <= 109
 * Q: Can there be multiple matches? Only one valid answer exists.
 *
 */

/** BRUTE
 *
 *  T:O(N^2)
 *  S:O(1)
 *
 *  result=[]
 *  for loop through arr, i // N
 *    for loop through arr, j = i + 1 // N
 *      sum = arr[i] + arr[j]
 *      if (sum === target) return i, j
 *  return result
 *
 */

/** OPTIMIZED, hash map approach
 *
 *  [1, 3, 10, 5, 9, 2]
 *         x
 *   x
 *  T:O(N)
 *  S:O(N)
 *
 *  map = {
 *        1:0,
 *        ...
 *      }
 *  difference = target - arr[x]
 *  11 - 1 = 9
 *
 */

const array = [1, 3, 7, 5, 9, 2];
const target = 11;

const twoSum = (arr, tar) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = map[arr[i]];
    if (diff >= 0) {
      return [diff, i];
    } else {
      const ntf = tar - arr[i];
      map[ntf] = i;
    }
  }
  return null;
};

console.log(twoSum(array, target));
