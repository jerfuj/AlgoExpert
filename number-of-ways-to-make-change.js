/*
Input:
  n = the amount of change to make
  denoms = an array of denomiations of coins to use

Output: the number of possible ways to make change for n

Edge cases: n = 0 ? => 0

basic forumula: the amount of ways to make the change without the included coin, PLUS the amount of ways to make change for (change - coin) using the coin 
*/

function numberOfWaysToMakeChange(n, denoms) {
  const ways = Array(n + 1).fill(0);
  ways[0] = 1;

  for (let denom of denoms) {
    for (let j = 0; j < ways.length; j++) {
      if (denom <= j) {
        ways[j] += ways[j - denom];
      }
    }
  }
  return ways.pop();
}

console.log(numberOfWaysToMakeChange(5, [1, 5])); // 2

// []    [1, 0, 0, 0, 0, 0]
// [1]   [1, 1, 1, 1, 1, 1]
// [1,5] [1, 1, 1, 1, 1, 2]

// []    [1, 0, 0, 0, 0, 0]
// [2]   [1, 0, 1, 0, 1, 0]
// [2,5] [1, 1, 1, 1, 1, 2]

// let coins = [1, 5, 10, 25];
// let target = 25;
