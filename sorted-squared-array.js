// solution 1
// const sortedSquaredArray = (array) => {
//   const squared =  array.map(el => (
//     el ** 2
//   ));
//   return squared.sort((a, b) => a - b)
// }

// solution 2
const sortedSquaredArray = (array) => {
  const res = Array(array.length);
  let left = 0;
  let right = array.length - 1;
  for (let i = res.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      res[i] = Math.pow(array[left], 2);
      left++;
    } else {
      res[i] = Math.pow(array[right], 2);
      right--;
    }
  }
  return res;
}

// const arr = [1,2,3,5,6,8,9];
const arr = [-10,-5,0,5,10];
console.log(sortedSquaredArray(arr))