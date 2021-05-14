class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // find length
  let current = head;
  let length = 0;
  while (current) {
    length++;
    current = current.next;
  }

  // edge case: remove head
  if (length === k) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  // get to one before the node to be removed
  let pointer = head;
  let iterations = length - k - 1;
  for (let i = 0; i < iterations; i++) {
    pointer = pointer.next;
  }

  // remove node
  let removed = pointer.next;
  let afterRemoved = removed.next;
  pointer.next = afterRemoved;
  removed.next = null;
}

const list = new LinkedList(0);
const one = new LinkedList(1);
const two = new LinkedList(2);
const three = new LinkedList(3);
const four = new LinkedList(4);
const five = new LinkedList(5);
const six = new LinkedList(6);
const seven = new LinkedList(7);
const eight = new LinkedList(8);
const nine = new LinkedList(9);

list.next = one;
one.next = two;
two.next = three;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = eight;
eight.next = nine;

console.log(removeKthNodeFromEnd(list, 9));
