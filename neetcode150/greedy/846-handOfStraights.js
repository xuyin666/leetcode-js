// 846. Hand of Straights
// Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.
// Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    hand.sort(function(a, b){return a - b});
    if (hand.length % groupSize !== 0) return false;
    while (hand.length !== 0) {
        let firstElem = hand[0];
        for (let i = firstElem; i < firstElem + groupSize; i++) {
            let index = hand.indexOf(i);
            if (index !== -1)
                hand.splice(index, 1);
            else
                return false;
        }
    }
    return true;
};

// 这题的思路
// 如果hand的数量不是 groupSize的倍数，直接返回false 
// 先排个序
// 然后在遍历这个hand
// 每一个值i 从 i 到 i + groupSize
// 如果存在，则从hand中删除
// 如果不存在，则返回false
let hand = [1,2,3,6,2,3,4,7,8], groupSize = 3;
let hand1 = [1,2,3,4,5], groupSize1 = 4;
console.log(isNStraightHand(hand, groupSize));
console.log(isNStraightHand(hand1, groupSize1));
