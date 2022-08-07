// 51. N-Queens
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.
// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    let board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');;
    }
    let colSet = new Set();
    let posDia = new Set();
    let negDia = new Set();
    let dfs = function(row) {
        if (row === n) {
            let copyBoard = [...board]
            for (let i = 0; i < n; i++) {
                copyBoard[i] = copyBoard[i].join('');
            }
            res.push(copyBoard);
            return;
        }
        // to put a queen in a col
        for (let col = 0; col < n; col++) {
            if (colSet.has(col) || posDia.has(col + row) 
                || negDia.has(col - row))
                continue;

            // we will take this col because it is OK in row, col, posDia, negDia
            colSet.add(col);
            posDia.add(col + row);
            negDia.add(col - row);
            board[row][col] = 'Q'
            dfs(row + 1);
            // clean up 
            board[row][col] = '.'
            colSet.delete(col);
            posDia.delete(col + row);
            negDia.delete(col - row);
        }
    }
    dfs(0);
    return res;
};

// 写一个dfs函数， 根据row来看
// 然后弄三个set posDia (row + col === constant), NegDig (col - row = constant)
// backtracking

let n = 4;
let n1 = 1;
console.log(solveNQueens(n));
console.log(solveNQueens(n1));
