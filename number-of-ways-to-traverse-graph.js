/*
Input: Number - width, height of the graph
Output: Number - ways to reach bottom right
*/

function numberOfWaysToTraverseGraph(width, height) {
  const ways = [];
  for (let i = 0; i < height; i++) {
    ways.push(Array(width).fill(1));
  }

  for (let i = 1; i < height; i++) {
    for (let j = 1; j < width; j++) {
      let above = ways[i - 1][j];
      let left = ways[i][j - 1];
      ways[i][j] = above + left;
    }
  }

  return ways[height - 1][width - 1];
}

console.log(numberOfWaysToTraverseGraph(4, 3));
