// 217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashMap = new Set();
    for (let num of nums) {
        if(hashMap.has(num))
            return true
        hashMap.add(num)
    }
    return false;
};


// 思路是用hashset，hashset里面的值只会出现一次, 时间复杂度O(n),空间复杂度O(n)
// 也可以先排序，然后比较两个相邻的值，时间复杂度为O(nlog(n)),空间复杂度为O(1)
// brut force 先看第一个值然后再逐个比较，再看第二个值再逐个比较，时间复杂度O(n^2),空间复杂度为O(1)

let nums = [1,2,3,1]
let nums1 = [1,2,3,4]
let nums2 = [1,1,1,3,3,4,3,2,4,2]
console.log(containsDuplicate(nums));
console.log(containsDuplicate(nums1));
console.log(containsDuplicate(nums2));