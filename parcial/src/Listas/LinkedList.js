class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return newNode;
  }

  removeHead() {
    if (!this.head) return null;

    const removedValue = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (!this.head) this.tail = null;

    return removedValue;
  }
  size() {
    return this.length;
  }
  print() {
    let result = "";
    let current = this.head;

    while (current) {
      result += `[${current.value.name}] -> `;
      current = current.next;
    }

    return result + "null";
  }
}

export { LinkedList };
