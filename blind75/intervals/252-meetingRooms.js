// 252 Meeting Rooms
// 给定一个会议时间安排的数组 intervals ，每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，请你判断一个人是否能够参加这里面的全部会议。

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (intervals.length === 0) return true;
    intervals.sort((a, b) => {
        return a[0] - b[0];
    })
    let preEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (preEnd > intervals[i][0]) 
            return false;
        else 
            preEnd = intervals[i][1];
    }
    return true;
};


let intervals = [[0,30],[5,10],[15,20]];
let intervals1 = [[7,10],[2,4]];
console.log(canAttendMeetings(intervals));
console.log(canAttendMeetings(intervals1));