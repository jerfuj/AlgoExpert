class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;
	
	while (current.next) {
		if (current.value === current.next.value) {
			const removed = current.next;
			const removedNext = removed.next;
			current.next = removedNext;
			removed.next = null;
			continue;
		}
		current = current.next;
	}
  return linkedList;
}