// 53. Maximum Subarray
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let currSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // if currSum < 0, we will left the sum above because it will not help
        // to make the result bigger 
        if (currSum < 0) {
            currSum = 0;
        }
        // currSum means the maxSum till the index 
        currSum = currSum + nums[i];
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
};


// 这是我自己想出来的方法 很多可以优化的空间
// var maxSubArray = function(nums) {
//     let sum = new Array(nums.length).fill(nums[0]);
//     for (let i = 1; i < nums.length; i++) {
//         sum[i] = Math.max(sum[i - 1] + nums[i], nums[i])
//     }
//     return Math.max(...sum);
// };

let nums = [-2,1,-3,4,-1,2,1,-5,4];
let nums1 = [1];
let nums2 = [5,4,-1,7,8]
console.log(maxSubArray(nums));
console.log(maxSubArray(nums1));
console.log(maxSubArray(nums2));
