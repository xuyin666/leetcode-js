// 78. Subsets
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let dfs = function(i, curr) {
        if (i === nums.length) res.push([...curr]);
        if (i > nums.length) return;
        curr.push(nums[i]);
        dfs(i + 1, curr);
        curr.pop()
        dfs(i + 1, curr);
    }
    dfs(0, [])

    return res;
};

// 这道题思路就是backtracking
// 用一个i 来记录当前数组的位置 然后计算是否继续
// 取nums[i] 还是不取nums[i]
// 无论去还是不取 i++

let nums = [1,2,3];
let nums1 = [0];
console.log(subsets(nums));
console.log(subsets(nums1));
