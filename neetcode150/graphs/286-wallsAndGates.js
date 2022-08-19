// 286. walls and gates
// 你被给定一个 m × n 的二维网格 rooms ，网格中有以下三种可能的初始化值：
// -1 表示墙或是障碍物
// 0 表示一扇门
// INF 无限表示一个空的房间。然后，我们用 231 - 1 = 2147483647 代表 INF。你可以认为通往门的距离总是小于 2147483647 的。
// 你要给每个空房间位上填上该房间到 最近门的距离 ，如果无法到达门，则填 INF 即可

/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
// 这道题也一样是用 bfs 以及 mutlisource
// 从门那里开始bfs
    let gate = [];
    let visit = new Set();
    let rowLen = rooms.length;
    let colLen = rooms[0].length;

    let addGate = function(row, col) {
        let str = row + "," + col;
        if (row < 0 || row >= rowLen ||
            col < 0 || col >= colLen ||
            rooms[row][col] === -1 ||
            visit.has(str)) {
            return;
        }
        gate.push([row, col])
        visit.add(str)
    }
    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (rooms[row][col] === 0) {
                let str = row + "," + col;
                gate.push([row, col]);
                visit.add(str);
            }
        }
    }


    let step = 0; 
    while (gate.length !== 0) {
        let len = gate.length;
        for (let i = 0; i < len; i++) {
            let arr = gate.shift();
            let row = arr[0], col = arr[1];
            rooms[row][col] = step;
            addGate(row + 1, col)
            addGate(row - 1, col)
            addGate(row, col + 1)
            addGate(row, col - 1)
        }
        step = step + 1;
    }
};

let rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
let rooms1 = [[-1]];
let rooms2 = [[2147483647]];
let rooms3 = [[0]];
console.log(wallsAndGates(rooms));
console.log(wallsAndGates(rooms1));
console.log(wallsAndGates(rooms2));
console.log(wallsAndGates(rooms3));
