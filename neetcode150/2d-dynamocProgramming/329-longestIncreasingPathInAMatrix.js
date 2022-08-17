// 329. Longest Increasing Path in a Matrix
// Given an m x n integers matrix, return the length of the longest increasing path in matrix.
// From each cell, you can either move in four directions: left, right, up, or down. You may not move diagonally or move outside the boundary (i.e., wrap-around is not allowed).


/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let res = 0;
    // we don't need path as a set, because we need to find
    // an increasing path, else it can't go back to the previous value
    // let path = new Set();
    let dp = new Map();
    let backtracking = function(row, col, preVal) {
        if (row < 0 || row == matrix.length || 
            col < 0 || col == matrix[0].length || 
            matrix[row][col] <= preVal) 
            return 0;
        let str = row + "," + col;
        // it should be wrote after the check of the condition
        // because we need to check if matrix[row][col] <= preVal
        if (dp.has(str)) return dp.get(str);
        let a = backtracking(row + 1, col, matrix[row][col]);
        let b = backtracking(row - 1, col, matrix[row][col]);
        let c = backtracking(row, col - 1, matrix[row][col]);
        let d = backtracking(row, col + 1, matrix[row][col]);
        let maxVal = Math.max(a, b, c, d) + 1;
        dp.set(str, maxVal);
        return maxVal;
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            res = Math.max(res, backtracking(row, col, -1));
        }
    }
    return res;
};

let matrix = [[9,9,4],[6,6,8],[2,1,1]];
let matrix1 = [[3,4,5],[3,2,6],[2,2,1]];
let matrix2 = [[1]];
console.log(longestIncreasingPath(matrix));
console.log(longestIncreasingPath(matrix1));
console.log(longestIncreasingPath(matrix2));
