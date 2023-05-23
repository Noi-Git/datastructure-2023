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

  contains(target) {
    let current = this.head
    while (current !== null) {
      if (current.val === target) {
        return true
      }
      current = current.next
    }
    return false
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

/* == another way to implement print
// const printLinkedList = (head) => {
//   let current = head
//   while (current !== null) {
//     console.log(current.value)
//     current = current.next
//   }
// }

*/

/* write print recursively == not working
const printLinkedListRecursive = (head) => {
  if (head === null) return
  console.log(head.val)
  printLinkedListRecursive(head.next)
}
*/

const list = new LinkedList()

list.append('a')
list.append('b')
list.append('c')
// // console.log(list.head)
// list.print()

// console.log(list.contains('b'))
// console.log(list.contains('e'))

// printLinkedListRecursive(a) // not working
