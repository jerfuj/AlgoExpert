// function firstDuplicateValue(array) {
//   const counts = {};

//   for (let num of array) {
//     if (counts[num]) return num;
//     counts[num] = 1;
//   }
//   return -1;
// }

function firstDuplicateValue(array) {
  for (let num of array) {
    const abs = Math.abs(num);
    if (array[abs - 1] < 0) return abs;
    array[abs - 1] = -array[abs - 1];
  }
  return -1;
}

console.log(firstDuplicateValue([9, 12, 14, 6, 14, 2, 4, 9, 13, 2, 10, 5, 7, 1]))