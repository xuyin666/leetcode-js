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
    
};

let numCourses = 2, prerequisites = [[1,0]];
let numCourses1 = 2, prerequisites1 = [[1,0],[0,1]];
console.log(canFinish(numCourses, prerequisites));
console.log(canFinish(numCourses1, prerequisites1));
