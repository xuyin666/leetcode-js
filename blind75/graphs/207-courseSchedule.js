// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
 var canFinish = function(numCourses, prerequisites) {
    let hashMap = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        if (!hashMap.has(prerequisites[i][0])) {
            let arr = [];
            arr.push(prerequisites[i][1]);
            hashMap.set(prerequisites[i][0], arr);
        } else {
            let arr = hashMap.get(prerequisites[i][0]);
            arr.push(prerequisites[i][1])
            hashMap.set(prerequisites[i][0], arr);
        }
    }

    // we will use a set() named cycle to catch the node we are visiting
    // we will use a set() named visited to catch the node that we have visited
    let cycle = new Set();
    let visited = new Set();
    let dfs = function(index) {
        if (cycle.has(index)) {
            return false;
        }
        if (visited.has(index)) {
            return true;
        }
        // it means all the neightbour nodes
        let adjents = hashMap.get(index)
        cycle.add(index);
        if (adjents !== undefined) {
            for (let i = 0; i < adjents.length; i++) {
                if (!dfs(adjents[i])) 
                    return false;
            }
        }
        cycle.delete(index); // it means we finished being the node
        visited.add(index); // it menas that we have finished visiting the node
        return true;
    }
    for (let i = 0; i < prerequisites.length; i++) {
        if (!dfs(prerequisites[i][0]))
            return false;
    }
    return true;
};

// var canFinish = function(numCourses, prerequisites) {
//     let hashMap = new Map();
//     for (let i = 0; i < prerequisites.length; i++) {
//         if (!hashMap.has(prerequisites[i][0])) {
//             hashMap.set(prerequisites[i][0], [prerequisites[i][1]])
//         } else {
//             let arr = hashMap.get(prerequisites[i][0]);
//             arr.push(prerequisites[i][1]);
//             hashMap.set(prerequisites[i][0], arr)
//         }
//     }
//     let visit = new Set();

//     let dfs = function(index) {
//         // it means that there is a loop
//         // 当前这个branch经过了这个index
//         if (visit.has(index)) {
//             return false;
//         }
//         // it means that we arrive in the leave (which doesn't have a child node)
//         if (hashMap.get(index) === undefined) 
//             return true;

//         visit.add(index);
//         let arr = hashMap.get(index) 
//         let res = true;
//         // 结果有一个false就都得为false
//         for (let i = 0; i < arr.length; i++) {
//             res = res && dfs(arr[i]);
//         }
//         hashMap.delete(index);
//         visit.delete(index);
//         return res;
//     }


//     for (let i = 0; i < numCourses; i++) {
//         if (!dfs(i))
//             return false;
//     }
//     return true;
// };

let numCourses = 3, prerequisites = [[1,0],[1,2],[0,1]];
let numCourses1 = 2, prerequisites1 = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses1, prerequisites1));
