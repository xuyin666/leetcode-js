# 340. Longest Substring with At Most K Distinct Characters
# Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        if len(s) < k: return len(s)
        freq = {}
        l = 0
        r = 0
        maxLength = 0
        while r < len(s):
            freq[s[r]] = freq.get(s[r], 0) + 1
            while len(freq) > k:
                freq[s[l]] = freq[s[l]] - 1
                if freq[s[l]] == 0:
                    del freq[s[l]]
                l = l + 1
            maxLength = max(maxLength, r - l + 1)
            r = r + 1
        return maxLength

s = "eceba" 
k = 2
print(Solution().lengthOfLongestSubstringKDistinct(s, k))
s = "aa"
k = 1
print(Solution().lengthOfLongestSubstringKDistinct(s, k))
