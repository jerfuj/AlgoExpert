function firstNonRepeatingCharacter(string) {
	const counts = new Map();
	for (let i = 0; i < string.length; i++) {
		if (!counts.get(string[i])) {
      counts.set(string[i], {i, count: 1})
    } else {
      counts.get(string[i]).count++;
    }
	}
  for (let value of counts.values()) {
    if (value.count === 1) return value.i;
  }
  return -1;
}


let str = 'aabbcddeeff'
console.log(firstNonRepeatingCharacter(str))
