function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

l1 = [2, 4, 3];
l2 = [5, 6, 4];

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

const l1_nodes = createNodeList(l1);
const l2_nodes = createNodeList(l2);

/** QUESTIONS AND CONSTRAINTS
 *
 * Q: Can there be an empty linked list? The number of nodes in each linked list is in the range [1, 100].
 * Q: Can there be negative numbers? 0 <= Node.val <= 9
 * Q: Can the linked list start with zero? It is guaranteed that the list represents a number that does not have leading zeros.
 *
 * C: We're given the our numbers in reverse, so we do the calculation in reverse.
 *
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
 *
 *
 */

const addTwoNumbers = (n1, n2) => {};

console.log(addTwoNumbers(l1_nodes, l2_nodes));
