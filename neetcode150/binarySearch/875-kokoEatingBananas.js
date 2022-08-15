// 875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // 这道题的思路
    // 这个koko吃东西的最多一小时是 max(...piles)
    // 然后再从1 到 这个最大值找
    // 用binary search
    // h 一定在 1 到 max 之间
    let maxValue = Math.max(...piles);
    let l = 1, r = maxValue;
    let res = r;
    while (l <= r) {
        // the speed of eating
        let mid = Math.floor((l + r) / 2)
        let time = 0; // the time to finish all the bananas
        for (let pile of piles) {
            time = time + Math.ceil(pile / mid);
        }
        if (time <= h) {
            // it takes not many time to eat the banana
            // so we need to decrease the mid;
            // mid is too big
            r = mid - 1;
            res = Math.min(res, mid);
        } else if (time > h) {
            // out of time, mid too small
            // it takes too many times to eat the banana
            // we will increase the mid;
            l = mid + 1;
        }
    }
    return res;
};

let piles = [3,6,7,11], h = 8;
let piles1 = [30,11,23,4,20], h1 = 5;
let piles2 = [30,11,23,4,20], h2 = 6;
console.log(minEatingSpeed(piles, h));
console.log(minEatingSpeed(piles1, h1));
console.log(minEatingSpeed(piles2, h2));
