// 269 alien dictionary
// 现有一种使用英语字母的火星语言，这门语言的字母顺序与英语顺序不同。
// 给你一个字符串列表 words ，作为这门语言的词典，words 中的字符串已经 按这门新语言的字母顺序进行了排序 。
// 请你根据该词典还原出此语言中已知的字母顺序，并 按字母递增顺序 排列。若不存在合法字母顺序，返回 "" 。若存在多种可能的合法字母顺序，返回其中 任意一种 顺序即可。
// 字符串 s 字典顺序小于 字符串 t 有两种情况：
// 在第一个不同字母处，如果 s 中的字母在这门外星语言的字母顺序中位于 t 中字母之前，那么 s 的字典顺序小于 t 。
// 如果前面 min(s.length, t.length) 字母都相同，那么 s.length < t.length 时，s 的字典顺序也小于 t 。

/**
 * @param {string[]} words
 * @return {string}
 */
var alienOrder = function(words) {
    let allMap = new Map();
    for (let word of words) {
        for (let ch of word) {
            if (!allMap.has(ch)) {
                let newSet = new Set();
                allMap.set(ch, newSet);
            }
        }
    }
    let wordsLen = words.length;
    for (let i = 1; i < wordsLen; i++) {
        let word1 = words[i - 1];
        let word2 = words[i];
        let lenWord1 = word1.length;
        let lenWord2 = word2.length;
        // word1 has the same head as word2 
        // word1 longer than word2 
        // but word1 is before word2 
        if (lenWord1 > lenWord2 && 
            word1.substring(0, lenWord2) === word2.substring(0, lenWord2)) {
            return "";
        }
        let minLen = Math.min(lenWord1, lenWord2);
        for (let j = 0; j < minLen; j++) {
            if (word1.charAt(j) !== word2.charAt(j)) {
                let aSet = allMap.get(word1.charAt(j));
                aSet.add(word2.charAt(j));
                allMap.set(word1.charAt(j), aSet);
                break;
            }
        }
    }
    let visit = {}; // false = visited, true = in path;
    let res = [];
    // dfs postOrder;
    // dfs 的作用是 第一 判断是否有环
    // 如果有环的话返回true，没环的话返回false，
    // 在res中加入对应的ch
    let dfs = function(ch) {
        if (ch in visit) 
            return visit[ch];

        visit[ch] = true;
        let newSet = allMap.get(ch);
        if (newSet !== undefined) {
            for (let elem of newSet) {
                if (dfs(elem)) {
                    return true;
                }
            }
        }
        visit[ch] = false;
        res.push(ch); 
    }    
    for (const key of allMap.keys()) {
        if (dfs(key))
            return "";
    }
    return res.reverse().join("");
    

};

// 思路是先把每个字母的顺序记下来
// 比如说 w < e < r 
// t < f 等等
// 接下来再dfs postorder遍历一遍
// 得reverse order一下最后
// 用一个visit false 代表visit了 true 代表visit 并且正在这个path中

let words = ["wrt","wrf","er","ett","rftt"];
let words1 = ["z","x"];
let words2 = ["ri","xz","qxf","jhsguaw","dztqrbwbm","dhdqfb","jdv","fcgfsilnb","ooby"];
console.log(alienOrder(words));
console.log(alienOrder(words1));
console.log(alienOrder(words2));
