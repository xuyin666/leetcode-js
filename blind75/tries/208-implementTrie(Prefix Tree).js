// 208. Implement Trie (Prefix Tree)
// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, and false otherwise.


function TrieNode() {    
    this.neighbors = new Map();
    this.wordEnd = false;
}

var Trie = function() {
    this.root = new TrieNode();
    return this;
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (let ch of word) {
        if (!curr.neighbors.has(ch)) {
            let aNode = new TrieNode();
            curr.neighbors.set(ch, aNode);
        }
        curr = curr.neighbors.get(ch);
    }
    curr.wordEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root;
    for (let ch of word) {
        if (!curr.neighbors.has(ch)) {
            return false;
        }
        curr = curr.neighbors.get(ch);
    }
    return curr.wordEnd;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (let ch of prefix) {
        if (!curr.neighbors.has(ch)) {
            return false;
        }
        curr = curr.neighbors.get(ch);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

//  Input
//  ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
//  [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
//  Output
//  [null, null, true, false, true, null, true]