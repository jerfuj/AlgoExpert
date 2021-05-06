function isMonotonic(array) {
  let isIncreasing;
  for (let i = 1; i < array.length; i++) {
    if (array[i] === array[i - 1]) continue;
    if (isIncreasing === undefined) {
      isIncreasing = array[i] > array[i - 1];
    }
    if (isIncreasing && array[i] < array[i - 1]) return false;
    if (isIncreasing === false && array[i] > array[i - 1]) return false;
  }
  return true;
}

const arr = [1,1,2,3,4,5,5,5,6,7,8,8,9,10,11];
console.log(isMonotonic(arr))