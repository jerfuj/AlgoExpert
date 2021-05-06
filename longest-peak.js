function longestPeak(array) {
  let longest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1] && array[i] > array[i - 1]) {
      longest = Math.max(findLength(i, array), longest)
    }
  }
  return longest;
}

const findLength = (index, array) => {
  let left = index - 1;
  let right = index + 1;
  let length = 3;

  while (array[left - 1] < array[left] || array[right + 1] < array[right]) {
    if (array[left - 1] < array[left]) {
      length++;
      left--;
    }
    if (array[right + 1] < array[right]) {
      length++;
      right++;
    }
  }
  return length;
}

const arr = [1,2,3,3,4,0,10,6,5,-1,-3,2,3];
console.log(longestPeak(arr))
// find index where -1 and +1 are lower (peak)
