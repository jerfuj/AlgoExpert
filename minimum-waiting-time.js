function minimumWaitingTime(queries) {
  if (queries.length <= 1) return 0;
  const sorted = queries.sort((a,b) => a - b)
  sorted.pop();
  let sum = sorted.reduce((acc, cur) => acc + cur)
  let total = sum;
  while (sorted.length) {
    total -= sorted.pop();
    sum += total;
  }
  return sum;
}

const queries = [3,2,1,2,6];
console.log(minimumWaitingTime(queries)) // 17
