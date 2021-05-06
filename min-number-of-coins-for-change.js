function minNumberOfCoinsForChange(n, denoms) {
  const mins = Array(n + 1).fill(Infinity);
  mins[0] = 0;

  for (let denom of denoms) {
    for (let i = 1; i < mins.length; i++) {
      if (denom <= i) {
        mins[i] = Math.min(mins[i], 1 + mins[i - denom])
      }
    }
  }
  return mins[n] === Infinity ? -1 : mins[n];
}

/*
            0  1  2  3  4  5  6  7
           [0, 0, 0, 0, 0, 0, 0, 0]
[1]        [0, 1, 2, 3, 4, 5, 6, 7]
[1, 5]     [0, 1, 2, 3, 4, 1, 2, 3]
[1, 5, 10] [0, 1, 2, 3, 4, 1, 2, 3]
let n = 7;
            0  1  2  3  4  5  6  7  8  9  10
           [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
[1]        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
[1, 5]     [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 2]
[1, 5, 10] [0, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1]
let n2 = 10;
*/
// let n = 7;
// let denoms = [1, 5, 10];

/*
            0  1  2  3  4  5  6  7
[]         [0, I, I, I, I, I, I, I]
[2]        [0, I, 1, I, 2, I, 3, I]
[2, 4]     [0, I, 1, I, 1, I, 2, I]
let n = 7;
*/

let n = 7;
let denoms = [1,5,10];
console.log(minNumberOfCoinsForChange(n, denoms));
