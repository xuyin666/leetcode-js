// 153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
// Given the sorted rotated array nums of unique elements, return the minimum element of this array.
// You must write an algorithm that runs in O(log n) time.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
    let res = nums[0];
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (nums[l] <= nums[r]) {
            res = Math.min(res, nums[l])
            break;
        } else {
            res = Math.min(res, nums[mid])
            if (nums[mid] >= nums[l]) 
                l = mid + 1;
            else 
                r = mid - 1;
        }   
    }
    return res;
};

// 这道题 我没有真正的理解的理解透彻
// 大致理解
// 首先得发现 mid 是否在一个半段上
// 如果 nums[l] <= nums[r] 证明 从 l 到 r单调递增，可能的min值是 nums[l]
// 如果 nums[l] > nums[l] 证明 从 l 到 r 先增后增 分开的两段递增区间
//      如果 nums[mid] < nums[l] 证明 mid 和 l 不在一段区间内 mid = r - 1 (后半段)
//      如果 nums[mid] >= nums[l] 证明 mid 和 l 在一段区间内 mid = l + 1 （前半段）

let nums = [3,4,5,1,2];
let nums1 = [4,5,6,7,0,1,2];
let nums2 = [11,13,15,17];
console.log(findMin(nums));
console.log(findMin(nums1));
console.log(findMin(nums2));

