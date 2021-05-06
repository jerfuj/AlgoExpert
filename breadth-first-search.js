/*
Input: empty ARRAY
Output: same ARRAY of names in breadth-first search order
*/

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array = []) {
    const queue = [this];
    while (queue.length) {
      const current = queue.shift();
      array.push(current.name);

      for (let child of current.children) {
        queue.push(child);
      }
    }
    return array;
  }
}

const a = new Node('A');
a.addChild('B');
a.addChild('C');
a.addChild('D');

console.log(a.breadthFirstSearch());
