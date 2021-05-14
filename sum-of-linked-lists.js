class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  let l1Current = linkedListOne;
  let l2Current = linkedListTwo;
  let l3;
  let l3Current;
  let remainder = 0;
  let sum;

  while (l1Current || l2Current) {
    // get the sum
    if (l1Current && l2Current) {
      sum = l1Current.value + l2Current.value;
    } else if (!l1Current) {
      sum = l2Current.value;
    } else if (!l2Current) {
      sum = l1Current.value;
    }

    // add the remainder
    sum += remainder;

    // find next remainder
    if (sum > 9) {
      remainder = 1;
      sum -= 10;
    } else {
      remainder = 0;
    }

    // create node in l3
    if (!l3) {
      l3 = new LinkedList(sum);
      l3Current = l3;
    } else {
      l3Current.next = new LinkedList(sum);
      l3Current = l3Current.next;
    }

    // move to next place (node)
    l1Current = l1Current ? l1Current.next : null;
    l2Current = l2Current ? l2Current.next : null;
  }

  // if remainder from last place of both nums
  if (remainder) {
    l3Current.next = new LinkedList(remainder);
  }

  return l3;
}

const l1 = new LinkedList(2);
const l12 = new LinkedList(4);
const l13 = new LinkedList(7);
const l14 = new LinkedList(1);
l1.next = l12;
l12.next = l13;
l13.next = l14;

const l2 = new LinkedList(9);
const l22 = new LinkedList(4);
const l23 = new LinkedList(5);
l2.next = l22;
l22.next = l23;

console.log(sumOfLinkedLists(l1, l2));
