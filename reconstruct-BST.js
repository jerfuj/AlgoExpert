class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(values) {
  if (!values.length) return null;

  let current = values[0];
  let splitIdx = values.length;

  for (let i = 1; i < values.length; i++) {
    if (values[i] > current) {
      splitIdx = i;
      break;
    }
  }

  const left = reconstructBst(values.slice(1, splitIdx));
  const right = reconstructBst(values.slice(splitIdx));
  return new BST(current, left, right);
}

console.log(reconstructBst([10,4,2,1,5,17,19,18]))