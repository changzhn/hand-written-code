
class LinkedNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    if (!this.head) {
      this.head = new LinkedNode(val);
      return;
    }

    let current = this.head;
    while(current.next) {
      current = current.next;
    }
    current.next = new LinkedNode(val);
  }
}