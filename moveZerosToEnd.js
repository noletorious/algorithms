/** IDEAS AND QUESTIONS

input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

- preserve relative order of non zeros
- we are ultimately returning the original array

- [], -> []
- [2], -> [2]
- [0,2] -> [2,0]
- [undefined, 9], -> all items are integers

*/

/** BRUTE SOLUTION, the purely iterative approach
 * 
 * 	0, 10, 0, 8, 3, 0
 *  i
 *  0,  0, 0, 0, 0, 0
 *  j
 * 

	T:O(n) // O(n^2)
	S:O(1) // O(n)

	arrLen = arr.length

	nonZerosNums = new Array(arr.legnth)
	zeros = 3

	loop over arr // 0(n)
		push the non zero nums to nonZerosNums array
		change current number to 0

	loop over nonZerosNum, i // 0(n)
	   loop over arr, j // 0(n)
	    if nonZerosNum[i] !== undefined, 
	   		j = i
		else 
			arr[i]=0
		i++
		j++
*/

/** OPTIMIZED SOLUTION, the shifting pointers approach
 * 
 *  0, 0, 10, 8, 3, 0
 *  10, 8, 3, 8, 3, 0
 *               p1
 *                    p2
 * 
 *  T: O(n^2)
 *  S: O(1)

	arrLen = arr.length
	p1 = 0
	p2 = 2
	zeros = 1
          0      6
	while(p2 < arrLen){
		if(p1 !== 0){
			p1++
		} else {
			zero++
			p2 = p1 + 1
			while(p1 < p2){
				if(p2 !== 0){
					p1 = p2
					p1++
					p2++
				} else {
					zeros++
					p2++
				}
			}
		}
	}
	return arr

 */

/** OPTIMIZED 
 * 
 *  T: O(n)
 *  S: O(1)
 * 
 *   r
 * 1,-1,2,4,6
 *   l
 * 
	const arrLen = arr.length;

	let left = 0,
		right = 0,
		nextNonZero = 0;

	while (right < arrLen) {
		if (arr[right] !== 0) {
			nextNonZero = arr[right];
			arr[left] = nextNonZero;
			if (right > left) {
				arr[right] = 0;
			}
			right++;
			left++;
		} else {
			right++;
		}
	}
	return arr;

 */

const array = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0];
//                                       p1
//                                 p2

function moveZerosToEnd(arr) {
  const arrLen = arr.length;

  let left = 0,
    right = 0,
    nextNonZero = 0;

  while (right < arrLen) {
    if (arr[right] !== 0) {
      nextNonZero = arr[right];
      arr[left] = nextNonZero;
      if (right > left) {
        arr[right] = 0;
      }
      right++;
      left++;
    } else {
      right++;
    }
  }
  return arr;
}

console.log(moveZerosToEnd(array));
