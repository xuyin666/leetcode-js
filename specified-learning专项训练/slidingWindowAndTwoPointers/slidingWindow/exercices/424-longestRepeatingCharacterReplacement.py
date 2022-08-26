# 424. Longest Repeating Character Replacement
# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
# Return the length of the longest substring containing the same letter you can get after performing the above operations.

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # 这个主要是需要比较 字符串长度 和 最长出现的字符串长度
        l, r = 0, 0
        freq = {}
        maxFreq = 1
        maxLen = 0
        while r < len(s):
            freq[s[r]] = freq.get(s[r], 0) + 1
            for key in freq:
                maxFreq = max(maxFreq, freq[key])
            while r - l + 1 - maxFreq > k:
                freq[s[l]] = freq[s[l]] - 1
                for key in freq:
                    maxFreq = max(maxFreq, freq[key])
                l = l + 1
            maxLen = max(maxLen, r - l + 1)
            r = r + 1
        return maxLen

s = "ABAB"
k = 2
print(Solution().characterReplacement(s, k))
s = "AABABBA"
k = 1
print(Solution().characterReplacement(s, k))
