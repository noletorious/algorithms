const nums = [4, 3, 2, 1, 9, 8, 7, 6, 5];

/**
 * Bubble sort
 * T:O(n^2)
 * S:O(1)
 *
 * [4, 3, 2, 1, 9, 8, 7, 6, 5] // before
 *  					   len
 * [3, 4, 2, 1, 8, 7, 6 ,9, 5] // after
 *  i
 *  j
 */

const bubbleSort = (numbers) => {
  let arrLen = numbers.length;
  for (let i = 0; i < arrLen; i++) {
    console.log("i: " + i);
    for (let j = 0; j < arrLen; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  return nums;
};

console.log("result: " + bubbleSort(nums));
