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

    let current = this.head
    while (current.next !== null) {
      //keep looping until you hit the tail
      current = current.next //set current to its next -- now we find tail
    }
    current.next = new Node(val) //add new node after find the tail
  }

  print() {
    let str = ''
    let current = this.head
    while (current !== null) {
      str += current.val + ' --> '
      current = current.next
    }
    console.log(str)
  }
}

const list = new LinkedList()

list.append('a')
list.append('b')
list.append('c')
// console.log(list.head)
list.print()
