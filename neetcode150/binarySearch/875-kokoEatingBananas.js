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
    
};

let piles = [3,6,7,11], h = 8;
let piles1 = [30,11,23,4,20], h1 = 5;
let piles2 = [30,11,23,4,20], h2 = 6;
console.log(minEatingSpeed(piles, h));
console.log(minEatingSpeed(piles1, h1));
console.log(minEatingSpeed(piles2, h2));