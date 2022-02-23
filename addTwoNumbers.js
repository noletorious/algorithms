function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// input: l1 = [2,4,3], l2 = [5,6,4]
// output: [7,0,8]
// answer: 807

// naive approach: join, add, split, reverse, join
// issue:
// l1 = [1,2,3,...67], l2=[2,3,4,...66]
// javascript cannot calculate ~+30 integers => Infinity

// T: O(n)
// S: O(n)
// function addTwoNumbers(l1,l2){
// convert each array into numbers respectively
// add the two new numbers for a sum
// split the sum
// reverse the string
// join back to string and convert to number
// }

// const largeArray = Array(2).fill(1);
// const largeArray2 = Array(4).fill(4);

// const largeArrSplit = largeArray.join("555");
// const large2ArrSplit = largeArray2.join("");

// console.log(Number(largeArrSplit) + Number(large2ArrSplit));

// scalable approach: linked list
// edge case #1: What if l1.length !=== l2.length

const l1_array = [2, 4, 6];
//                x
const l2_array = [5, 6, 7, 9];
//                y

function createLinkedList(list) {
  let head, newNode;

  for (let i = list.length - 1; i >= 0; i--) {
    if (!head) {
      // first item will be null
      head = new ListNode(list[i]);
    } else {
      newNode = new ListNode(list[i]);
      newNode.next = head;
      head = newNode;
    }
  }
  return head;
}

let l1_nodes = createLinkedList(l1_array);
let l2_nodes = createLinkedList(l2_array);

function addTwoNumbers(l1, l2) {
  let head = new ListNode(-1);
  let result = head;
  let carry = 0;

  while (l1 || l2) {
    let l1Val = l1 ? l1.val : 0;
    let l2Val = l2 ? l2.val : 0;
    let sum = l1Val + l2Val + carry;
    carry = 0;
    let newDigit = sum;
    if (sum > 9) {
      newDigit = sum % 10;
      carry = 1;
    }
    result.next = new ListNode(newDigit);
    result = result.next;
    //traverse through l1 and l2
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (carry) {
    result.next = new ListNode(1);
  }
  return head.next;
}

const atnpre = document.getElementById("atnpre");
atnpre.innerHTML += addTwoNumbers;
const atninput = document.getElementById("atninput");
atninput.innerHTML += "[" + l1_array + "], [" + l2_array + "]";
const atnoutput = document.getElementById("atnoutput");
atnoutput.innerHTML += JSON.stringify(addTwoNumbers(l1_nodes, l2_nodes));
