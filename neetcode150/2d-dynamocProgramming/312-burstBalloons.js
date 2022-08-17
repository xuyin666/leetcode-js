// 312. Burst Balloons
// You are given n balloons, indexed from 0 to n - 1. Each balloon is painted with a number on it represented by an array nums. You are asked to burst all the balloons.
// If you burst the ith balloon, you will get nums[i - 1] * nums[i] * nums[i + 1] coins. If i - 1 or i + 1 goes out of bounds of the array, then treat it as if there is a balloon with a 1 painted on it.
// Return the maximum coins you can collect by bursting the balloons wisely.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    // this will be the new border 
    nums.push(1);
    nums.unshift(1);
    // dfs means we will push the i in the last
    // 因为是最后推的，所以他等于最右边的*最左边*自己的值
    // 在把他自己分成两份
    let dp = new Map();
    let dfs = function(l, r) {
        let str = l + "," + r;
        if (dp.has(str)) return dp.get(str);
        if (l > r) return 0;
        let res = -1;
        for (let i = l; i <= r; i++) {
            let total = nums[l - 1] * nums[i] * nums[r + 1];
            total = total + dfs(l, i - 1) + dfs(i + 1, r);
            res = Math.max(total, res);
        }
        dp.set(str, res);
        return res;
    }
    return dfs(1, nums.length - 2);
};

let nums = [3,1,5,8];
let nums1 = [1,5];
console.log(maxCoins(nums));
console.log(maxCoins(nums1));
