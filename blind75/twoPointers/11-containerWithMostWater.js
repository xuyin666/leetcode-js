// 11. Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let len = height.length;
    let l = 0, r = len - 1;
    let res = 0;
    while(l < r) {
        // 面积取决于较小的那个数
        let area = (r - l) * Math.min(height[l], height[r]);
        res = Math.max(res, area);
        if (height[l] > height[r]) r--;
        else l++;
    }
    return res;
};

// 这道题的思路是双指针
// 在右边和左边分别设置一个指针i和j
// 面积计算公式为 (i - j) * Max(nums[i], nums[j])
// 如果 nums[i] > nums[j] 移动j
// 为什么移动j，因为假设移动i, (i - j)变小， 剩下一边只有可能比nums[j] 或者相等
// 所以移动j 一定会变小面积
// 如果移动较小的那个，面积又可能变大，所以需要移动小的那个

let height = [1,8,6,2,5,4,8,3,7];
let height1 = [1,1];
console.log(maxArea(height));
console.log(maxArea(height1));