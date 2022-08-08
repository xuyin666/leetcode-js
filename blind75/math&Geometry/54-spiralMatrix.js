// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let left = 0;
    let right = matrix[0].length - 1;
    let top = 0;
    let bottom = matrix.length - 1;
    let res = [];
    while (left <= right && top <= bottom) {
        // we will try to iterate throught the first row
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        }
        top++;
        // we will try to iterate throught the last column
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        }
        right--;
        // if (!(left <= right && top <= bottom))
        if (left > right || top > bottom)
            break;
        // we will try to iterate throught the last row
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        }
        bottom--;
        // we will try to iterate throught the first column
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        }
        left++;
    }
    return res;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let matrix1 = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
console.log(spiralOrder(matrix1));
