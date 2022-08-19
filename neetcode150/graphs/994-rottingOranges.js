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
    // 用bfs mutlisource bfs
    // 得检查有多少个新鲜橘子
    // 如果没有新鲜橘子 就可以停了
    let rowLen = grid.length;
    let colLen = grid[0].length;
    let fresh = 0;
    let rotten = [];
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === 1)
                fresh = fresh + 1;
            if (grid[row][col] === 2)
                rotten.push([row, col])
        }
    }
    let res = 0;
    while (rotten.length > 0 && fresh > 0) {
        let lenRotten = rotten.length;
        for (let i = 0; i < lenRotten; i++) {
            let rotOrange = rotten.shift();
            let row = rotOrange[0];
            let col = rotOrange[1];
            if (row + 1 < rowLen && grid[row + 1][col] === 1) {
                grid[row + 1][col] = 2;
                rotten.push([row + 1, col]);
                fresh = fresh - 1;
            }
            if (row - 1 >= 0 && grid[row - 1][col] === 1) {
                grid[row - 1][col] = 2;
                rotten.push([row - 1, col]);
                fresh = fresh - 1;
            }
            if (col + 1 < colLen && grid[row][col + 1] === 1) {
                grid[row][col + 1] = 2;
                rotten.push([row, col + 1]);
                fresh = fresh - 1;
            }
            if (col - 1 >= 0 && grid[row][col - 1] === 1) {
                grid[row][col - 1] = 2;
                rotten.push([row, col - 1]);
                fresh = fresh - 1;
            }
        }
        res = res + 1;
    }
    if (fresh === 0)
        return res;
    else 
        return -1;
};

let grid = [[2,1,1],[1,1,0],[0,1,1]];
let grid1 = [[2,1,1],[0,1,1],[1,0,1]];
let grid2 = [[0,2]];
console.log(orangesRotting(grid));
console.log(orangesRotting(grid1));
console.log(orangesRotting(grid2));


