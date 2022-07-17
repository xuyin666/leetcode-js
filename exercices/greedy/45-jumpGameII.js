// 45. Jump Game II
// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
// Each element in the array represents your maximum jump length at that position.
// Your goal is to reach the last index in the minimum number of jumps.
// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // res 代表所需的最少步数
    let res = 0;

    // l, r代表树的左右枝，最开始我们从第一个index出发
    let l = 0,
        r = 0;

    // 如果 r 等于或者大于 nums.length - 1 证明超过了右边界包括了最后一个index
    // 证明我们达到了最后一个index
    while (r < nums.length - 1) {
        // farthest得清零，因为每次到下一层树都不一样，最远距离也不一样
        let farthest = 0;
        for (let i = l; i <= r; i++)
            farthest = Math.max(farthest, i + nums[i])
        // i + nums[i]证明从这一点出发能到达的最远距离
        l = r + 1;
        r = farthest;
        res = res + 1
    }
    return res;
};


let nums = [2,3,1,1,4]
console.log(jump(nums));