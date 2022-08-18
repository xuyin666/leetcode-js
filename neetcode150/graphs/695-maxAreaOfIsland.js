// 695. Max Area of Island
// You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
// The area of an island is the number of cells with a value 1 in the island.
// Return the maximum area of an island in grid. If there is no island, return 0.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let path = new Set();
    let res = 0;
    let dfs = function(row, col) {
        if (row < 0 || row >= grid.length ||
            col < 0 || col >= grid[0].length)
            return 0;
        if (grid[row][col] === 0) return 0;
        let str = row + "," + col;
        if (path.has(str)) return 0;
        path.add(str);
        let total = 1 + dfs(row - 1, col) +
                    dfs(row + 1, col) +
                    dfs(row, col + 1) +
                    dfs(row, col - 1)
        return total;
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            res = Math.max(res, dfs(i, j));
        }
    }

    return res;
};

let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];
let grid1 = [[0,0,0,0,0,0,0,0]];
console.log(maxAreaOfIsland(grid));
console.log(maxAreaOfIsland(grid1));