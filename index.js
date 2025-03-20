class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export default class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  getHead() {
    return this.head ? this.head.value : null;
  }

  getTail() {
    return this.tail ? this.tail.value : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    if (this.head === null) {
      return "[]";
    }
    let deque = "[";
    let thisNode = this.head;
    while (thisNode.next !== null) {
      deque += thisNode.value + ",";
      thisNode = thisNode.next;
    }
    deque += thisNode.value + "]";
    return deque;
  }

  // append to end of list
  push() {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // delete from end of list
  pop() {
    if (!this.tail) {
      return null;
    }
    const popped = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
    }
    this.length--;
    return popped.value;
  }

  // append to start of list
  unshift() {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  // delete from start of list
  shift() {
    if (!this.head) {
      return null;
    }
    const removed = this.head;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removed.next;
      this.head.prev = null;
    }
    this.length--;
    return removed.value;
  }
}
