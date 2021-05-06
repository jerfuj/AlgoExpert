const bubbleSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1] , arr[j]]
      }
    }
  }
  return arr;
}

const arr = [50, 23, 3, 4, 13, 2, 10];
console.log(bubbleSort(arr))