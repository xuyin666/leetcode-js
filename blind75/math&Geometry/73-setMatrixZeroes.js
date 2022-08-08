// 73. Set Matrix Zeroes
// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
// You must do it in place.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rowZero = false;
    let rowLen = matrix.length;
    let columnLen = matrix[0].length;
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < columnLen; col++) {
            if (matrix[row][col] === 0) {
                if (row > 0) {
                    matrix[row][0] = 0;
                } else {
                    rowZero = true;
                }
                matrix[0][col] = 0;
            }
        }
    }
    // we will treat the column and the row 
    // except the first line and the first column
    for (let row = 1; row < rowLen; row++) {
        for (let col = 1; col < columnLen; col++) {
            if (matrix[row][0] === 0 || matrix[0][col] === 0)
                matrix[row][col] = 0;
        }
    }
    // for the first column
    for (let row = 0; row < rowLen; row++) {
        if (matrix[0][0] === 0) {
            matrix[row][0] = 0;
        }
    }
    // for the first row 
    for (let col = 0; col < columnLen; col++) {
        if (rowZero === true) {
            matrix[0][col] = 0;
        }
    }
    return matrix;
};

let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(setZeroes(matrix));
console.log(setZeroes(matrix1));
