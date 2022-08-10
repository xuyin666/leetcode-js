// 261 Graph Valid Tree
// 给定编号从 0 到 n - 1 的 n 个结点。给定一个整数 n 和一个 edges 列表，其中 edges[i] = [ai, bi] 表示图中节点 ai 和 bi 之间存在一条无向边。
// 如果这些边能够形成一个合法有效的树结构，则返回 true ，否则返回 false 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
// var validTree = function(n, edges) {
//     let graph = new Map();
//     for (let i = 0; i < edges.length; i++) {
//         if (!graph.has(edges[i][0])) {
//             graph.set(edges[i][0], [edges[i][1]]);
//         } else {
//             let arr = graph.get(edges[i][0]);
//             arr.push(edges[i][1]);
//             graph.set(edges[i][0], arr);
//         }
//         if (!graph.has(edges[i][1])) {
//             graph.set(edges[i][1], [edges[i][0]]);
//         } else {
//             let arr = graph.get(edges[i][1]);
//             arr.push(edges[i][0]);
//             graph.set(edges[i][1], arr);
//         }
//     }
//     let visit = new Set();

//     let dfs = function(index, prev) {
//         // there is a circle
//         if (visit.has(index)) return false;

//         visit.add(index);
//         let arr = graph.get(index);
//         for (let i = 0; i < arr?.length; i++) {
//             if (prev !== arr[i])
//                 if (!dfs(arr[i], index))
//                     return false
//         }
//         return true;
//     }
//     return dfs(0, -1) && visit.size === n;
// };


var validTree = function(n, edges) {
    let graph = new Map();
    for (let i = 0; i < edges.length; i++) {
        if (!graph.has(edges[i][0])) {
            graph.set(edges[i][0], [edges[i][1]]);
        } else {
            let arr = graph.get(edges[i][0]);
            arr.push(edges[i][1]);
            graph.set(edges[i][0], arr);
        }
        if (!graph.has(edges[i][1])) {
            graph.set(edges[i][1], [edges[i][0]]);
        } else {
            let arr = graph.get(edges[i][1]);
            arr.push(edges[i][0]);
            graph.set(edges[i][1], arr);
        }
    }
    let visit = new Set();

    let dfs = function(index, prev) {
        // there is a circle
        if (visit.has(index)) return false;
        visit.add(index);
        let arr = graph.get(index);
        if (arr === undefined) return true;
        for (let i = 0; i < arr.length; i++) {
            if (prev !== arr[i])
                if(!dfs(arr[i], index))
                    return false;
        }
        // visit.delete(index); 不能从这个visit中删除index，因为这记录着所有被visit的树
        return true;
    }
    return dfs(0, -1) && visit.size === n;
};

let n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
let n1 = 5, edges1 = [[0,1],[1,2],[2,3],[1,3],[1,4]];
let n2 = 4, edges2 = [[0,1],[2,3]];
console.log(validTree(n, edges)); // true
console.log(validTree(n1, edges1)); // false
console.log(validTree(n2, edges2)); // false