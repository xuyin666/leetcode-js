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
    
};

let numCourses = 2, prerequisites = [[1,0]];
let numCourses1 = 4, prerequisites1 = [[1,0],[2,0],[3,1],[3,2]];
let numCourses2 = 1, prerequisites2 = [];
console.log(findOrder(numCourses, prerequisites));
console.log(findOrder(numCourses1, prerequisites1));
console.log(findOrder(numCourses2, prerequisites2));
