const binaryMatrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1],
];

/**
 * 
 * Depth first search, ...
 * 
 *  
0: [0,    1,    0,    1,    0],
1: [0,    0,    1,    1,    1],
2: [1,    0,    0,    1,    0],
3: [0,    1,    1,    0,    0],
4: [1,    0,    1,    0,    1] 

Depth first search, because we are diving into child per node

*/

function getNeighbors(matrix, rowLen, colLen, i, j) {
  let neighbors = [];
  // 0, 0
  // current
  let current = matrix[i][j];
  //above
  let above = matrix[i + 1][j];
  //below
  let below = matrix[i - 1][j];
  //right
  let right = matrix[i][j + 1];
  //left
  let left = matrix[i][j - 1];

  return neighbors;
}

function dfs(matrix, rowLen, colLen, i, j) {
  // i = 0, j = 1
  let islandCount = 0;
  let stack = [[i, j]];
  while (stack.length > 0) {
    let item = stack.pop();
    let [i, j] = item;
    // check if the last item in stack 1
    if (matrix[i][j] === 1) {
      matrix[i][j] = -1;
      // check neighbors
      let neighbors = getNeighbors(matrix, rowLen, colLen, i, j);
      stack.push(...neighbors);
      islandCount++;
    }
  }

  return islandCount > 0 ? true : false;
}

function countIslands(binaryMatrix) {
  let islands = 0;
  let rowLen = binaryMatrix.length;
  let colLen = binaryMatrix[0].length;

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      //dfs -> if true, increment island
      if (dfs(binaryMatrix, rowLen, colLen, i, j)) islands++;
    }
  }
  console.log(binaryMatrix);
  return islands;
}

console.log(countIslands(binaryMatrix));
