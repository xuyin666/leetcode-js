// 4. Median of Two Sorted Arrays
// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
// The overall run time complexity should be O(log (m+n)).

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // 这道题的思路是 先找到 nums1，nums2中短的那一个
    // 然后从中点把nums[1]分开，
    // 再者要找到一个点 ALeft < BRight 且 BLeft < ARight
    // 可以把短的那个数组 最左边放为 -Neg，最右边放为Neg
    let shortNums, longNums;
    if (nums1.length >= nums2.length) {
        shortNums = nums2;
        longNums = nums1;
    } else {
        shortNums = nums1;
        longNums = nums2;
    }
    let shortLen = shortNums.length;
    let longLen = longNums.length;
    let l = 0, r = shortLen - 1;
    let half = Math.floor((shortLen + longLen) / 2);
    // shortLen = 4 , longLen = 5
    // [1, 2, 4, 5]     [1, 2, 3, 6, 7]
    // i = 1            j = 1
    // half = 4
    // shortLeft = [1, 2] longLeft = [1, 2]
    // shortRight = [4, 5] longRight = [3, 6, 7]
    while (true) {
        let i = Math.floor((l + r) / 2); // mid in the short nums
        let j = half - i - 2; // (half - (i + 1) - i) index in the longNums
        let shortLeft, shortRight, longLeft, longRight;
        if (i < 0)
            shortLeft = Number.MIN_SAFE_INTEGER
        else
            shortLeft = shortNums[i];

        if (i + 1 >= shortLen)
            shortRight = Number.MAX_SAFE_INTEGER
        else 
            shortRight = shortNums[i + 1];

        if (j < 0) 
            longLeft = Number.MIN_SAFE_INTEGER
        else 
            longLeft = longNums[j];

        if (j + 1 >= longLen)
            longRight = Number.MAX_SAFE_INTEGER
        else
            longRight = longNums[j + 1];

        if (shortLeft <= longRight && longLeft <= shortRight) {
            if ((shortLen + longLen)%2 === 1) {
                // because shortRight >= all ShortLeft and shortRight >= all longRight
                // same for longRight
                // so we need to choose the min value of shortRight and shortLeft;
                return  Math.min(shortRight, longRight);
            } else {
                return (Math.max(shortLeft, longLeft) + 
                        Math.min(shortRight, longRight)) / 2;
            } 
        } else if (shortLeft > longRight) {
            // mid in the shortNum is too big
            r = i - 1;
        } else {
            l = i + 1;
        }
    }
};


let nums1 = [1,3], nums2 = [2];
let nums3 = [1,2], nums4 = [3,4];
console.log(findMedianSortedArrays(nums1, nums2));
console.log(findMedianSortedArrays(nums3, nums4));
