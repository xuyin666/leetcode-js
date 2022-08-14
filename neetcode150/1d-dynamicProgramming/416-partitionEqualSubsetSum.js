// 416. Partition Equal Subset Sum
// Given a non-empty array nums containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canPartition = function(nums) {
    // 这道题的思路就是用一个set 记录所以可能的值和
    // 最后再看target是否存在于这个set中
    let sum = nums.reduce((partialSum, a) => partialSum + a, 0);
    if (sum % 2 === 1) return false;
    let target = sum / 2;
    let sumSet = new Set();
    // it means that if the target is 0, that can be ok;
    sumSet.add(0);
    for (let i = 0; i < nums.length; i++) {
        let aSet = new Set();
        for (let ele of sumSet) {
            aSet.add(ele);
            aSet.add(ele + nums[i]);
        }
        sumSet = aSet;
    }
    return sumSet.has(target);
}


// var canPartition = function(nums) {
// 用dfs 那个复杂度太高了，会有超时的问题
//     const sum = nums.reduce((partialSum, a) => partialSum + a, 0);
//     if (sum % 2 === 1) return false;
//     // 当前index为i，查找的值为sum
//     let dfs = function(sum, i) {
//         if (sum < 0 || i >= nums.length) return false;
//         if (sum === 0) return true;
//         return dfs(sum, i + 1) || dfs(sum - nums[i], i + 1);
//     }
//     return dfs(sum / 2, 0);
// };

let nums = [1,5,11,5];
let nums1 = [1,2,3,5];
console.log(canPartition(nums));
console.log(canPartition(nums1));