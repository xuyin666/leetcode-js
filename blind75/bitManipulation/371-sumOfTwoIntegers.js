// 371. Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        let tmp = (a & b) << 1;
        a = a ^ b;
        b = tmp;
    }
    return a;
};


// 用9 + 11来举例
// a ^(xor) b 相当于 进行加减，但是没有加法那个carry
// (a & b) << 1 相当于 获得那个carry
// 两者相加 
// 9(1001) + 11 (1011) 
// (a ^ b)  ((a & b) << 1)
//  00010   10010
//  10000   00100
//  10100   00000

let a = 1, b = 2;
let a1 = 2, b1 = 3;
console.log(getSum(a, b));
console.log(getSum(a1, b1));