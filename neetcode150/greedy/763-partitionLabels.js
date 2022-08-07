// 763. Partition Labels
// You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.
// Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.
// Return a list of integers representing the size of these parts.


/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
    let lastIndex = new Map();
    for (let i = 0; i < s.length; i++) {
        lastIndex.set(s.charAt(i), i);
    }
    let end = 0;
    let size = 0;
    let res = [];
    for (let i = 0; i < s.length; i++) {
        size++;
        end = Math.max(end, lastIndex.get(s.charAt(i)));
        if (i === end) {
            res.push(size);
            size = 0;
            // end = 0; 不是必须的，因为结下来的lastindex 一定会是在i之后
        }
    }
    return res;
};
// 这道题的思路
// 首先遍历这个string，把每个字符最后一次出现的index记录下来
// 然后再遍历这个string，end 记录着最远的地方
// size记录着当前这个字符串的长度 
// 当i 等于 end时 代表着 这一部分完成 不再有其他的字符了

let s = "ababcbacadefegdehijhklij";
let s1 = "eccbbbbdec";
console.log(partitionLabels(s));
console.log(partitionLabels(s1));
