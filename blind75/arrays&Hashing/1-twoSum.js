// 1. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    let hashMap = new Map();
    let res = []
    for (let i = 0; i < len; i++) {
        let sub = target - nums[i];
        if (hashMap.has(sub)) {
            res.push(hashMap.get(sub))
            res.push(i);
            return res;
        } else {
            hashMap.set(nums[i], i);
        }
    }
    return res;
};

// 这道题思路比较简单 就是用hashmap
// 遍历数组 
// 如果target - nums[i]不存在 则将nums[i]作为key，i作为value存入hashmap
// 如果target - nums[i]存在，则返回hashmap(target - nums[i])的值 以及i值，

let nums = [2,7,11,15], target = 9;
let nums1 = [3,2,4], target1 = 6;
let nums2 = [3,3], target2 = 6;

console.log(twoSum(nums, target));
console.log(twoSum(nums1, target1));
console.log(twoSum(nums2, target2));