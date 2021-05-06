class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
	const vals = [];
	const traverse = (node) => {
		if (vals.length === k) return;
		if (node.right) traverse(node.right);
		vals.push(node.value);
		if (node.left) traverse(node.left);
	}
  traverse(tree);
	return vals[k - 1]
}

const root = new BST(15);
root.left = new BST(5);
root.right = new BST(20);

console.log(findKthLargestValueInBst(root, 1))

