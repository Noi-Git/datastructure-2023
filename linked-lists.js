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
    //create a new node and asigned it to be a new head -- for empty linked list
    if (this.head === null) {
      this.head = new Node(val)
      return
    }

    let curr = this.head
    while (current.nex !== null) {
      //keep looping until you hit the tail
      curr = curr.next //set current to its next -- now we find tail
    }
    curr.next = new Node(val) //add new node after find the tail
  }
}

const list = new LinkedList()

list.append('a')
list.append('b')
