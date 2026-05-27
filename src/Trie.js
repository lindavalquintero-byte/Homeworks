class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
    this.word = "";
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;

    for (let letter of word.toLowerCase()) {
      if (!current.children[letter]) {
        current.children[letter] =
          new TrieNode();
      }

      current = current.children[letter];
    }

    current.isEnd = true;
    current.word = word;
  }

  exists(word) {
    let current = this.root;

    for (let letter of word.toLowerCase()) {
      if (!current.children[letter]) {
        return false;
      }

      current = current.children[letter];
    }

    return current.isEnd;
  }

  suggestions(prefix) {
    let current = this.root;

    for (let letter of prefix.toLowerCase()) {
      if (!current.children[letter]) {
        return [];
      }

      current = current.children[letter];
    }

    const results = [];

    this.collectWords(current, results);

    return results;
  }

  collectWords(node, results) {
    if (node.isEnd) {
      results.push(node.word);
    }

    for (let letter in node.children) {
      this.collectWords(
        node.children[letter],
        results
      );
    }
  }
}

export default Trie;