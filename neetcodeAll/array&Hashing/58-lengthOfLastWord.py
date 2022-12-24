# 58. Length of Last Word
# Given a string s consisting of words and spaces, return the length of the last word in the string.
# A word is a maximal substring consisting of non-space characters only.

class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        i = len(s) - 1
        while i>= 0 and s[i] == " ":
            i = i - 1
        res = 0
        while i >= 0 and s[i] != " ":
            i = i - 1
            res = res + 1
        return res

# 这道题的思路是从后往前数，先把空格去掉
# 然后从第一个不是空格的值开始，往前数，直到碰到空格为止
# 这之间的这个长度就是我们寻找的长度

s = "Hello World"
print(Solution().lengthOfLastWord(s))
s = "   fly me   to   the moon  "
print(Solution().lengthOfLastWord(s))
s = "luffy is still joyboy"
print(Solution().lengthOfLastWord(s))
