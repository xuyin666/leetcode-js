// 84. Largest Rectangle in Histogram
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // 这道题的思路是用stack
    // 加入顶层元素stack的值比自己小 则将这个元素推出
    // 反之则将这个元素推入
    let stack = [];
    let res = 0;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && 
                heights[i] < stack[stack.length - 1][1]) {
            let arr = stack.pop();
            // 这是被推出元素的最大面积
            res = Math.max(res, (i - arr[0]) * arr[1]);
        }
        stack.push([i, heights[i]])
    }
    // 有些元素无法被推出，则代表他们一直都结尾都没有遇到比他们更大的
    while (stack.length > 0) {
        let topElem = stack.pop();
        res = Math.max(res, (heights.length - topElem[0]) * topElem[1])
    }
    return res;
};

let heights = [2,1,5,6,2,3];
let heights1 = [2,4];
console.log(largestRectangleArea(heights));
console.log(largestRectangleArea(heights1));
