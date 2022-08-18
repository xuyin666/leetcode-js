// 287. Find the Duplicate Number
// Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
// There is only one repeated number in nums, return this repeated number.
// You must solve the problem without modifying the array nums and uses only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // 这道题的思路是用快慢指针，相遇了之后再放两个指针
    // 一个指针在相交处 一个指针在最初的起点 
    // 慢慢走 最后相遇的地方就是duplicate的值

    let fast = nums[nums[0]];
    let slow = nums[0];
    while (fast !== slow) {
        fast = nums[nums[fast]];
        slow = nums[slow];
    }
    let start = nums[0];
    let inter = nums[slow];
    while (start !== inter) {
        start = nums[start];
        inter = nums[inter];
    }
    return start;
};

let nums = [1,3,4,2,2];
let nums1 = [3,1,3,4,2];
console.log(findDuplicate(nums));
console.log(findDuplicate(nums1));