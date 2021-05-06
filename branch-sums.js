// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	const res = [];
	
	const traverse = (node, sum) => {
		sum += node.value;
		if (!node.left && !node.right) {
			return res.push(sum);
		}
		if (node.left) traverse(node.left, sum);
		if (node.right) traverse(node.right, sum);
	}
	traverse(root, 0);
	
	return res;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
