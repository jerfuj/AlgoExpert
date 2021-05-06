function findThreeLargestNumbers(array) {
	const res = [];
	const idx = [];
	
	while (res.length < 3) {
		let largest;
		let index;
		for (let i = 0; i < array.length; i++) {
      if (idx.includes(i)) continue;
			if (largest === undefined || array[i] > largest) {
				largest = array[i]
				index = i;
			}
		}
		res.unshift(largest);
		idx.push(index);
	}
	return res;
}


const arr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
console.log(findThreeLargestNumbers(arr))