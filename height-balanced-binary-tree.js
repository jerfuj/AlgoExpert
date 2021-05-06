class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  let balanced = true;

  const traverse = (node) => {
    if (!node) return 0;
    if (!balanced) return;

    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
      balanced = false;
      return;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  }
  traverse(tree);

  return balanced;
}
