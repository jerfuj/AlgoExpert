function powerset(array) {
  const res = [[]];

  for (let num of array) {
    // need to declare length because length is changing in inner loop
    const length = res.length;
    for (let i = 0; i < length; i++) {
      res.push([...res[i], num]);
    }
  }

  return res;
}

const array = [1, 2, 3];
console.log(powerset(array)); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
