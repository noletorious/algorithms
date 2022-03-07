function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

l1 = [2, 4, 3];
l2 = [5, 6, 4];

l1_nodes = new ListNode();
l1_head = l1_nodes;
l2_nodes = new ListNode();

const insertNode = (head, item) => {
  const newNode = new ListNode(item);
  newNode.next = head;
  head = newNode;
};

insertNode(l1_head, l1[0]);

console.log(l1_head);
