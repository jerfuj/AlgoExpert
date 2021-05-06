// Solution 1
// const nonConstructibleChange = (change) => {
//   const coins = change.sort((a, b) => a - b);

//   for (let i = 1; i < Infinity; i++) {
//     if (!makeChange(coins, i)) return i;
//   }
// }

// const makeChange = (coins, target) => {
//   for (let i = coins.length - 1; i >= 0; i--) {
//     if (target - coins[i] >= 0) target -= coins[i];
//   }
//   return target === 0;
// }

// Solution 2

const nonConstructibleChange = (change) => {
  const coins = change.sort((a, b) => a - b);

  let changeMade = 0;
  for (let coin of coins) {
    if (coin > changeMade + 1) return changeMade + 1;

    changeMade += coin;
  }

  return changeMade + 1;
}


const coins = [5,7,1,1,2,3,22];
// sorted = [1,1,2,3,5,7,22];
console.log(nonConstructibleChange(coins)) // 20

// console.log(makeChange(coins, 20))