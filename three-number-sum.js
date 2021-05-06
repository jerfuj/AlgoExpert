function threeNumberSum(array, targetSum) {
	array.sort((a, b) => a - b);
	const res = [];
	for (let i = 0; i < array.length; i++) {
		let tempTarget = targetSum - array[i];
		let left = i + 1;
		let right = array.length - 1;
		while (right > left) {
			let tempSum = array[left] + array[right];
			if (tempSum > tempTarget) right--;
			if (tempSum < tempTarget) left++;
			if (tempSum === tempTarget) {
				res.push([array[i], array[left], array[right]]);
				left++;
			}
		}
	}
	return res;
}