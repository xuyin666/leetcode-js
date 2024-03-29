// 239. Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let start = 0;
    let end = start + k - 1;
    let res = [];
    while (end < nums.length) {
        let newArr = nums.slice(start, end + 1);
        res.push(Math.max(...newArr));
        start = start + 1;
        end = start + k - 1;
    }
    return res;
};

let nums = [1,3,-1,-3,5,3,6,7], k = 3;
let nums1 = [1], k1 = 1;
console.log(maxSlidingWindow(nums, k));
console.log(maxSlidingWindow(nums1, k1));
