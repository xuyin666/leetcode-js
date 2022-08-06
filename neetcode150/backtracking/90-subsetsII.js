// 90. Subsets II
// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    // we need to sort the array because we need to 
    // check the position of the duplicated element
    nums.sort();
    let dfs = function(index, curr) {
        if (index === nums.length) {
            res.push([...curr]);
            return;
        }
        // if (index > nums.length) return;
        // take the index element
        curr.push(nums[index]);
        dfs(index + 1, curr);
        curr.pop();
        while(index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }
        // we will not take the element
        dfs(index + 1, curr);
    }
    dfs(0, []);
    return res;
};

let nums = [1,2,2];
let nums1 = [0];
console.log(subsetsWithDup(nums));
console.log(subsetsWithDup(nums1));

