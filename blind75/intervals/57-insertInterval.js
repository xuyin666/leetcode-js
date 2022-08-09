// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.
// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let res = [];
    for (let i = 0; i < intervals.length; i++) {
        // the overlapping is finished form here
        if (newInterval[1] < intervals[i][0]) {
            res.push(newInterval);
            for (let j = i; j < intervals.length; j++) {
                res.push(intervals[j])
            }
            return res;
        } else {
            if (newInterval[0] <= intervals[i][1]) {
                newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
                newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
            } else {
                // 如果当前数组的最大值比新interval的最小值小，就证明他们不相交
                res.push(intervals[i])
            }
        }
    }
    // 有可能newInterval没有被push到数组里面然后就出来了
    res.push(newInterval);
    return res;
};




let intervals = [[1,3],[6,9]], newInterval = [2,5];
let intervals1 = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval1 = [4,8];
console.log(insert(intervals, newInterval));
console.log(insert(intervals1, newInterval1));