class LinkedList {
  constructor() {
    this.head = null;
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
    // if length is 0 make head the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      //update the current head with the new node
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // insert(value, index)
  insert(value, index) {}
  // remove(value, index)
  printList() {
    let output = "";
    let current = this.head;
    while (current !== null) {
      output = `${output}${current.value} => `;
      current = current.next;
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
list.append(52);
list.append(65);
list.append("a");
list.prepend("h");
list.printList();

// console.log(JSON.stringify(list, 0, 1));
