// 212. Word Search II
// Given an m x n board of characters and a list of strings words, return all words on the board.
// Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

let TrieNode = function () {
    this.neightbour = new Map();
    this.wordEnd = false;
}
let WordDictionary = function () {
    this.root = new TrieNode();
    return this;
} 

WordDictionary.prototype.addWord = function(word){
    let curr = this.root;
    for (let ch of word) {
        if (!curr.neightbour.has(ch)) {
            let newNode = new TrieNode();
            curr.neightbour.set(ch, newNode);
        } 
        curr = curr.neightbour.get(ch);
    }
    curr.wordEnd = true;
}



/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    let wordDictionary = new WordDictionary();
    for (let word of words) {
        wordDictionary.addWord(word);
    }
    let visit = new Set();
    let res = new Set();
    // 这个dfs相当于融合了dfs 和 wordSearch
    // 所以他的参数得是 row，col，node，word
    let dfs = function(row, col, node, word) {
        // if row and col out of bound, we return false
        // if we have just visited the row and col we return false
        // if the node doesn't have the board[col][row] we return fasle too
        if (row < 0 || row >= board.length ||
            col < 0 || col >= board[0].length ||
            visit.has(row + "," + col) ||
            !node.neightbour.has(board[row][col])){
                return false;
        }
        node = node.neightbour.get(board[row][col]);
        word = word + board[row][col]
        // it menas that the current node is the end, so we can add the word
        if (node.wordEnd) {
            res.add(word);
            // to avoid the duplicates
            // node.wordEnd = false; 
        }
        let str = row + "," + col;
        visit.add(str);
        // we will visit all neightbors
        dfs(row, col - 1, node, word)
        dfs(row, col + 1, node, word)
        dfs(row - 1, col, node, word)
        dfs(row + 1, col, node, word)
        visit.delete(str);
    }

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            dfs(row, col, wordDictionary.root, "")
        }
    }

    return [...res];
};

let board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"];
let board1 = [["a","b"],["c","d"]], words1 = ["abcb"];
console.log(findWords(board, words));
console.log(findWords(board1, words1));