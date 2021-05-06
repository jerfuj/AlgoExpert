function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
	const red = redShirtSpeeds.sort((a, b) => a - b);
	let blue;
	if (fastest) {
		blue = blueShirtSpeeds.sort((a, b) => b - a);
	} else {
		blue = blueShirtSpeeds.sort((a, b) => a - b);
	}
	
	let total = 0;
	for (let i = 0; i < blue.length; i++) {
		total += Math.max(red[i], blue[i])
	}
	
	return total;
}