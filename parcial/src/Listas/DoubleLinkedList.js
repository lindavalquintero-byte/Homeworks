class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
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

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;
    return newNode;
  }

  size() {
    return this.length;
  }

  print() {
    let result = "";
    let current = this.head;

    while (current) {
      const v = current.value;
      result += `[${v.patient} - ${v.doctor}] <-> `;
      current = current.next;
    }

    return result + "null";
  }
}

export { DoublyLinkedList };