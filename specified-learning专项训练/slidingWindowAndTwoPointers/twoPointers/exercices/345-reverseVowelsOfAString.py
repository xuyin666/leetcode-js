# 345. Reverse Vowels of a String
# Given a string s, reverse only all the vowels in the string and return it.
# The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

class Solution:
    def reverseVowels(self, s: str) -> str:
        vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        chS = [ch for ch in s]
        l = 0
        r = len(chS) - 1
        while (l < r):
            if not (chS[l] in vowels):
                l = l + 1
                continue
            if not (chS[r] in vowels):
                r = r - 1
                continue
            chS[l], chS[r] = chS[r], chS[l]
            l = l + 1
            r = r - 1
        return "".join(chS)


s = "hello"
print(Solution().reverseVowels(s))
s = "leetcode"
print(Solution().reverseVowels(s))
