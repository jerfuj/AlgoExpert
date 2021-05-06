/*
Input: Array
Output: Number - the max sum of any subarray
*/

// function kadanesAlgorithm(array) {
//   let max = -Infinity;

//   const subarraySums = (arr) => {
//     if (!arr.length) return;
//     const sum = arr.reduce((acc, cur) => acc + cur);
//     if (sum > max) max = sum;

//     subarraySums(arr.slice(0, arr.length - 1));
//     subarraySums(arr.slice(1));
//   };

//   subarraySums(array);
//   return max;
// }

function kadanesAlgorithm(array) {
  let currSum = 0;
  let max = -Infinity;

  for (let num of array) {
    currSum = Math.max(currSum + num, num);
    max = Math.max(max, currSum)
  }

  return max;
}

const arr = [3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4];
console.log(kadanesAlgorithm(arr));
