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

    // Lista vacía
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

  peek(predicate) {
    let current = this.head;
    while (current) {
      if (predicate(current.value)) return current;
      current = current.next;
    }
    return null;
  }

  // size
  size() {
    return this.length;
  }

  remove(predicate) {
    if (!this.head) return false;

    let current = this.head;

    while (current) {
      if (predicate(current.value)) {
        const prev = current.prev;
        const next = current.next;

        if (!prev) {
          this.head = next;
          if (this.head) this.head.prev = null;
        } else {
          prev.next = next;
        }

        if (!next) {
          this.tail = prev;
          if (this.tail) this.tail.next = null;
        } else {
          next.prev = prev;
        }

        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }

        return true;
      }

      current = current.next;
    }

    return false;
  }

  print(formatter) {
    let result = "";
    let current = this.head;

    while (current) {
      const v = current.value;
      const text = formatter ? formatter(v) : JSON.stringify(v);
      result += `${text} <-> `;
      current = current.next;
    }

    return result + "null";
  }


}

export { Node, DoublyLinkedList };