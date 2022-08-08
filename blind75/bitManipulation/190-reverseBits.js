// 190. Reverse Bits
// Reverse bits of a given 32 bits unsigned integer.
// Note:
// Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.
// In Java, the compiler represents the signed integers using 2's complement notation. Therefore, in Example 2 above, the input represents the signed integer -3 and the output represents the signed integer -1073741825.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {

        // (n >>> i) & 1 get the last bit
        // n >>> i means that we put the right part some 0
        let bit = (n >>> i) & 1;
        // bit << (31 - i) means that we left shift to make the bit
        // appear in the correct position 
        res = res | bit << (31 - i);
    }
    // the overall effect of x >>> 0 is convert x into a 32-bit unsigned integer.
    // convert the result to an unsigned 32-bit integer
    return res >>> 0;
};

// let n = 00000010100101000001111010011100;
// let n1 = 11111111111111111111111111111101;
// console.log(reverseBits(n));
// console.log(reverseBits(n1));