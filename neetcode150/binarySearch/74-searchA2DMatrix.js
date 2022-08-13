// 74. Search a 2D Matrix
// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
};

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
let matrix1 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target1 = 13;
console.log(searchMatrix(matrix, target));
console.log(searchMatrix(matrix1, target1));
