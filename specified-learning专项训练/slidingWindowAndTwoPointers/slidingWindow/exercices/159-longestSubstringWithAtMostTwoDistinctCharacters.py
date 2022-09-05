# 159. Longest Substring with At Most Two Distinct Characters
# Given a string s, return the length of the longest substring that contains at most two distinct characters.

class Solution:
    def lengthOfLongestSubstringTwoDistinct(self, s: str) -> int:
        if len(s) < 2: return 0
        maxLength = 0
        l = 0
        r = 0
        freq = {}
        while r < len(s):
            freq[s[r]] = freq.get(s[r], 0) + 1
            while len(freq) > 2:
                freq[s[l]] = freq[s[l]] - 1
                if freq[s[l]] == 0:
                    del freq[s[l]]
                l = l + 1
            maxLength = max(maxLength, r - l + 1)
            r = r + 1
        return maxLength


s = "eceba"
print(Solution().lengthOfLongestSubstringTwoDistinct(s))
s = "ccaabbb"
print(Solution().lengthOfLongestSubstringTwoDistinct(s))
