// 494. Target Sum
// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let dp = new Map();
    let backtracking = function(target, index) {
        let str = target + "," + index;
        if (dp.has(str)) return dp.get(str);
        if (target === 0 && index === -1) return 1;
        if (index < 0) return 0;
        let res = 0;
        res = backtracking(target + nums[index], index - 1) +
                backtracking(target - nums[index], index - 1);
        dp.set(str, res);
        return res;
    }
    return backtracking(target, nums.length - 1);
};

let nums = [1,1,1,1,1], target = 3;
let nums1 = [1], target1 = 1;
console.log(findTargetSumWays(nums, target));
console.log(findTargetSumWays(nums1, target1));

