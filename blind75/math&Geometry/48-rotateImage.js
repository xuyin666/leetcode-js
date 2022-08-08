// 48. Rotate Image
// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let left = 0;
    let right = matrix.length - 1;
    while (left < right) {
        // iterate throught the entire row except the last element
        for (let i = 0; i < right - left; i++) {
            let top = left;
            let bottom = right;

            let topLeft = matrix[top][left + i];

            matrix[top][left + i] = matrix[bottom - i][left];

            matrix[bottom - i][left] = matrix[bottom][right - i];

            matrix[bottom][right - i] = matrix[top + i][right];

            matrix[top + i][right] = topLeft;
        }
        left++;
        right--;
    }
    return matrix;
};

// 可以画个图 4*4 最左边为left，最右边为right
// 最上边为top 最下边为bottom
let matrix = [[1,2,3],[4,5,6],[7,8,9]];
let matrix1 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];
console.log(rotate(matrix));
console.log(rotate(matrix1));
