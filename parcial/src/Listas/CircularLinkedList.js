class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class CircularLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = newNode; 
      this.current = newNode;
      this.length++;
      return newNode;
    }

    newNode.next = this.head;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return newNode;
  }
  next() {
    if (!this.current) return null;
    this.current = this.current.next;
    return this.current.value;
  }

  currentValue() {
    if (!this.current) return null;
    return this.current.value;
  }
  size() {
    return this.length;
  }
  print() {
    if (!this.head) return "null";

    let result = "";
    let current = this.head;
    do {
      result += `[${current.value.name}] -> `;
      current = current.next;
    } while (current !== this.head);

    return result + "(vuelve al inicio)";
  }
}

export { CircularLinkedList };