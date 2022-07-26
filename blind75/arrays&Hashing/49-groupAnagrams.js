// 49. Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let aMap = {};

    for (let str of strs) {
        let arr = new Array(26).fill(0);

        for (let i = 0; i < str.length; i++) {
            let index = str.charCodeAt(i) - "a".charCodeAt(0);
            arr[index]++;
        }

        let key = arr.toString();
        if (aMap[key] === undefined) {
            aMap[key] = []
        }
        aMap[key].push(str)
    } 
    
    return Object.values(aMap);
};

// 这道题 用一个array，array[0-25] 记录着从'a'-'z'的出现次数
// 再把这个array转换为string
// 这样的话 如果是anagram，key应该相同
// 如果key相同就把value记录下来


let strs = ["eat","tea","tan","ate","nat","bat"];
let strs1 = [""];
let strs2 = ["a"];

console.log(groupAnagrams(strs));
console.log(groupAnagrams(strs1));
console.log(groupAnagrams(strs2));