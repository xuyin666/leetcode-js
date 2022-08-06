// 40. Combination Sum II
// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.
// Each number in candidates may only be used once in the combination.
// Note: The solution set must not contain duplicate combinations.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res = [];
    candidates.sort();
    let dfs = function(index, curr, total) {
        if (total > target || index >= candidates.length) return;
        if (total === target) {
            res.push([...curr]);
            return;
        }
        // take the index element
        curr.push(candidates[index]);
        // every element is used for once
        dfs(index + 1, curr, total + candidates[index]);
        curr.pop();
        // when we will not take the index element
        // to avoid the duplicate element 
        while (index + 1 < candidates.length && candidates[index] === candidates[index + 1]) {
            index++;
        }
        dfs(index + 1, curr, total);
    }
    dfs(0, [], 0);
    return res;
};

let candidates = [10,1,2,7,6,1,5], target = 8;
let candidates1 = [2,5,2,1,2], target1 = 5
console.log(combinationSum2(candidates, target));
console.log(combinationSum2(candidates1, target1));
