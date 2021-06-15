// Input: height = Number, maxSteps = Number
// Output: Number of ways to climb the stairs

function staircaseTraversal(height, maxSteps) {
	let ways = 0;
	
	const traverse = (count) => {
		if (count > height) return;
		if (count === height) return ways++;
		
		for (let i = 1; i <= maxSteps; i++) {
			traverse(count + i)
		}
	}
	traverse(0)
	
  return ways;
}

console.log(staircaseTraversal(4, 2))