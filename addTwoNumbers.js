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

const a = new ListNode("hello");
const l1 = [2, 4, 4];
//          x
const l2 = [5, 6, 7];
//          y
// carry = 0

function addTwoNumbers(l1, l2) {}

const atnpre = document.getElementById("atnpre");
atnpre.innerHTML += addTwoNumbers;
const atninput = document.getElementById("atninput");
atninput.innerHTML += "[" + l1 + "], [" + l2 + "]";
const atnoutput = document.getElementById("atnoutput");
atnoutput.innerHTML += JSON.stringify(addTwoNumbers(l1, l2));
