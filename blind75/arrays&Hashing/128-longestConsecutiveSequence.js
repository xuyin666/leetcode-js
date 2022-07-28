// 128. Longest Consecutive Sequence
// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hashSet = new Set();

    for (let num of nums) {
        hashSet.add(num);
    }

    let maxLen = 0;
    for (let num of nums) {
        if (!hashSet.has(num - 1)) {
            let len = 0;
            while(hashSet.has(num + len)) 
                len++;
            maxLen = Math.max(len, maxLen);
        }
    }
    
    return maxLen;
};

// 思路用一个set把所有出现的值存起来(set 不存重复的值)，找得每个sequence中最右边的值
// 然后把这个数组分成几堆
// 比如说 nums[i] 
// 检查是否 nums[i] - 1 存在于set中
// 不存在则往上检查 看看是否nums[i] + 1存在于set中
// 存在则跳过 需要发现什么时候是最左边


let nums = [100,4,200,1,3,2];
let nums1 = [0,3,7,2,5,8,4,6,0,1];
console.log(longestConsecutive(nums));
console.log(longestConsecutive(nums1));