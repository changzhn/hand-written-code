class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Tree {

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return;
    }
    let current = this.root;

    while(current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return;
        }
      } else if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return;
        }
      }
    }
  }
}