// 323 Number Of Connected Components In Graph
// 你有一个包含 n 个节点的图。给定一个整数 n 和一个数组 edges ，其中 edges[i] = [ai, bi] 表示图中 ai 和 bi 之间有一条边。
// 返回 图中已连接分量的数目 。

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// union and find
var countComponents = function(n, edges) {
    let par = [];
    let rank = [];
    for (let i = 0; i < n; i++) {
        par[i] = i;
        rank[i] = 1;
    }
    
    // this function let us find the racine node
    let find = function(node1) {
        let curr = node1;
        // by defaut the node should be its parent itself
        while(curr !== par[curr])  {
            // to optimise the speed to find the root node
            par[curr] = par[par[curr]];
            curr = par[curr]
        }
        return curr;
    }

    let union = function(node1, node2) {
        let par1 = find(node1);
        let par2 = find(node2);
        // it means that node1 and node2 have the same parent 
        if (par1 === par2) 
            return 0;
        // we will add the root of the node2 to the root of the node1
        if (rank[par1] > rank[par2]){
            rank[par1] = rank[par1] + rank[par2];
            par[par2] = par1;
        } else {
            rank[par2] = rank[par1] + rank[par2];
            par[par1] = par2;
        }
        return 1;
    }

    let res = n;

    for(let i = 0; i < edges.length; i++)
        res = res - union(edges[i][0], edges[i][1]);

    return res;
}
// union and find,
// 有两个数组一个是parent, 记录着当前数字的父母
// 另一个记录着这个的儿子rank


//dfs
// var countComponents = function(n, edges) {
//     let hashMap = new Map();
//     // 因为这个是无方向的graph
//     for (let i = 0; i < edges.length; i++) {
//         if (!hashMap.has(edges[i][0])) {
//             hashMap.set(edges[i][0], [edges[i][1]]);
//         } else {
//             let arr = hashMap.get(edges[i][0]);
//             arr.push(edges[i][1])
//             hashMap.set(edges[i][0], arr);
//         }
//         if (!hashMap.has(edges[i][1])) {
//             hashMap.set(edges[i][1], [edges[i][0]]);
//         } else {
//             let arr = hashMap.get(edges[i][1]);
//             arr.push(edges[i][0])
//             hashMap.set(edges[i][1], arr);
//         }
//     }
//     let visit = new Set();
//     let res = 0;
//     let dfs = function(index) {
//         if (visit.has(index)) return;
//         // it means that index doesn't have a child
//         if (hashMap.get(index) === undefined) return;
//         visit.add(index);
//         let arr = hashMap.get(index);
//         for (let i = 0; i < arr.length; i++) {
//             dfs(arr[i]);
//         }
//     };
//     for (let i = 0; i < n; i++) {
//         if (!visit.has(i)) {
//             dfs(i);
//             res++;
//         }
//     }
//     return res;
// };

let n = 5, edges = [[0, 1], [1, 2], [3, 4]];
let n1 = 5, edges1 = [[0,1], [1,2], [2,3], [3,4]];
console.log(countComponents(n, edges));
console.log(countComponents(n1, edges1));
