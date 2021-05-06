/*
Input: Matrix of 1's and 0's
Output: ARRAY of the lengths of rivers within the matrix

Notes: One 1 counts as a river of length 1
*/

function riverSizes(matrix) {
  const rivers = [];
  let currentLength = 0;

  const measureRiver = (row, col) => {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      matrix[row][col] === 0 ||
      matrix[row][col] === 'X'
    ) {
      return;
    }

    currentLength++;
    matrix[row][col] = 'X';

    measureRiver(row + 1, col);
    measureRiver(row, col + 1);
    measureRiver(row - 1, col);
    measureRiver(row, col - 1);
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 1) {
        measureRiver(i, j);
        rivers.push(currentLength);
        currentLength = 0;
      }
    }
  }

  return rivers;
}

const matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

console.log(riverSizes(matrix));
