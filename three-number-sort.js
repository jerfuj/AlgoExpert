// Input:
//  "array": Array of all the nums
//  "order": Array of the order to sort the nums
// 3 DISTINCT INTEGERS

const threeNumberSort = (array, order) => {
  let left = 0;
  let right = array.length - 1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === order[0]) {
      [array[left], array[i]] = [array[i], array[left]];
      left++;
    } else if (array[i] === order[2] && i < right) {
      [array[right], array[i]] = [array[i], array[right]];
      right--;
      i--
    }
  }

  return array;
};

// const arr = [1, 0, 0, -1, -1, 0, 1, 1];
const arr = [7, 8, 9, 7, 8, 9, 9, 9, 9, 9, 9, 9];
// const order = [0, 1, -1];
const order = [7, 8, 9];
console.log(threeNumberSort(arr, order));
