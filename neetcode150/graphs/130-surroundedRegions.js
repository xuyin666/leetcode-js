// 130. Surrounded Regions
// Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.
// A region is captured by flipping all 'O's into 'X's in that surrounded region.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let visit = new Set();
    let dfs = function(row, column) {
        if (row < 0 || row >= board.length ||
            column < 0 || column >= board[0].length ||
            board[row][column] === "X")
            return 0;
        let str = row + "," + column;
        if (visit.has(str)) return 0;
        visit.add(str);
        return dfs(row - 1, column) +
                dfs(row + 1, column) +
                dfs(row, column + 1) +
                dfs(row, column - 1);
    }
    for (let i = 0; i < board.length; i++) {
        // first column and last column
        dfs(i, 0)
        dfs(i, board[0].length - 1);
    }
    for (let i = 0; i < board[0].length; i++) {
        // first row and last row
        dfs(0, i);
        dfs(board.length - 1, i);
    }
    console.log(visit);
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let str = i + "," + j;
            if (board[i][j] === "X" || visit.has(str))
                continue;
            board[i][j] = "X"
        }
    }
};

// Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

// Input: board = [["X"]]
// Output: [["X"]]
