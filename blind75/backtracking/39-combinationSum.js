// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.
// It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let dfs = function(index, curr, total) {
        // index depass the limit
        if (index >= candidates.length || total > target)
            return;
        if (total === target) {
            res.push([...curr]);
            return;
        }
        // take the candidates[index]
        curr.push(candidates[index])
        dfs(index, curr, total + candidates[index])
        // if we don't take the candidates[index]
        curr.pop();
        dfs(index + 1, curr, total);
    }
    dfs(0, [], 0);
    return res;
};

// 用个dfs()
// 用i来代表当前的index, 用curr代表当前的数组，用total代表当前的全部
// dfs(i, curr, total)
// 初始化 dfs(0, [], 0);
// 从0开始，当前数组为空，总和为0 



let candidates = [2,3,6,7], target = 7;
let candidates1 = [2,3,5], target1 = 8;
let candidates2 = [2], target2 = 1;
console.log(combinationSum(candidates, target));
console.log(combinationSum(candidates1, target1));
console.log(combinationSum(candidates2, target2));
