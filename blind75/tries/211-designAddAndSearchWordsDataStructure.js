// 211. Design Add and Search Words Data Structure

// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

let TrieNode = function() {
    this.neightbor = new Map();
    this.wordEnd = false;
}

var WordDictionary = function() {
    this.root = new TrieNode();
    return this;
};

/** 
 * @param {string} word
 * @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
    let curr = this.root;
    for (let ch of word) {
        if (!curr.neightbor.has(ch)) {
            let aNode = new TrieNode();
            curr.neightbor.set(ch, aNode);
        }
        curr = curr.neightbor.get(ch);
    }
    curr.wordEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
// 这个因为有'.'，所以需要用dfs()来查找
WordDictionary.prototype.search = function(word) {
    let dfs = function(index, rootNode) {
        // index can't be word.length;
        // eg : word = '.'
        // we will call dfs(0, this.root);
        // then we will call dfs(1, this.root.neightbor);
        if (index > word.length) return false;
        let curr = rootNode;
        for (let i = index; i < word.length; i++) {
            if (word.charAt(i) !== '.') {
                if (!curr.neightbor.has(word.charAt(i))) {
                    return false;
                }
                curr = curr.neightbor.get(word.charAt(i));
            } else {
                for (let nei of curr.neightbor.values()) {
                    if (dfs(i + 1, nei))
                        return true;
                }
                return false;
            }
        }
        return curr.wordEnd;
    }
    return dfs(0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


//  Input
//  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
//  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
//  Output
//  [null,null,null,null,false,true,true,true]