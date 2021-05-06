// function mergeOverlappingIntervals(array) {
//   array.sort((a, b) => a[0] - b[0])
  
//   const res = [];

//   let current = 0;
//   let next = 1;
//   while (current < array.length) {
//     if (current === array.length - 1) {
//       res.push(array[current]);
//       break;
//     }
//     if (array[current][1] < array[next][0]) {
//       res.push(array[current]);
//       current = next;
//       next++;
//       continue;
//     }
//     if (array[current][1] >= array[next][0]) {
//       if (next === array.length - 1) {
//         array[current][1] = Math.max(array[current][1], array[next][1]);
//         res.push(array[current]);
//         break;
//       } else {
//         array[current][1] = Math.max(array[current][1], array[next][1]);
//         next++;
//       }
//     }
//   }
//   return res;
// }

function mergeOverlappingIntervals(array) {
  array.sort((a, b) => a[0] - b[0])
  const res = [];
  let current = array[0];
  res.push(current);

  for (let i = 1; i < array.length; i++) {
    let [curr0, curr1] = current;
    let [next0, next1] = array[i];
    if (curr1 >= next0) {
      current[1] = Math.max(next1, curr1);
    } else {
      current = array[i];
      res.push(current);
    }
  }
  return res;
}

// console.log(mergeOverlappingIntervals([[100,105], [1,104]]))
console.log(mergeOverlappingIntervals([[1, 2],[3, 5],[4, 7],[6, 8],[9, 10]]))