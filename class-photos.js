function classPhotos(redShirtHeights, blueShirtHeights) {
	const sortedRed = redShirtHeights.sort((a, b) => a - b);
	const sortedBlue = blueShirtHeights.sort((a, b) => a - b);

  let greater = 0;
  let less = 0;
	
  for (let i = 0; i < sortedRed.length; i++) {
    if (sortedRed[i] === sortedBlue[i]) return false;
    if (sortedRed[i] > sortedBlue[i]) greater++;
    if (sortedRed[i] < sortedBlue[i]) less++;
  }

  return greater === 0 || less === 0;
}

const blueShirtHeights = [5, 8, 1, 3, 4, 9];
const redShirtHeights = [6, 9, 2, 4, 5, 1];

console.log(classPhotos(redShirtHeights, blueShirtHeights))