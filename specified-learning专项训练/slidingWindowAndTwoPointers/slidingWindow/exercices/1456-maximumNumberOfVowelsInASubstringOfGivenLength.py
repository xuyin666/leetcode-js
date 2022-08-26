# 1456. Maximum Number of Vowels in a Substring of Given Length
# Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.
# Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowel = ['a', 'e', 'i', 'o', 'u']
        count = 0
        for i in range(k):
            if s[i] in vowel:
                count = count + 1
        maxCount = count
        for i in range(k, len(s)):
            if s[i] in vowel:
                count = count + 1
            if s[i - k] in vowel:
                count = count - 1
            maxCount = max(maxCount, count)            
        return maxCount

s = "abciiidef"
k = 3
print(Solution().maxVowels(s, k))
s = "aeiou"
k = 2
print(Solution().maxVowels(s, k))
s = "leetcode"
k = 3
print(Solution().maxVowels(s, k))
s = "rhythms"
k = 4
print(Solution().maxVowels(s, k))
s = "tryhard"
k = 4
print(Solution().maxVowels(s, k))

