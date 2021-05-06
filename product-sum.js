function productSum(array, level = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], level + 1);
    } else {
      sum += array[i];
    }
  }
  return level * sum;
}

const arr = [5,2,[7,-1],3,[6,[-13,8],4]]
console.log(productSum(arr)) // 12




// const arr2 = [5, 2, 12, 3, -10];
// const sum = arr2.reduce((acc,cur) => acc + cur);
// console.log(sum);