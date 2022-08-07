// 55. Jump Game
// You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
// Return true if you can reach the last index, or false otherwise.


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let goal = nums.length - 1;
    let i;
    // 我们从倒数第二个index开始遍历 来确认是否能从倒数第二个到达倒数第一个
    for (i = nums.length - 2; i >= 0; i--) 
        if (i + nums[i] >= goal) 
            goal = i; // goal = i 代表着能到达这个格子
    return goal === 0; // 看是否能到达最初的格子
};
// 这题的思路是从后面往前遍历 比如说如果是需要到达格子5，我们开始看是否能从格子4到格子5，然后依次类推

// Need to convert to DP tabulation
// var canJumpMemo = function(nums, memo) {
//     let len = nums.length
//     if (memo[len] !== undefined) return memo[len] 
//     if (nums.length === 1) return true;

//     let i;
//     for (i = 0; i < nums[0]; i++) {
//         let newNums = nums.slice(i + 1);
//         if (canJumpMemo(newNums, memo)) {
//             memo[len] = true;
//             return memo[len];
//         } 
//     }
//     memo[len] = false
//     return memo[len];
// }

let arr = [2,3,1,1,4]
let arr1 = [3,2,1,0,4]
let arr2 = [2,0,6,9,8,4,5,0,8,9,1,2,9,6,8,8,0,6,3,1,2,2,1,2,6,5,3,1,2,2,6,4,2,4,3,0,0,0,3,8,2,4,0,1,2,0,1,4,6,5,8,0,7,9,3,4,6,6,5,8,9,3,4,3,7,0,4,9,0,9,8,4,3,0,7,7,1,9,1,9,4,9,0,1,9,5,7,7,1,5,8,2,8,2,6,8,2,2,7,5,1,7,9,6]
console.log(canJump(arr));
console.log(canJump(arr1));
console.log(canJump(arr2));