// 739. Daily Temperatures
// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // 这道题的思路是用stack
    // 把如果当前温度比栈顶的温度高 就pop()
    // 不然的话就push，(index, temperature)
    let res = new Array(temperatures.length).fill(0);
    let stack = [];
    for (let i = 0; i < temperatures.length; i++) {
        while(stack.length > 0 && 
            temperatures[i] > stack[stack.length - 1][1]) {
            let index = stack[stack.length - 1][0]
            res[index] = i - index;
            stack.pop();        
        }
        stack.push([i, temperatures[i]]);
    }
    return res;
};

let temperatures = [73,74,75,71,69,72,76,73];
let temperatures1 = [30,40,50,60];
let temperatures2 = [30,60,90]
console.log(dailyTemperatures(temperatures));
console.log(dailyTemperatures(temperatures1));
console.log(dailyTemperatures(temperatures2));
