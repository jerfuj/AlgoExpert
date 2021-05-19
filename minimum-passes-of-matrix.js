/*
I: matrix (Array of Arrays)
O: Number of passes til all negatives are converted OR -1

- 0 DOESN'T convert negatives to positives

2 queues (alternate)
*/

function minimumPassesOfMatrix(matrix) {
  // create 2 queues to alternate (so that we can count the number of rounds)
  const queue1 = [];
  const queue2 = [];

  // iterate once through the matrix to find initial positive values and add them to the first queue
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > 0) {
        queue1.push([i, j]);
      }
    }
  }

  let rounds = 0;

  while (queue1.length || queue2.length) {
    rounds++;

    // determine the current queue that will be used
    let current;
    let other;
    if (queue1.length) {
      current = queue1;
      other = queue2;
    } else {
      current = queue2;
      other = queue1;
    }

    while (current.length) {
      let [row, col] = current.shift();

      // find potential negative values, change them, then add coordinates to other queue
      // up
      if (row !== 0 && matrix[row - 1].length - 1 >= col) {
        if (matrix[row - 1][col] < 0) {
          matrix[row - 1][col] *= -1;
          other.push([row - 1, col]);
        }
      }
      // right
      if (col !== matrix[row].length - 1) {
        if (matrix[row][col + 1] < 0) {
          matrix[row][col + 1] *= -1;
          other.push([row, col + 1]);
        }
      }
      // down
      if (row !== matrix.length - 1 && matrix[row + 1].length - 1 >= col) {
        if (matrix[row + 1][col] < 0) {
          matrix[row + 1][col] *= -1;
          other.push([row + 1, col]);
        }
      }
      if (col !== 0) {
        if (matrix[row][col - 1] < 0) {
          matrix[row][col - 1] *= -1;
          other.push([row, col - 1]);
        }
      }
    }
  }

  // iterate through once more, finding a negative number means matrix is impossible to convert completely
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < 0) return -1;
    }
  }

  // subtract 1 from rounds for extra round where it's already solved
  return rounds - 1;
}

const matrix = [
  [0, -1, -3, 2, 0],
  [1, -2, -5, -1, -3],
  [3, 0, 0, -4, -1],
];

console.log(minimumPassesOfMatrix(matrix)); // 3
