function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	
	let currOne = 0;
	let currTwo = 0;
	let diff;
	let pair;
	
	while (currOne < arrayOne.length && currTwo < arrayTwo.length) {
		let tempDiff = Math.abs(arrayOne[currOne] - arrayTwo[currTwo]);
		if (diff === undefined || tempDiff < diff) {
			diff = tempDiff;
			pair = [arrayOne[currOne], arrayTwo[currTwo]]
		}
		arrayOne[currOne] < arrayTwo[currTwo] ? currOne++ : currTwo++;
	}
	
	return pair;
}