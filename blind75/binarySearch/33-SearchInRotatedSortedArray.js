// 33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target === nums[mid])
            return mid;
        else {
            // left portion
            // why nums[mid] need to be equal to nums[l]?
            // for [3, 1]
            if (nums[mid] >= nums[l]) {
                //means that target are not in the left portion
                if (target < nums[l] || target > nums[mid])
                    l = mid + 1;
                else
                    r = mid - 1;
            } else {
                // right portion
                if (target < nums[mid] || target > nums[r]) //means that target are not in the right portion
                    r = mid - 1;
                else
                    l = mid + 1;
            }
        }
    }
    return -1;
};

// 这道题的思路
// 前半段是递增 后边也是递增
// l = 0, r = length - 1, mid = Math.floor((l + r) / 2)
// 看看 target 所在的区间
// 首先如果target = nums[mid]直接返回mid值
// 不然的话在比较 nums[mid] 和 nums[l]来确定 mid 在哪边
// 如果 nums[mid] > nums[l] 证明mid 在左半段
//      确认在左半段，再看是否 target 的值和端点值比较
//      如果 target < nums[l] 或者 target > nums[mid] 证明这个值 在右边段
// 同理 在有半段一样


let nums = [4,5,6,7,0,1,2], target = 0;
let nums1 = [4,5,6,7,0,1,2], target1 = 3;
let nums2 = [1], target2 = 0;
let nums3 = [3, 1], target3 = 1;
// console.log(search(nums, target));
// console.log(search(nums1, target1));
// console.log(search(nums2, target2));
console.log(search(nums3, target3));

