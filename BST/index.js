/** BFS, level by level
 *
 * Pros: Shortest path, closer nodes
 * Cons: More memory
 *
 * Use a stack to manage the nodes(child) on a given level.
 *
 */

/** DFS, down to the bottom then back up
 *
 * Pros: Less Memory, does the path exist?
 * Cons: Can be slow time wise.
 *
 *
 *
 */

// Create a BinarySearchTree class

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {}
  //remove
}

class Node {
  constructor(right = null, left = null) {
    this.right = right;
    this.left = left;
  }
}
