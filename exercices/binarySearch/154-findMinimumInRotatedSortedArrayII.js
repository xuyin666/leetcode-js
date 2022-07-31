// 154. Find Minimum in Rotated Sorted Array II

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.



/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return helper(nums, 0, nums.length - 1);
};

let helper = function(nums, start, end) {

    // it means that start is closed to the end of the start is the end
    // it means that iit contains one or two elements
    if (start === end || start + 1 === end) 
        return Math.min(nums[start], nums[end])

    // it means that it is sorted,
    if (nums[start] < nums[end])
        return nums[start]
    
    // it means that the array from start and end are not sorted and it contains more than two elements 
    let mid = Math.floor((start + end) / 2);
    return Math.min(helper(nums, start, mid), helper(nums, mid + 1, end));
}

// 这道题的思路是运用递归进行二分查找
// 首先如果 nums[l] < nums[r] 证明这部分是单调递增的 可以直接返回nums[l]
// 如果 nums[l] == nums[r]啥也无法证明
// 当我们发现只剩下一个或者两个元素从start到end时，
// 需要返回他们之中的最小值
// 不然的话得继续递归左半部分和右半部分


let nums = [1, 3, 5];
let nums1 = [2, 2, 2, 0, 1];
console.log(findMin(nums));
console.log(findMin(nums1));
