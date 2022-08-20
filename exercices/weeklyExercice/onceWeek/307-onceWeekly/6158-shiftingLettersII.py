# 6158. Shifting Letters II
# You are given a string s of lowercase English letters and a 2D integer array shifts where shifts[i] = [starti, endi, directioni]. For every i, shift the characters in s from the index starti to the index endi (inclusive) forward if directioni = 1, or shift the characters backward if directioni = 0.
# Shifting a character forward means replacing it with the next letter in the alphabet (wrapping around so that 'z' becomes 'a'). Similarly, shifting a character backward means replacing it with the previous letter in the alphabet (wrapping around so that 'a' becomes 'z').
# Return the final string after all such shifts to s are applied.

# 用差分法
from typing import List
class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        diff = [0] * len(s)
        for i in range(len(shifts)):
            start, end, dir = shifts[i][0], shifts[i][1], shifts[i][2] 
            if (dir == 1):
                diff[start] = diff[start] + 1
                if (end + 1 < len(s)):
                    diff[end + 1] = diff[end + 1] - 1
            else :
                diff[start] = diff[start] - 1
                if (end + 1 < len(s)):
                    diff[end + 1] = diff[end + 1] + 1
        newStr = ""
        for i in range(0, len(s)):
            # if the first elem of diff, we can't add the previous value
            if (i != 0):
                diff[i] = diff[i] + diff[i - 1]
            # if diff[i] = -1, a will be z 
            # if diff[i] = 1, z will be a
            change  = (ord(s[i]) - ord('a') + diff[i] + 26) % 26
            newStr = newStr + chr(ord('a') + change)
        return newStr

s = "abc"
shifts = [[0,1,0],[1,2,1],[0,2,1]]
print(Solution().shiftingLetters(s, shifts))
s = "dztz"
shifts = [[0,0,0],[1,1,1]]
print(Solution().shiftingLetters(s, shifts))
