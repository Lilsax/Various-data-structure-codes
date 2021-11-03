// ******* Binary search

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value);
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchNode = (node) => {
      if (value < node.value) {
        if (node.left) {
          searchNode(node.left);
        } else {
          node.left = newNode;
        }
      } else if (value > node.value) {
        if (node.right) {
          searchNode(node.right);
        } else {
          node.right = newNode;
        }
      }
    };

    searchNode(this.root);
  }

  min() {
    let newNode = this.root;

    while (newNode.left) {
      newNode = newNode.left;
    }

    return newNode.value;
  }

  max() {
    let newNode = this.root;
    while (newNode.right) {
      newNode = newNode.right;
    }

    return newNode.value;
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value === value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  dfsInOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      result.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  dfsPreOrder() {
    let result = [];

    const traverse = (node) => {
      result.push(node.value);

      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    };

    traverse(this.root);
    return result;
  }

  dfsPostOrder() {
    let result = [];

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      result.push(node.value);
    };

    traverse(this.root);
    return result;
  }

  bfs() {
    let queue = [];
    let result = [];

    queue.push(this.root);

    while (queue.length) {
      let currentNode = queue.shift();
      currentNode.value += 20;
      result.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    return result;
  }

  updateValue(value) {
    let currentNode = this.root;
  }
}

const bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);
console.log(bst.min());
console.log(bst.max());
console.log(bst.contains(60));
console.log(bst.contains(600));
console.log(bst.dfsInOrder());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.bfs());
