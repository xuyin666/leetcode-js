// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    let len = parseInt(nums.length);
    let dp = new Array(len);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }
    return Math.max(...dp);
};

// 状态转移方程
// dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

let nums = [1,2,3,1];
let nums1 = [2,7,9,3,1];
let nums2 = [4,1,2];
console.log(rob(nums));
console.log(rob(nums1));
console.log(rob(nums2));