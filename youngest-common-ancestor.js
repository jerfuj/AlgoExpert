class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  let depthOne = findDepth(descendantOne);
  let depthTwo = findDepth(descendantTwo);
  const depthDiff = depthOne - depthTwo;
  let lowerNode = depthOne > depthTwo ? descendantOne : descendantTwo;
  let higherNode = depthOne > depthTwo ? descendantTwo : descendantOne;

  for (let i = 0; i < Math.abs(depthDiff); i++) {
    lowerNode = lowerNode.ancestor;
  }

  while (lowerNode && higherNode) {
    if (lowerNode === higherNode) {
      return lowerNode;
    }
    if (lowerNode.ancestor === higherNode.ancestor) {
      return lowerNode.ancestor;
    }
    lowerNode = lowerNode.ancestor;
    higherNode = higherNode.ancestor;
  }
}

const findDepth = (node) => {
  let depth = 0;
  while (node) {
    depth++;
    node = node.ancestor;
  }
  return depth;
};

const a = new AncestralTree('A');
const b = new AncestralTree('B');
const d = new AncestralTree('D');
const e = new AncestralTree('E');
const h = new AncestralTree('H');
const i = new AncestralTree('I');

h.ancestor = d;
i.ancestor = d;
d.ancestor = b;
e.ancestor = b;
b.ancestor = a;

console.log(getYoungestCommonAncestor(a, e, i));
