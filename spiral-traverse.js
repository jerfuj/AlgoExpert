function spiralTraverse(array) {
  const res = [];
  const expectedLength = array.length * array[0].length;

  let top = 0;
  let right = array[0].length - 1;
  let bottom = array.length - 1;
  let left = 0;

  while (res.length < expectedLength) {
    // TOP EDGE
    for (let i = left; i <= right; i++) {
      res.push(array[top][i]);
    }
    if (res.length === expectedLength) break;
    top++;

    // RIGHT EDGE
    for (let i = top; i <= bottom; i++) {
      res.push(array[i][right]);
    }
    if (res.length === expectedLength) break;
    right--;

    // BOTTOM EDGE
    for (let i = right; i >= left; i--) {
      res.push(array[bottom][i]);
    }
    if (res.length === expectedLength) break;
    bottom--;

    // LEFT EDGE
    for (let i = bottom; i >= top; i--) {
      res.push(array[i][left]);
    }
    left++;
  }
  return res;
}


// const arr = [
//   [1,  2,  3,  4],
//   [12, 13, 14, 5],
//   [11, 16, 15, 6],
//   [10,  9,  8, 7]
// ]

const arr = [
  [1,  2,  3,  4],
  [10, 11, 12, 5],
  [9, 8, 7, 6],
]

console.log(spiralTraverse(arr))

// [0, 1, 2, 3]
// [4, 5, 6, 7]
// [8, 9, 10, 11]
// [12, 13, 14, 15]


// [0, 1, 2]
// [3, 4, 5]
// [6, 7, 8]