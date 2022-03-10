/** IDEAS AND QUESTIONS

input:  arr = [1, 10, 0, 2, 8, 3, 0, 0, 6, 4, 0, 5, 7, 0]
output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

[], -> []
[2], -> [2]
[0,2] -> [2,0]
[undefined, 9], -> all items are integers

- preserve relative order of non zeros
- do I need to return the original array manipluted? -> Yes
zerosCount = 0

*/

/** SOLUTION

	zeros = 0
	p1 = 0
	p2 = 0
	arrayLen = array.length;
           2       10
	while(p1 < arrayLen){
		if(arr[p1] !== 0){
			p1++
		}else{
			zeros++
			p2 = p1 + 1
			     0
			let temp = arr[p2];
			if(temp !== 0){
				arr[p1]=temp;
			}
			p2++
		}
	}

*/

const arr = [1, 10, 0, 0, 0, 2, 8, 3, 7, 0];
//                 p1
//                     p2

function moveZerosToEnd(array) {
  return array;
}

console.warn(moveZerosToEnd(arr));
