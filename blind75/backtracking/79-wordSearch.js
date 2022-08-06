// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let rowLength = board.length;
    let colLength = board[0].length;
    let path = new Set();

    let dfs = function(row, col, index) {
        if (index === word.length)
            return true;

        let rowcol = row + "," + col;
        if (col < 0 || col >= colLength || 
            row < 0 || row >= rowLength ||
            board[row][col] !== word.charAt(index) ||
            path.has(rowcol)) 
            return false;
        
        path.add(rowcol);
        let res = dfs(row + 1, col, index + 1) ||
                    dfs(row - 1, col, index + 1) ||
                    dfs(row, col + 1, index + 1) || 
                    dfs(row, col - 1, index + 1);
        // dfs(1, 1) call dfs(1, 2), dfs(1, 0), dfs(0, 1), dfs(2, 1)
        // 如果第一个1, 2加到path中并且没有删除的话 dfs(1, 0)则就被影响到了
        // 所以理论上来说 应该用完就删掉
        // path means that the position we are visting
        path.delete(rowcol);
        return res;
    }
    for(let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (dfs(i, j, 0)) 
                return true;
        }
    }
    return false;
};

// 这道题思路是设计一个dfs函数，看在i，j这个点开始是否能拼成word这个值
// 需要用一个set，来保留已经走过的路
// 然后再遍历board中每个i，j看看是否有返回为真的值

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED";
let board1 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word1 = "SEE";
let board2 = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word2 = "ABCB";
console.log(exist(board, word));
console.log(exist(board1, word1));
console.log(exist(board2, word2));
