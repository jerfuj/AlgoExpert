function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (right >= left) {
    let midpoint = Math.floor((left + right) / 2);
    if (array[midpoint] === target) return midpoint;
    if (array[midpoint] < target) left = midpoint + 1;
    if (array[midpoint] > target) right = midpoint - 1;
  }
  return -1;
}

const arr = [0,1,21,33,45,45,61,71,72,73];
console.log(binarySearch(arr, 33))