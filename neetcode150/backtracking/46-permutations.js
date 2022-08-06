// 46. Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    let dfs = function(index, nums) {
        if (index >= nums.length) {
            res.push([...nums]);
        }
        // permutate i and i ~ length - 1
        for (let i = index; i < nums.length; i++) {
            swap(index, i, nums);
            dfs(index + 1, nums);
            swap(index, i, nums);
        }
    }
    dfs(0, nums);
    return res;
};

let swap = function(i, j, nums) {
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
    return nums;
}

let nums = [1,2,3];
let nums1 = [0,1];
let nums2 = [1];
console.log(permute(nums));
console.log(permute(nums1));
console.log(permute(nums2));

