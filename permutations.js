function getPermutations(array) {
  if (!array.length) return [];

  const res = [];

  const makePermutations = (arr) => {
    if (arr.length === array.length) {
      return res.push(arr);
    }

    for (let num of array) {
      if (arr.includes(num)) continue;
      makePermutations([...arr, num]);
    }
  };

  makePermutations([]);

  return res;
}

const arr = [1, 2, 3];
console.log(getPermutations(arr));
