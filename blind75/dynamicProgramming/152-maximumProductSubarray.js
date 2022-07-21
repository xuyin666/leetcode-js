// 152. Maximum Product Subarray
// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// The test cases are generated so that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let currMax = 1,
        currMin = 1; // 当前最大值和当前最小值，
    let res = Math.max(...nums) // 最大值如果没有任何乘积的话，就一定是数列的最大值
    for (let num of nums) {
        if (num === 0) {
            currMax = 1; // 如果num为0 我们希望让当前最大值为1，相当于重新初始化了
            currMin = 1; // 如果num为0 我们希望让当前最小值为1，相当于重新初始化了
            continue;
        }
        let tmp = currMax * num;
        currMax = Math.max(tmp, currMin * num, num); // 最大值和最小值 只有可能在 currMax * num，currMin * num和num中产生
        currMin = Math.min(tmp, currMin * num, num);
        res = Math.max(currMax, res); // 比较当前最大值和之前的最大值
    }
    return res;
};


// var maxProduct = function(nums) {
//     let len = nums.length;
//     if (len === 1) return nums[0];
//     let max = new Array(len);
//     let min = new Array(len);
//     max[0] = nums[0];
//     min[0] = nums[0];
//     for (let i = 1; i < len; i++) {
//         max[i] = Math.max(nums[i] * min[i - 1], nums[i] * max[i - 1], nums[i])
//         min[i] = Math.min(nums[i] * min[i - 1], nums[i] * max[i - 1], nums[i])
//     } 
//     return Math.max(...max);
// };
// 我的方法的思路就是 用两个数组max[i]和min[i]来记录从起始到i的最大值和最小值(包含i)
// max[i] 它的取值可能有三个可能，
// 第一它自己，第二nums[i] * min[i - 1](当nums[i]和min[i - 1]符号相同时) 第三nums[i] * max[i - 1](当nums[i]和max[i - 1]符号相同时)
// min[i] 它的取值可能有三个可能，
// 第一它自己，第二nums[i] * min[i - 1](当nums[i]和min[i - 1]符号不相同时) 第三nums[i] * max[i - 1](当nums[i]和max[i - 1]符号不相同时)
// 最大的乘积数组就是 max[i]数组的最大值

let nums = [2,3,-2,4];
let nums1 = [-2,0,-1];
console.log(maxProduct(nums));
console.log(maxProduct(nums1));