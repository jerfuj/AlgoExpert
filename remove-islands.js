/*
Input: Matrix
Output: same Matrix with islands turned to 0's
*/

function removeIslands(matrix) {
  const markPenninsulas = (row, col) => {
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      matrix[row][col] === 0 ||
      matrix[row][col] === 2
    ) {
      return;
    }

    matrix[row][col] = 2;
    markPenninsulas(row, col + 1);
    markPenninsulas(row + 1, col);
    markPenninsulas(row, col - 1);
    markPenninsulas(row - 1, col);
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (i > 0 && i < matrix.length - 1 && j > 0 && j < matrix[0].length - 1) {
        continue;
      }
      if (matrix[i][j] === 1) {
        markPenninsulas(i, j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 2) {
        matrix[i][j] = 1;
      } else if (matrix[i][j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
}

const matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
];

console.log(removeIslands(matrix));
