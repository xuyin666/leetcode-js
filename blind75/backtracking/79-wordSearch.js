// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
let board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 = "SEE";
let board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word2 = "ABCB";
console.log(exist(board, word));
console.log(exist(board1, word1));
console.log(exist(board2, word2));
