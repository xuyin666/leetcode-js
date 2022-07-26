// 347. Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let hashMap = new Map();
    
    // get the frequency of a num
    for (let num of nums) {
        if (hashMap.has(num)) {
            hashMap.set(num, hashMap.get(num) + 1);
        } else {
            hashMap.set(num, 1);
        }
    }
    
    // create a new array for memorizing the frequency and the number
    let len = nums.length;
    let arr = new Array(len + 1);
    for (let i = 0; i < len + 1; i++) {
        arr[i] = [];
    }
    hashMap.forEach((value, key) => {
        arr[value].push(key);
    });
    
    // loop through the array in the inversed order
    let res = []
    for (let i = len; i >= 0; i--) {
        for (let j = 0; j < arr[i].length; j++) {
            if (res.length != k) {
                res.push(arr[i][j])
            }
        }
    }
    
    return res;
};

// 这道题的思路是以出现次数作为index 然后记录nums
// index 从 0 到 nums.length
// 然后用一个map记录某个数字出现的次数
// 在以出现次数作为key来进行操作
// 最后再倒序遍历 


let nums = [1,1,1,2,2,3], k = 2;
let nums1 = [1], k1 = 1;
console.log(topKFrequent(nums, k));
console.log(topKFrequent(nums1, k1));