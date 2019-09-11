
class Node2 {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree2 {
    constructor() {
        this.root = null;
    }

    insert(num) {
        let node = new Node2(num, null, null);
        if (!this.root) {
            this.root = node;
            return;
        }

        let currentNode = this.root;

        while(currentNode) {

            if (num < currentNode.data) {
                if (!currentNode.left) {
                    currentNode.left = node;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = node;
                    return;
                }
                currentNode = currentNode.right
            }

        }
    }

    getMin() {
        let currentNode = this.root;

        while(currentNode) {
            if (!currentNode.left) {
                return currentNode.data;
            }
            currentNode = currentNode.left;
        }
    }

    getMax() {
        let currentNode = this.root;

        while(currentNode) {
            if (!currentNode.right) {
                return currentNode.data;
            }
            currentNode = currentNode.right;
        }
    }
}


