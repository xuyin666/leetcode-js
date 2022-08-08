// 268. Missing Number
// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = nums.length;
    for (let i = 0; i < nums.length; i++) {
        res = res ^ i ^ nums[i]
    }
    return res;
};


// var missingNumber = function(nums) {
//     let res = nums.length;
//     for (let i = 0; i < nums.length; i++) {
//         res = res + i - nums[i]
//     }
//     return res;
// };

// 这道题有两个思路
// 第一种思路是 用把0 到 nums.length累加 然后减去 nums的总和
// 剩下的值就是 缺的那个号码
// 第二种思路是 把0到nums.length的值 和 nums中的所有值进行异或计算
// xor a ^ b ^ a = b;


let nums = [3,0,1];
let nums1 = [0,1];
let nums2 = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));
console.log(missingNumber(nums1));
console.log(missingNumber(nums2));
