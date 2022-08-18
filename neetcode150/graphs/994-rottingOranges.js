// 994. Rotting Oranges
// You are given an m x n grid where each cell can have one of three values:
// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    
};

let grid = [[2,1,1],[1,1,0],[0,1,1]];
let grid1 = [[2,1,1],[0,1,1],[1,0,1]];
let grid2 = [[0,2]];
console.log(orangesRotting(grid));
console.log(orangesRotting(grid1));
console.log(orangesRotting(grid2));


