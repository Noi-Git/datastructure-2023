/* Linked List */

// Step 1 create node

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  // add Node
  append(val) {
    if (this.head === null) {
      this.head = new Node(val) //create a new node and asigned it to be a new head
      return
    }
  }
}

const list = new LinkedList()

list.append('a')
list.append('b')
