/*
Take in an array of POSITIVE integers and return the max sum of NON-ADJACENT elements in the array.

If its an odd length array, 
[100,2,3,400,5] => can't just do every other, might not be max


I: array
O: max sum of non adjacent integers

E: [] => 0
*/

// Create an array to hold max values (eventually return last num)
// iterate over the array
// the max at the current i will either be (max @ i - 2 PLUS arr[i]) OR max @ i - 1

function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0;

  const maxes = [];

  for (let i = 0; i < array.length; i++) {
    let twoAgo = maxes[i - 2] ? maxes[i - 2] : 0;
    let oneAgo = maxes[i - 1] ? maxes[i - 1] : 0;
    let currentMax = twoAgo + array[i];

    maxes.push(Math.max(currentMax, oneAgo))
  }

  return maxes.pop();
}

let arr = [75,105,120,75,90,135] // 330 (75 + 120 + 135)
//        [75,105,195,195,285,330]

let arr2 = [100, 300, 200, 30, 20, 300]
//         [100, 300, 300, 330, 330, 630]

let arr3 = [100, 300, 300, 30, 20, 200]


console.log(maxSubsetSumNoAdjacent(arr))