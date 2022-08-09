// 56. Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let left = intervals[0][0];
    let right = intervals[0][1];
    let res = [];
    for (let i = 1; i < intervals.length; i++) {
        if (right < intervals[i][0]) {
            res.push([left, right]);
            left = intervals[i][0];
            right = intervals[i][1];
        } else {
            left = Math.min(left, intervals[i][0]);
            right = Math.max(right, intervals[i][1]);
        }
    }
    res.push([left, right]);
    return res;
};

let intervals = [[1,3],[2,6],[8,10],[15,18]];
let intervals1 = [[1,4],[4,5]];
console.log(merge(intervals));
console.log(merge(intervals1));