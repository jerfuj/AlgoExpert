// solution 1: exponential time
// const twoNumberSum = (array, targetSum) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length && j !== i; j++) {
//       if (array[i] + array[j] === targetSum) {
//         return [array[i], array[j]]
//       }
//     }
//   }
//   return [];
// };

// solution 2: linear time i think
const twoNumberSum = (array, targetSum) => {
  array.sort((a, b) => {
    return a - b;
  });
  let start = 0;
  let end = array.length - 1;
  let sum;
  while (end > start) {
    sum = array[start] + array[end];
    if (sum === targetSum) return [array[start], array[end]];
    if (sum < targetSum) start++;
    if (sum > targetSum) end--;
  }
  return [];
};

const arr = [3,5,-4,8,11,1,-1,6];
const target = 10;
console.log(twoNumberSum(arr, target));

