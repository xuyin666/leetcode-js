// 253 Meeting Rooms II 

// 给你一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，返回 所需会议室的最小数量 。

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let count = 0;
    let res = 0;
    let starts = [];
    let ends = [];
    for(let i = 0; i < intervals.length; i++) {
        starts.push(intervals[i][0]);
        ends.push(intervals[i][1]);
    }
    starts.sort((a, b) => {
        return a - b;
    });
    ends.sort((a, b) => {
        return a - b;
    });
    let start = 0;
    let end = 0;
    // 当starts[start] === ends[end] 是可以当作此时是不需要会议室的
    // 用来理解这个edge case
    while (start < starts.length) {
        if (starts[start] < ends[end]) {
            count++;
            start++;
        } else {
            end++;
            count--;
        }
        res = Math.max(res, count);
    }
    return res;
};

// 这道题思路是需要把interval的第一个值，和第二个值分别聚集起来 作为数组starts，ends
// 然后排序
// 接着循环 starts 的数组
// 如果starts[start] < ends[end] 则证明有一个新的会议开始了
// 不然则代表一个会议结束了

let intervals = [[0,30],[5,10],[15,20]];
let intervals1 = [[7,10],[2,4]];
console.log(minMeetingRooms(intervals));
console.log(minMeetingRooms(intervals1));