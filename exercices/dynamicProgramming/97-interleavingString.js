// 97. Interleaving String
// Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.
// An interleaving of two strings s and t is a configuration where s and t are divided into n and m non-empty substrings respectively, such that:
// s = s1 + s2 + ... + sn
// t = t1 + t2 + ... + tm
// |n - m| <= 1
// The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
// Note: a + b is the concatenation of strings a and b.

/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) { 
    let m = parseInt(s1.length); // i 4
    let n = parseInt(s2.length); // j 5
    let k = parseInt(s3.length); 
    if (m + n !== k) return false;
    let dp = new Array(n + 1)
    for (let i = 0; i <= n; i++) {
        dp[i] = new Array(m + 1)
    }
    // dp[j][i] dp[n][m]

    for (let j = 0; j <= n; j++) {
        for (let i = 0; i <= m; i++) {
            dp[j][i] = false;
        }
    }
    dp[0][0] = true; // s1 = "" s2 = "" 

    // dp[j][i] dp[n][m]
    for(let i = 1; i <= m; i++) {
        // s1 = "XXXi" s2 = "" s3 = "ZZZZ" 
        if (s1[i - 1] === s3[i - 1] && dp[0][i - 1] === true) 
            dp[0][i] = true
    }

    for(let j = 1; j <= n; j++) {
        // s1 = "" s2 = "YYYj" s3 = "ZZZZ" 
        if (s2[j - 1] === s3[j - 1] && dp[j - 1][0] === true) 
            dp[j][0] = true
    }
    // dp[j][i] dp[n][m]
    // X X X i (3 letters without i s1)
    // Y Y Y Y j (4 letters without j s2)
    
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            // if s1[i] === s3[i + j], dp[j][i - 1] will determine the value of dp[j][i]
            if (s1[i - 1] === s3[i + j - 1] && dp[j][i - 1] === true) 
                dp[j][i] = true
            else if (s2[j - 1] === s3[i + j - 1] && dp[j - 1][i] === true) 
                dp[j][i] = true
            // if s2[j] === s3[i + j], dp[j - 1][i] will determine the value of dp[j][i]
        }
    }
    // console.log(n, m);
    return dp[n][m]

}

// dp[i][j] means whether s3(length i + j) is formed by s1(length i) and s2(length j)

// X X X i (3 letters without i s1)
// Y Y Y Y j (4 letters without j s2)
// Z Z Z Z Z Z Z Z (8 letters s3)
// if s1[i] === s3[i + j], dp[i - 1][j] will determine the value of dp[i][j]
// if s2[j] === s3[i + j], dp[i][j - 1] will determine the value of dp[i][j]
// if s1 = "" s2 = "" s3="" dp[0][0] = true
 

// var isInterleave = function(s1, s2, s3) {
//     let len1 = parseInt(s1.length);
//     let len2 = parseInt(s2.length);
//     let len3 = parseInt(s3.length);
//     if (len1 + len2 !== len3) return false;
//     let memo = {}
//     let isInterleaveMemo = function(i, j, k) {
//         let str = i + "," + j + "," + k
//         if (str in memo) return memo[str];
//         if (i === len1 && j === len2 && k === len3) 
//             return true;
//         let b1 = false, b2 = false;
//         // i == len1 代表到达了末尾
//         if (i < len1 && s1[i] === s3[k]) 
//             b1 = isInterleaveMemo(i + 1, j, k + 1);
//         if (j < len2 && s2[j] === s3[k]) 
//             b2 = isInterleaveMemo(i, j + 1, k + 1);
//         memo[str] = b1 || b2;
//         return memo[str];
//     }
//     return isInterleaveMemo(0, 0, 0)
// };

let s1 = "aabc", s2 = "dbbca", s3 = "aadbbcbca";
console.log(isInterleave(s1, s2, s3));