// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    const traverse = (node) => {
      if (!node) return;
      array.push(node.name);
      for (let child of node.children) {
        traverse(child);
      }
    }
    traverse(this);
    return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
