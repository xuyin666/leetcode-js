// 210. Course Schedule II
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.
// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let hashMap = new Map();
    for (let i = 0; i < prerequisites.length; i++) {
        if (!hashMap.has(prerequisites[i][0])) {
            let arr = [];
            arr.push(prerequisites[i][1]);
            hashMap.set(prerequisites[i][0], arr);
        } else {
            let arr = hashMap.get(prerequisites[i][0]);
            arr.push(prerequisites[i][1]);
            hashMap.set(prerequisites[i][0], arr);
        }
    }
    let visited = new Set(), cycle = new Set();
    let output = [];
    let dfs = function(index) {
        if (cycle.has(index)) return false;
        if (visited.has(index)) return true;
        cycle.add(index);
        let adjacents = hashMap.get(index);
        if (adjacents !== undefined) {
            for(let i = 0; i < adjacents.length; i++) {
                if (!dfs(adjacents[i])) 
                    return false;
            }
        }
        output.push(index);
        cycle.delete(index);
        visited.add(index);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) 
            return [];
    }
    return output;
};

let numCourses = 2, prerequisites = [[1,0]];
let numCourses1 = 4, prerequisites1 = [[1,0],[2,0],[3,1],[3,2]];
let numCourses2 = 1, prerequisites2 = [];
console.log(findOrder(numCourses, prerequisites));
console.log(findOrder(numCourses1, prerequisites1));
console.log(findOrder(numCourses2, prerequisites2));
