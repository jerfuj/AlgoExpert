function invertBinaryTree(tree) {
	if (!tree.left && !tree.right) return;
	const left = tree.left;
	
	tree.left = tree.right;
	tree.right = left;
	
	if (tree.left) invertBinaryTree(tree.left);
	if (tree.right) invertBinaryTree(tree.right);

	return tree;
}