class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (!this.left) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (!this.right) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  contains(value) {
    if (value < this.value) {
      if (!this.left) return false;
      return this.left.contains(value);
    } else if (value > this.value) {
      if (!this.right) return false;
      return this.right.contains(value);
    } else {
      return true;
    }
  }

  remove(value, parent = null) {
    // edge case: tree doesn't include value
    if (!this.contains(value)) return this;
    
    // finding the value
    if (value < this.value && this.left) {
      this.left.remove(value, this);
    } else if (value > this.value && this.right) {
      this.right.remove(value, this);

    // found the value
    } else {
      // if node has 2 children, swap the smallest value 
      // in the right side of the tree with the current value
      // then remove that smallest value
      if (this.left && this.right) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this)

      // if were at the root of the tree with only 1 child
      } else if (!parent) {
        if (this.left) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        }
      
      // only 1 child
      } else if (parent.left === this) {
        parent.left = this.left ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left ? this.left : this.right;
      }
    }
    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    }
    return this.left.getMinValue();
  }
}

const tree = new BST(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(1);
tree.insert(12);
tree.insert(14);

console.log(tree.remove(101))
