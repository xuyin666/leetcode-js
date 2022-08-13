// 36. Valid Sudoku
// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:
// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = new Map();
    let colMap = new Map();
    let cellMap = new Map();
    for (let i = 0; i < 9; i++) {
        rowMap.set(i, new Set());
        colMap.set(i, new Set());
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let str = i + "," + j;
            cellMap.set(str, new Set());
        }
    }
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === ".") {
                continue;
            }
            let subBox = Math.floor(row / 3) + "," + Math.floor(col / 3);
            if (rowMap.get(row).has(board[row][col]) ||
                colMap.get(col).has(board[row][col]) ||
                cellMap.get(subBox).has(board[row][col])) { 
                return false;
            }
            rowMap.get(row).add(board[row][col]);
            colMap.get(col).add(board[row][col]);
            cellMap.get(subBox).add(board[row][col]);
        }
    }
    return true;
}

// var isValidSudoku = function(board) {
//     // 我的思路是 每一个cell，我都去验证在对应的set是否存在，如果存在，则证明这不是有效的数独
//     let rowValid = function(row, column) {
//         let rowSet = new Set();
//         for (let i = 0; i < 9; i++) {
//             if (i === column || board[row][i] === '.')
//                 continue;
//             rowSet.add(board[row][i])
//         }

//         return !rowSet.has(board[row][column]);
//     }

//     let columnValid = function(row, column) {
//         let columnSet = new Set();
//         for (let i = 0; i < 9; i++) {
//             if (i === row || board[i][column] === '.')
//                 continue;
//             columnSet.add(board[i][column]);
//         }
//         return !columnSet.has(board[row][column]);
//     }

//     let subBoxValid = function(row, column) {
//         let subBoxSet = new Set(); 
//         let rowNb = Math.floor(row / 3);
//         let columnNb = Math.floor(column / 3);
//         for (let i = rowNb * 3; i < (rowNb + 1) * 3; i++) {
//             for (let j = columnNb * 3; j < (columnNb + 1) * 3; j++) {
//                 if ((i === row && j === column) || board[i][j] === ".") {
//                     continue;
//                 }
//                 subBoxSet.add(board[i][j]);
//             }
//         }
//         return !subBoxSet.has(board[row][column]);
//     }

//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             if (!rowValid(i, j) || !columnValid(i, j) || !subBoxValid(i, j)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// };

let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board1 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

console.log(isValidSudoku(board));
console.log(isValidSudoku(board1));
