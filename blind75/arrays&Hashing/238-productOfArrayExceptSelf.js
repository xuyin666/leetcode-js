// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.


/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var productExceptSelf = function(nums) {
    let len = nums.length;
    let res = new Array(len);
    
    let tmp = 1;
    for (let i = 0; i < len; i++) {
        res[i] = tmp;
        tmp = nums[i] * tmp;
    }

    tmp = 1;
    for (let i = len - 1; i >= 0; i--) {
        res[i] = res[i] * tmp;
        tmp = nums[i] * tmp;  
    }

    return res;
};


// var productExceptSelf = function(nums) {
//     let len = nums.length;
//     let prefix = new Array(len);
//     let suffix = new Array(len);
//     let tmp = 1;
//     for (let i = 0; i < len; i++) {
//         prefix[i] = tmp;
//         tmp = nums[i] * tmp;
//     }
//     tmp = 1;
//     for (let i = len - 1; i >= 0; i--) {
//         suffix[i] = tmp;
//         tmp = nums[i] * tmp;
//     }
//     let res = new Array(len);
//     for (let i = 0; i < len; i++) {
//         res[i] = prefix[i] * suffix[i];
//     }

//     return res;
// };

// 这道题的思路是  
// 第一种思路 创建两个数组prefix[] 和 suffix[]
// 举例说 nums = [1, 3, 4, 5]
// prefix 是这个i之前的所有prefix的乘积
// prefix 初始值为 1 我们可以得出[1, 1 * 1, 1 * 1 * 3, 1 * 3 * 4]
// suffix 是这个i之后的所有suffix的乘积
// suffix 初始值为 1 我们可以得出[ 3 * 4 * 5 * 1, 4 * 5 * 1, 5 * 1, 1] 
// 结果的值则为 prefix[i] * suffix[i]

// 第二种思路相同 但是只用一个数组res
// 先计算prefix 
// res 先赋值为 prefix
// 然后 再倒序遍历 res  = prefix * suffix

let nums = [1,2,3,4];
let nums1 = [-1,1,0,-3,3];
console.log(productExceptSelf(nums));
console.log(productExceptSelf(nums1));