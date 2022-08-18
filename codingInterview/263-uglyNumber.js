// 263. Ugly Number
// An ugly number is a positive integer whose prime factors are limited to 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    // 这道题需要知道 ugly number是个正数，如果n <= 0 返回false
    // 然后再不断的除2 3 5
    if (n <= 0) return false; 
    let arr = [2, 3, 5];
    for (let i = 0; i < arr.length; i++) {
        while (n % arr[i] === 0) {
            n = n / arr[i];
        }
    }
    if (n === 1) return true;
    return false;
};

let n = 6;
let n1 = 1;
let n2 = 14;
console.log(isUgly(n));
console.log(isUgly(n1));
console.log(isUgly(n2));
