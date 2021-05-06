class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  const traverse = (tree, min = -Infinity, max = Infinity) => {
    if (tree === null) return true;
    if (tree.value < min || tree.value >= max) return false;

    const left = traverse(tree.left, min, tree.value)
    const right = traverse(tree.right, tree.value, max)
    return left && right
  }
  return traverse(tree);
}

const tree = new BST(10)
tree.left = new BST(9)
tree.right = new BST(11)
tree.left.left = new BST(12)


console.log(validateBst(tree))