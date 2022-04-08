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
    this.tail = this.root;
    this.length = 1;
  }

  /**

      9
  5      16
4  7   15  19
    8*
  
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
     */

    const newNode = new Node(value);
    if (!this.root) {
      return null;
    } else {
      while (currentNode !== null) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = newNode;
          }
          currentNode = currentNode.left;
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = newNode;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this.root;
  }

  // lookup

  // remove
  remove(value) {
    /**
     *
     * Create a currentNode pointer to this.head
     * Create stack to retrieve last node
     * Add
     * While(!stack)
     * if currentNode.value === value
     *  pop the last item off the stack, call it prevItem
     *  prevItem.next = currentNode.next
     *  delete currentNode
     * else add currentNode to stack
     *  if value > currentNode.value, go right
     *    currentNode = currentNode.right
     *  else go left
     *    currentNode = currentNode.left
     *
     *
     */
  }
}

class Node {
  constructor(value, right = null, left = null) {
    this.value = value;
    this.right = right;
    this.left = left;
  }
}

module.exports = BinarySearchTree;
