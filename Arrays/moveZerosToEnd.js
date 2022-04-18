/** Move 0s to end
 *
 * C: Preserve the position of the non-zeros.
 * Q: Does it need to adjust the array in place? => Up to you.
 * Q: Are the items in the array negative? => Account for them
 *
 */

const arr = [0, 10, 0, -2, 0, 3];

//output: [0, 10, 0, -2, 0, 3]
//         i
//             j

// Iterative approach
// T: O(n^2), S: O(1)
function moveZerosToEnd(array) {
  let arrLen = array.length;

  for (let i = 0; i < arrLen; i++) {
    let iVal = array[i];
    for (let j = i; j < arrLen; j++) {
      let jVal = array[j];

      if (iVal === 0 && jVal !== 0) {
        array[i] = jVal;
        array[j] = iVal;
        break;
      }
    }
  }
  return array;
}

console.log("Iterative approach: " + moveZerosToEnd(arr));

// Shifters
// T: O(n), S: O(n)

const arr2 = [10, -2, 0, 0, -4, 0, 3];
// output:   [10, -2, -4, 0, -4, 0, 3]
//                           p
//                    m

function moveZerosToEndShifters(array) {
  let mostLeftZero = 0;
  let p = 0;
  while (p < array.length) {
    let current = array[p];

    if (current !== 0) {
      array[mostLeftZero] = current;
      mostLeftZero++;
    }

    if (p > mostLeftZero) {
      array[p] = 0;
    }

    p++;
  }
  return array;
}

console.log("Shifter approach: " + moveZerosToEndShifters(arr2));
