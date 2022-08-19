// 剑指 Offer 12. 矩阵中的路径
// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。


/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rowLen = board.length;
    let colLen = board[0].length;
    let path = new Set();
    let dfs = function(row, col, index) {
        if (index === word.length) return true;
        let str = row + "," + col;
        if (row < 0 || row >= rowLen ||
            col < 0 || col >= colLen ||
            path.has(str))
            return false;
        if (word.charAt(index) !== board[row][col]) return false;
        path.add(str);
        
        let res = dfs(row + 1, col, index + 1) ||
                    dfs(row - 1, col, index + 1) ||
                    dfs(row, col + 1, index + 1) ||
                    dfs(row, col - 1, index + 1);
        path.delete(str);
        return res;
    }


    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (dfs(row, col, 0)) return true;
        }
    }
    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
let board1 = [["a","b"],["c","d"]], word1 = "abcd";
console.log(exist(board, word));
console.log(exist(board1, word1));
