// 300. Longest Increasing Subsequence
// Given an integer array nums, return the length of the longest strictly increasing subsequence.
// A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = nums.length;
    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = 1;
    }
    for (let i = len - 1; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] < nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    return Math.max(...dp)
};
/*
         index: 0  1  2  3 
比如说我们有个数组[1, 2, 4, 3],
这道题的问题是在找最大的单调递增序列
这道题的关键是从后往前推导，
dp[i]则为包括第i个值 从i到结尾，最大单调递增序列的长度。
因为需要包括第i个值，所以我们可以得出这个第i值相当于是这个最大单调递增序列的最小值。

比如说上面这个例子 
dp[3] 则为从第3位到末尾数据的最大单调递增序列的长度，
因为它已经是末尾了，所以dp[3] = 1
dp[2] 则为从第2位到末尾数据的最大单调递增序列的长度，
这个计算方法为比较 nums[2] ? nums[3]
如果nums[2] < nums[3] 证明这个nums[2] 可以直接加到这个单调递增序列中 dp[2] = dp[3] + 1
不然 这个nums[2]就不能加入到这个单调递增序列 dp[2] = 1

推广开来
j = i+1 ... n
dp[i] 用nums[i]和从第i+1个值开始比较
dp[i] 全部赋值为1
dp[i] = max(dp[i], 1 + dp[j]) if nums[i] < nums[j]
*/



let nums = [10,9,2,5,3,7,101,18];
let nums1 = [0,1,0,3,2,3];
let nums2 = [7,7,7,7,7,7,7];
console.log(lengthOfLIS(nums));
console.log(lengthOfLIS(nums1));
console.log(lengthOfLIS(nums2));