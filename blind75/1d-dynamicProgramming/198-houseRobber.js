// 198. House Robber
// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    // 相当于是想象出来的两间不真实的房间
    // 因为观察状态转移方程可以看出dp[i]和dp[i-2]和dp[i-1]也就是i前两个值
    // 偷第n个房能获得的最大收益是 (偷第n个房 + 偷第n-2个房的最大收益) 和 (不偷第n个房 然后 偷第n-1个房的最大收益)的最大值
    // rob2 为第n-2房的收益 rob1 为第n-1个房的收益
    let rob2 = 0,
        rob1 = 0;
    let res = 0;
    for (let num of nums) {
        res = Math.max(rob1, rob2 + num);
        rob2 = rob1;
        rob1 = res;
    }
    return res
};

// 状态转移方程
// dp[i] = max(nums[i] + dp[i - 2], dp[i - 1])

// var rob = function(nums) {
//     if (nums.length === 1) return nums[0];
//     if (nums.length === 2) return Math.max(nums[0], nums[1]);
//     let len = parseInt(nums.length);
//     let dp = new Array(len);
//     dp[0] = nums[0];
//     dp[1] = Math.max(nums[0], nums[1])
//     for (let i = 2; i < nums.length; i++) {
//         dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
//     }

//     return dp[len - 1];
// };



let nums = [1,2,3,1];
let nums1 = [2,7,9,3,1];
let nums2 = [4,1,2];
console.log(rob(nums));
console.log(rob(nums1));
console.log(rob(nums2));