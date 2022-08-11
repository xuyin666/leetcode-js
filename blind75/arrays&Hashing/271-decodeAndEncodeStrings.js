// 271 decode and encode strings
// 请你设计一个算法，可以将一个 字符串列表 编码成为一个 字符串。这个编码后的字符串是可以通过网络进行高效传送的，并且可以在接收端被解码回原来的字符串列表。



/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let res = "";
    for (let str of strs) {
        res = res + str.length + "#" + str;
    }
    return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let i = 0;
    let res = [];
    while (i < s.length) {
        let j = i;
        while (s.charAt(j) !== "#") {
            j++;
        }
        // length of the str beside the '#'
        let len = parseInt(s.substring(i, j));
        //  length of the string
        let str = s.substring(j + 1, j + 1 + len);
        res.push(str);
        i = j + 1 + len;
    }
    return res;
};



// 这道题的思路是用 一个数字 加上 ‘#‘ 来进行编码
// 数字代表着之后那个字符串的长度
// 解码的时候需要先获得那个数字 然后再把之后的字符串推入到数组中

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// let str = ["Hello","World"];
// console.log(decode(encode(str)));