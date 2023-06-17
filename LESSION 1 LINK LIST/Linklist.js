import { Node } from "./Node.js";

class Linklist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addNode(params) {
    const newNode = new Node(params);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  linearSearch(params) {
    let nextNode = this.head;
    let index = 0;
    while (this.head && nextNode) {
      if (nextNode.value === params) {
        return index;
      } else {
        index++;
        nextNode = nextNode.next;
      }
    }
    return -1;
  }
}

const mylist = new Linklist();

mylist.addNode(12);
mylist.addNode(68);
mylist.addNode(45);

console.log(mylist);

console.log(mylist.linearSearch(45));
