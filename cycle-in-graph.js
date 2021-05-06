/*
Input: adjacency list (array of arrays of edges)
Output: Boolean
*/

function cycleInGraph(edges) {
  const numEdges = edges.reduce((acc, cur) => {
    return acc + cur.length;
  }, 0);

  let found = false;

  const cycleFinder = (start, current, steps = 0) => {
    if (steps > numEdges || !edges[current].length) return;
    if (steps > 0 && current === start) found = true;

    for (let edge of edges[current]) {
      cycleFinder(start, edge, steps + 1);
    }
  };

  for (let i = 0; i < edges.length; i++) {
    cycleFinder(i, i);
  }

  return found;
}

const edges = [
  [1, 3], // 0
  [2, 3, 4], // 1
  [0], // 2
  [], // 3
  [2, 5], // 4
  [], // 5
];

console.log(cycleInGraph(edges));
