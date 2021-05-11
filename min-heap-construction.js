class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const lastIdx = array.length - 1;
    const firstParent = Math.floor((lastIdx - 1) / 2);

    for (let i = firstParent; i >= 0; i--) {
      this.siftDown(i, lastIdx, array);
    }

    return array;
  }

  siftDown(idx, lastIdx, array = this.heap) {
    while (idx <= lastIdx) {
      let currentValue = array[idx];

      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild;
      let rightChild;

      let swapIdx = null;

      if (leftChildIdx <= lastIdx) {
        leftChild = array[leftChildIdx];
        if (leftChild < currentValue) {
          swapIdx = leftChildIdx;
        }
      }

      if (rightChildIdx <= lastIdx) {
        rightChild = array[rightChildIdx];
        if (
          (!swapIdx && rightChild < currentValue) ||
          (swapIdx && rightChild < leftChild)
        ) {
          swapIdx = rightChildIdx;
        }
      }

      if (!swapIdx) break;

      [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];

      idx = swapIdx;
    }
  }

  siftUp(idx = this.heap.length - 1) {
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] > this.heap[idx]) {
        [this.heap[parentIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIdx],
        ];
        idx = parentIdx;
      } else {
        break;
      }
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const lastIdx = this.heap.length - 1;
    [this.heap[0], this.heap[lastIdx]] = [this.heap[lastIdx], this.heap[0]];
    const popped = this.heap.pop();

    this.siftDown(0, this.heap.length - 1);

    return popped;
  }

  insert(value) {
    this.heap.push(value);

    this.siftUp();
  }
}

const array = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

const Heap = new MinHeap(array);
console.log(Heap.heap);
console.log(Heap.insert(76));
console.log(Heap.peek());
console.log(Heap.remove());
console.log(Heap.peek());
console.log(Heap.remove());
console.log(Heap.peek());
console.log(Heap.insert(87));

