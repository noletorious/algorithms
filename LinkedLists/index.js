class LinkedList {
  constructor() {
    this.head = {};
    this.tail = this.head;
    this.length = 0;
  }

  // append
  append(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  // prepend
  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // insert(value, index)
  // remove(value, index)
  printList() {
    let count = 0;
    let output = "";
    let current = this.head;
    while (this.length >= count) {
      output = `${output}${current.value} => `;
      current = current.next;
      count++;
    }
    console.log(`${output}null`);
  }
}

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const list = new LinkedList();
list.prepend(-6);
// list.append(5);
// list.append(9);
// list.append(52);
list.append(65);
list.append("a");
list.printList();

console.log(JSON.stringify(list, 0, 1));

/** BFS, level by level
 *
 * Pros: Shortest path, closer nodes
 * Cons: More memory
 *
 */

/** DFS, down to the bottom then back up
 *
 * Pros: Less Memory, does the path exist?
 * Cons: Can be slow time wise.
 *
 */
