// 15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort(function(a, b){return a - b});
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        // when the value is same as the before value, we need to avoid this case
        if (i > 0 && nums[i] === nums[i - 1])
            continue;
        let l = i + 1, r = len - 1;
        while(l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            if (sum > 0)
                r--;
            else if (sum < 0)
                l++;
            else {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                // for avoiding adding the same array
                while(l < r && nums[l - 1] === nums[l])
                    l++
            }
        }
    }
    return res;
};

// 思路首先是得先把数组排序
// 比如说是 i, j, n
// 先遍历数组 i 我们会选择跳过重复的值 j = i + 1, n = len - 1
// 然后再看 nums[i] + nums[j] + nums[n] 的值
// 大于0的话 n-- 小于0的话 j++ 
// 等于0的时候 得确定接下来的 nums[j] 和 nums[j - 1] 不同
// 这样才能确保是每个数组都是不同的值

let nums = [-1,0,1,2,-1,-4];
let nums1 = [0,1,1];
let nums2 = [0,0,0];
console.log(threeSum(nums));
console.log(threeSum(nums1));
console.log(threeSum(nums2));