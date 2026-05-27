class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.product = null;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(name, popularity) {
    let current = this.root;

    for (let letter of name.toLowerCase()) {
      if (!current.children[letter]) {
        current.children[letter] = new TrieNode();
      }

      current = current.children[letter];
    }

    current.isEndOfWord = true;

    current.product = {
      name,
      popularity,
    };
  }

  searchByPrefix(prefix) {
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
    if (node.isEndOfWord) {
      results.push(node.product);
    }

    for (let letter in node.children) {
      this.collectWords(node.children[letter], results);
    }
  }

  searchTopK(prefix, k) {
    const results = this.searchByPrefix(prefix);

    return results
      .sort((a, b) => b.popularity - a.popularity)
      .slice(0, k);
  }
}

export default Trie;