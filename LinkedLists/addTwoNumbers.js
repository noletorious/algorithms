function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createNodeList(arr) {
  let linkedList = new ListNode(arr[0]);
  let head = linkedList;
  for (let i = 1; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    head.next = newNode;
    head = head.next;
  }
  return linkedList;
}

/** QUESTIONS AND CONSTRAINTS
 *
 * Q: Can there be an empty linked list? The number of nodes in each linked list is in the range [1, 100].
 * Q: Can there be negative numbers? 0 <= Node.val <= 9
 * Q: Can the linked list start with zero? It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * C: We're given the our numbers in reverse, so we do the calculation in reverse.
 
*/

/** BRUTE SOLUTION
 *  T:1n + 1n + (n * n) > O(n^2)
 *  S:O(N log N) 
    - Loop through l1 and l2 repsectively
    - Push each value to an array
    - Loop l1Array, i
      - Loop l2Array, j
      ...
      sum > 9 { carry++}
      ...
    - join and return the new array with all the new digits
 *
*/

/** OPTIMIZED SOLUTION
 * 
 *         1
 *  [2, 4, 3]
 *  [5, 6, 4]
 *   -------->
 *   7  0  8
 *
 *  S:O(n)
 *  T:O(n)
 *

 1. Initialize:
    carry = 0
    result = new ListNode(-1), head = head
 2. Loop through l1 and l2 till the end
    3. If respectively l1 nodes exist, save the .val to a variable if not set to 0 (end of list)
    4. Create a sum from the two l1 and l2 values plus the carry
    5. Make carry = 0 at this point
    6. Set newDigit to be sum % 10
    6. Check if the sum is greater than 9, set carry = 1
    7. Set the head.next to newDigit
  8. if (carry > 0), create a new ListNode(0) and point head.next to it
  
 */

l1 = [2, 4, 9];
l2 = [5, 6, 9];

const l1_nodes = createNodeList(l1);
const l2_nodes = createNodeList(l2);

const addTwoNumbers = (list1, list2) => {
  let result = new ListNode(-1);
  let head = result;
  let carry = 0;

  while (list1 || list2) {
    let list1Val = list1 ? list1.val : 0;
    let list2Val = list2 ? list2.val : 0;

    let sum = list1Val + list2Val + carry;
    console.log(carry);
    carry = 0;

    let newDigit = new ListNode(sum % 10);

    if (sum > 9) {
      carry = 1;
    }

    head.next = newDigit;
    head = newDigit;

    if (list1) list1 = list1.next;
    if (list2) list2 = list2.next;
  }
  if (carry > 0) {
    head.next = new ListNode(1);
  }
  return result.next;
};

console.log(JSON.stringify(addTwoNumbers(l1_nodes, l2_nodes), 0, 1));
