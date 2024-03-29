// 1899. Merge Triplets to Form Target Triplet
// A triplet is an array of three integers. You are given a 2D integer array triplets, where triplets[i] = [ai, bi, ci] describes the ith triplet. 
// You are also given an integer array target = [x, y, z] that describes the triplet you want to obtain.
// To obtain target, you may apply the following operation on triplets any number of times (possibly zero):
// Choose two indices (0-indexed) i and j (i != j) and update triplets[j] to become [max(ai, aj), max(bi, bj), max(ci, cj)].
// For example, if triplets[i] = [2, 5, 3] and triplets[j] = [1, 7, 5], triplets[j] will be updated to [max(2, 1), max(5, 7), max(3, 5)] = [2, 7, 5].
// Return true if it is possible to obtain the target triplet [x, y, z] as an element of triplets, or false otherwise.


/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    let res = new Set();
    for (let triplet of triplets) {
        if (triplet[0] > target[0] || 
            triplet[1] > target[1] || 
            triplet[2] > target[2])
            continue;
        triplet.forEach((elem, index) => {
            if (elem === target[index])
                res.add(index);
        })
    }
    return res.size === 3;
};


// 这道题思路是，
// 先遍历triplets 如果triplets中的某个值 大于target的某个值 直接跳过
// 接下来 如果triplet 中的某个值等于 target中的值
// 则 把这个值加入到set中去
// 最后再比较是这个set 等于 target的长度


let triplets = [[2,5,3],[1,8,4],[1,7,5]], target = [2,7,5];
let triplets1 = [[3,4,5],[4,5,6]], target1 = [3,2,5];
let triplets2 = [[2,5,3],[2,3,4],[1,2,5],[5,2,3]], target2 = [5,5,5];
console.log(mergeTriplets(triplets, target));
console.log(mergeTriplets(triplets1, target1));
console.log(mergeTriplets(triplets2, target2));
