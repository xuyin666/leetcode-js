// 417. Pacific Atlantic Water Flow
// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.
// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).
// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.
// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let pacSet = new Set();
    let atlSet = new Set();
    let rowLen = heights.length;
    let colLen = heights[0].length;

    // prePos means the previous position, we need it to compare with the actual pos
    let dfs = function(row, col, oneSet, prePos) {
        if (row < 0 || row >= rowLen ||
            col < 0 || col >= colLen ||
            oneSet.has(row + "," + col) ||
            heights[row][col] < prePos) {
            return;
        }
        oneSet.add(row+","+col);
        dfs(row - 1, col, oneSet, heights[row][col]);
        dfs(row + 1, col, oneSet, heights[row][col]);
        dfs(row, col - 1, oneSet, heights[row][col]);
        dfs(row, col + 1, oneSet, heights[row][col]);
    }
    

    for (let col = 0; col < colLen; col++) {
        // pacific first row
        dfs(0, col, pacSet, heights[0][col]);
        // atlantic last row
        dfs(rowLen - 1, col, atlSet, heights[rowLen - 1][col]);
    }
    
    for (let row = 0; row < rowLen; row++) {
        // pacific first column
        dfs(row, 0, pacSet, heights[row][0]);
        // atlantic last column
        dfs(row, colLen - 1, atlSet, heights[row][colLen - 1]);
    } 


    let res = [];
    pacSet.forEach(element => {
        if (atlSet.has(element)) {
            let row = parseInt(element.split(',')[0])
            let col = parseInt(element.split(',')[1])
            res.push([row, col]);
        }
    });
    return res;
};
let heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]];
let heights1 = [[2,1],[1,2]];


// 这道题我们用dfs，然后从第一排往下推看看能够到达哪里
// 我们再从最后一排往上推看看能够到达哪里，交界处则是满足条件的index
// 同理 我们需要从最左边往右推或者从最右边往左推


console.log(pacificAtlantic(heights));
console.log(pacificAtlantic(heights1));
