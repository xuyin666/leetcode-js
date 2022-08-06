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
    
};

let candidates = [2,3,6,7], target = 7;
let candidates1 = [2,3,5], target1 = 8;
let candidates2 = [2], target2 = 1;
console.log(combinationSum(candidates, target));
console.log(combinationSum(candidates1, target1));
console.log(combinationSum(candidates2, target2));
