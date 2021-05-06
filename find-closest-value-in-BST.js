const findClosestValueInBst = (tree, target) => {
  let closest;

  const traverse = (node) => {
    if (!node) return;
    const diff = Math.abs(node.value - target);
    const currDiff = Math.abs(closest - target);
    if (closest === undefined || diff < currDiff) {
      closest = node.value;
    }
    if (target > node.value) {
      traverse(node.right)
    } else if (target < node.value) {
      traverse(node.left)
    } else {
      return;
    }
  }
  traverse(tree);

  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const root = new BST(10);
root.left = new BST(5);
root.left.left = new BST(2);
root.left.left.left = new BST(1);
root.left.right = new BST(5);
root.right = new BST(15);
root.right.left = new BST(13);
root.right.left.right = new BST(14);
root.right.right = new BST(22);

console.log(findClosestValueInBst(root, 12))
