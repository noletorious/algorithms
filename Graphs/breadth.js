const BinarySearchTree = require("./BinarySearchTree");

const tree = new BinarySearchTree(9);

tree.insert(5);
tree.insert(16);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(15);
tree.insert(19);
// tree.remove(8);

console.log(tree);
