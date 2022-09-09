# 744. Find Smallest Letter Greater Than Target
# Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
# Note that the letters wrap around.
# For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

from typing import List
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        l = 0
        r = len(letters)
        while l < r:
            mid = l + (r - l) // 2
            # 字母之间可以直接比较大小
            if letters[mid] > target:
                r = mid
            else:
                l = l + 1
        # 如果到最后都没有找到，则证明这个字母太大，返回最初的起点，需要重新用第一个值了
        if l == len(letters):
            return letters[0]
        return letters[l]

letters = ["c","f","j"]
target = "a"
print(Solution().nextGreatestLetter(letters, target))
letters = ["c","f","j"]
target = "c"
print(Solution().nextGreatestLetter(letters, target))
letters = ["c","f","j"]
target = "d"
print(Solution().nextGreatestLetter(letters, target))
