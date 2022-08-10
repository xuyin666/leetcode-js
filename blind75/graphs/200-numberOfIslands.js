// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {

    let bfs = function(row, col) {
        let queue = [];
        queue.push(row+","+col);
        visitSet.add(row+","+col)
        while(queue.length !== 0) {
            let lastElem = queue.shift();
            let r = parseInt(lastElem.split(',')[0]);
            let c = parseInt(lastElem.split(',')[1]);
            let arr = getValidNeightbor(r, c);
            for (let i = 0; i < arr.length; i++) {
                // if we have viste the element , we will pass;
                if (!visitSet.has(arr[i])) {
                    visitSet.add(arr[i]);
                    queue.push(arr[i]);
                }
            }
        }
    }

    let getValidNeightbor = function(row, col) {
        // we will get the neightbhour of the row,col
        // the neightbor should be "1"
        let arr = [];
        if (row - 1 >= 0 && 
            row - 1 < rowLen && 
            col >= 0 && 
            col < colLen && grid[row - 1][col] === "1") {
            let newrow = row - 1;
            arr.push(newrow + "," + col);
        }
        if (row + 1 >= 0 && 
            row + 1 < rowLen && 
            col >= 0 && 
            col < colLen && grid[row + 1][col] === "1") {
            let newrow = row + 1;
            arr.push(newrow + "," + col);
        }
        if (row >= 0 && 
            row < rowLen && 
            col - 1 >= 0 && 
            col - 1 < colLen && grid[row][col - 1] === "1") {
            let newcol = col - 1;
            arr.push(row + "," + newcol);
        }
        if (row >= 0 && 
            row < rowLen && 
            col + 1 >= 0 && 
            col + 1 < colLen && grid[row][col + 1] === "1") {
            let newcol = col + 1
            arr.push(row + "," + newcol);
        }
        return arr;
    }

    let rowLen = grid.length;
    let colLen = grid[0].length;
    let visitSet = new Set(); // the island that we have visted 
    let res = 0;
    
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (grid[row][col] === "1" && !visitSet.has(row + "," + col)) {
                    bfs(row, col);
                    res++;
            }
        }
    }
    return res;
};


// 这道题思路是用BFS来标记已经浏览过的node


let grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
];

let grid1 = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
];

console.log(numIslands(grid));
console.log(numIslands(grid1));
