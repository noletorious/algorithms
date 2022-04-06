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
 */

// Create a BinarySearchTree class

class BinarySearchTree {
  constructor(value) {
    this.root = new Node(value);
    this.length = 1;
  }

  /**
6
      9
  5      16
4  7   15  19
  
  */

  // insert
  insert(value) {
    /**
     * Create a newNode with the value.
     * If root node is null,
     *  this.head = newNode
     * else, there is a node
     *  Create a currentNode = this.head
     *  While(true)
     *    If value < current.value
     *      If (!current.left){
     *        current.left = newNode
     *        return this
     *       }
     *      current = current.left
     *    Else value > current.value
     *      If (!current.right){
     *        current.right = newNode
     *        return this
     *       }
     *      current = current.right
     *
     */
  }

  // lookup

  // remove
}

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

module.exports = BinarySearchTree;
