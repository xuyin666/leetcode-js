// 213. House Robber II
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    else {
        let numsWithoutLastElem = nums.slice(0, -1);
        let numsWithoutFirstElem = nums.slice(1);
        return Math.max(helper(numsWithoutFirstElem), helper(numsWithoutLastElem));
    }
};

var helper = function (nums) {
    let rob1 = 0, // rob1 = dp[i-1]
        rob2 = 0; // rob2 = dp[i-2]
    let res = 0;
    for (let num of nums) {
        res = Math.max(rob1, rob2 + num);
        rob2 = rob1;
        rob1 = res;
    }
    return res;
}

// 这道题和之前的houseRobber几乎一样，但是这道题多了一个限制条件
// 这里的人住房是环形的，所以不能偷第一个和最后一个
// 思路是取 偷第一个房子的但不偷最后一个房子的最大值 和 不偷第一个房子但偷最后一个房子的最大值 的最大值
// 状态转移方程式 dp[i] 偷第i个房子的最大值
// dp[i] = max(dp[i-1], nums[i] + dp[i-2])

let nums = [2, 3, 2];
let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3];
console.log(rob(nums));
console.log(rob(nums1));
console.log(rob(nums2));