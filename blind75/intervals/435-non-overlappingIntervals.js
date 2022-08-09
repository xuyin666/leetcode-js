// 435. Non-overlapping Intervals
// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // 对于interval的问题，一般都要先排序下
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let res = 0;
    let preEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        // it means that we have overlapping between two intervals
        // we need to remove the interval who end laterx
        if (preEnd > intervals[i][0]) {
            res++;
            preEnd = Math.min(intervals[i][1], preEnd);
        } else {
            // when there is not a overlapping
            preEnd = intervals[i][1];
        }
    }
    return res;
};

let intervals = [[1,2],[2,3],[3,4],[1,3]];
let intervals1 = [[1,2],[1,2],[1,2]];
let intervals2 = [[1,2],[2,3]];
console.log(eraseOverlapIntervals(intervals));
console.log(eraseOverlapIntervals(intervals1));
console.log(eraseOverlapIntervals(intervals2));

