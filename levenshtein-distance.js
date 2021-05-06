/*
I: 2 Strings
O: Number - minimum number of edits performed on the first string to get second string
*/

function levenshteinDistance(str1, str2) {
  // making the matrix
  const matrix = [];
  for (let i = 0; i <= str1.length; i++) {
    matrix.push(Array(str2.length + 1));
  }
  // initializing the first row
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[0][i] = i;
  }

  // initializing the first column
  for (let i = 1; i < matrix.length; i++) {
    matrix[i][0] = i;
  }

  // i refers to letter in str1, j str2
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      let l1 = str1[i - 1];
      let l2 = str2[j - 1];

      let diagonal = matrix[i - 1][j - 1];
      if (l1 === l2) {
        matrix[i][j] = diagonal;
      } else {
        let left = matrix[i][j - 1];
        let above = matrix[i - 1][j];
        matrix[i][j] = Math.min(diagonal, left, above) + 1;
      }
    }
  }

  return matrix[matrix.length - 1][matrix[0].length - 1];
}

console.log(levenshteinDistance('abc', 'yabd'));
