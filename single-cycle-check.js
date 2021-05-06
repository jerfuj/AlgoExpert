/*
Input: Array
Output: Boolean
*/

function hasSingleCycle(array) {
  let counter = 0;
  let currIdx = 0;

  // go one round through the cycle
  while (counter < array.length) {
    counter++;

    let num = array[currIdx];
    // num === 0 means we already visited that index OR obviously won't go anwhere, so false
    if (num === 0) return false;
    // tag that we visited
    array[currIdx] = 0;

    // reduce jump if large
    if (Math.abs(num) >= array.length) {
      num %= array.length;
    }

    // make the jump
    currIdx += num;

    // get within bounds of the array
    if (currIdx < 0) {
      currIdx += array.length;
    } else if (currIdx >= array.length) {
      currIdx -= array.length;
    }
  }

  // means we're back at the start after the last jump
  return currIdx === 0;
}

const arr = [2, 3, 1, -4, -4, 2];
console.log(hasSingleCycle(arr));
