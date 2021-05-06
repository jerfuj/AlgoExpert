class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraverse(tree, array) {
  const traverse = (tree) => {
		if (tree.left) traverse(tree.left);
    array.push(tree.value);
		if (tree.right) traverse(tree.right);
	}
  traverse(tree);

  return array;
}

function preOrderTraverse(tree, array) {
  const traverse = (tree) => {
    array.push(tree.value);
		if (tree.left) traverse(tree.left);
		if (tree.right) traverse(tree.right);
	}
  traverse(tree);
  return array;
}

function postOrderTraverse(tree, array) {
  const traverse = (tree) => {
    if (tree.left) traverse(tree.left);
		if (tree.right) traverse(tree.right);
    array.push(tree.value);
	}
  traverse(tree);
  return array;
}

const tree = new BST(10)
tree.left = new BST(5)
tree.left.right = new BST(5)
tree.left.left = new BST(2)
tree.left.left.left = new BST(1)
tree.right = new BST(15)
tree.right.right = new BST(22)

console.log(postOrderTraverse(tree, []))

