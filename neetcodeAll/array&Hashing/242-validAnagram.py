# 242. Valid Anagram
# Given two strings s and t, return true if t is an anagram of s, and false otherwise.
# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        hashMapS = {}
        hashMapT = {}
        for ch in s:
            hashMapS[ch] = hashMapS.get(ch, 0) + 1
        for ch in t:
            hashMapT[ch] = hashMapT.get(ch, 0) + 1
        for elem in hashMapS:
            if elem in hashMapT and hashMapS[elem] == hashMapT[elem]:
                continue
            return False
        return True


s = "anagram"
t = "nagaram"
print(Solution().isAnagram(s, t))
s = "rat"
t = "car"
print(Solution().isAnagram(s, t))
