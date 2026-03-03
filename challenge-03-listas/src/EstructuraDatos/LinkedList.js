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

  peek(predicate) {
    let current = this.head;
    while (current) {
      if (predicate(current.value)) return current;
      current = current.next;
    }
    return null;
  }

  size() {
    return this.length;
  }

  remove(predicate) {
    if (!this.head) return false;

    if (predicate(this.head.value)) {
      this.head = this.head.next;
      this.length--;

      if (!this.head) this.tail = null;
      return true;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current) {
      if (predicate(current.value)) {
        prev.next = current.next;

        if (current === this.tail) {
          this.tail = prev;
        }

        this.length--;
        return true;
      }

      prev = current;
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
      result += `${text} -> `;
      current = current.next;
    }

    return result + "null";
  }
}

export { Node, LinkedList };