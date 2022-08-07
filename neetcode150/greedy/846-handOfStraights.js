// 846. Hand of Straights
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    
};

let hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;
let hand1 = [1,2,3,4,5], groupSize1 = 4;
console.log(isNStraightHand(hand, groupSize));
console.log(isNStraightHand(hand1, groupSize1));
