// function minHeightBst(array) {
//   const rootMid = Math.floor(array.length / 2);
//   const tree = new BST(array[rootMid])

//   const buildTree = (arr) => {
//     if (!arr.length) return;
//     const mid = Math.floor(arr.length / 2);
//     tree.insert(arr[mid]);

//     buildTree(arr.slice(0, mid));
//     buildTree(arr.slice(mid + 1));
//   }

//   buildTree(array.slice(0, rootMid));
//   buildTree(array.slice(rootMid + 1));

//   return tree;
// }

function minHeightBst(array) {
  let root;
  const treeBuilder = (arr, left = 0, right = arr.length - 1) => {
    if (left > right) return;
    const mid = Math.floor((left + right) / 2);
    if (!root) {
      root = new BST(arr[mid]);
    } else {
      root.insert(arr[mid]);
    }
    treeBuilder(arr, left, mid - 1);
    treeBuilder(arr, mid + 1, right);
  }
  treeBuilder(array);

  return root;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

console.log(minHeightBst([1,2,3,4,5,6]))