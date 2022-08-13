// 42. Trapping Rain Water
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
// 双指针的思路是移动小的那个
var trap = function(height) { 
    let l = 0, r = height.length - 1;
    let leftMax = height[l], rightMax = height[r];
    let res = 0;
    while (l <= r) {
        if (leftMax < rightMax) {
            let sub = leftMax - height[l];
            if (sub > 0)
                res = res + sub;
            else
                leftMax = height[l];
            l++;
        } else {
            let sub = rightMax - height[r];
            if (sub > 0)
                res = res + sub;
            else
                rightMax = height[r];
            r--;
        }
    }
    return res;
}

// 用多个数组
// var trap = function(height) {
//     let len = height.length;
//     let leftMax = new Array(len);
//     let rightMax = new Array(len);
//     let maxV = height[0];
//     for (let i = 0; i < len; i++) {
//         maxV = Math.max(maxV, height[i]);
//         leftMax[i] = maxV;
//     }
//     maxV = height[len - 1];
//     for (let i = len - 1; i >= 0; i--) {
//         maxV = Math.max(maxV, height[i])
//         rightMax[i] = maxV;
//     }
//     let res = 0;
//     for (let i = 0; i < len; i++) {
//         let minV = Math.min(leftMax[i], rightMax[i]);
//         if (minV - height[i] < 0)
//             continue;
//         res = res + minV - height[i];
//     }
//     return res;
// };

// 这道题的重点是知道 在index能装雨水的数量为 min(leftMax, rightMax) - nums[i];
// 有两种解法 一个是用很多个数组， 一个是双指针

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
let height1 = [4,2,0,3,2,5];
console.log(trap(height));
console.log(trap(height1));