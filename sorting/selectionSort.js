const array = [94, 2, 44, 24, 9, 1, -1];
//             i
//                                   j
//                                   m
//             t = 94

/** Brute force below
 *
 * 	T: O(n^2)
 *  S: O(1)
 *
 */

const selectionSort = (arr) => {
  const arrLen = arr.length;
  // check if array length is less than 2, if so return arr
  if (arrLen < 2) {
    return arr;
  }
  // min will always change
  for (let i = 0; i < arrLen; i++) {
    let minIdx = i;
    let temp = arr[i];
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }
    arr[i] = arr[minIdx];
    arr[minIdx] = temp;
  }

  return arr;
};

console.log(selectionSort(array));
