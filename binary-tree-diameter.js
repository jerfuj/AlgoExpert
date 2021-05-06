class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree) {
  if (!tree) return new TreeInfo(0, 0);

  const leftTreeInfo = getTreeInfo(tree.left);
  const rightTreeInfo = getTreeInfo(tree.right);

  const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

  return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo {
  constructor(diameter, height) {
    this.diameter = diameter;
    this.height = height;
  }
}

// ========================================
function binaryTreeDiameter(tree) {
  let maxDiameter = 0;

  const traverse = (node) => {
    if (node === null) return 0;

    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);
    const diameter = leftHeight + rightHeight;
    maxDiameter = Math.max(maxDiameter, diameter);
    const currentHeight = Math.max(leftHeight, rightHeight) + 1;
    
    return currentHeight;
  }
  traverse(tree);

  return maxDiameter;
}