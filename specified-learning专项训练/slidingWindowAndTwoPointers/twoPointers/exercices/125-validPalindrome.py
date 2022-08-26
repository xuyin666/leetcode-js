# 125. Valid Palindrome
# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
# Given a string s, return true if it is a palindrome, or false otherwise.

class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        l = 0
        r = len(s) - 1
        # isalnum 判断是否为数字或者字母
        while l < r:
            if not ((ord(s[l]) >= ord('a') and ord(s[l]) <= ord('z')) or ((ord(s[l]) >= ord('0') and ord(s[l]) <= ord('9')))) :
                l = l + 1
                continue
            if not ((ord(s[r]) >= ord('a') and ord(s[r]) <= ord('z')) or ((ord(s[r]) >= ord('0') and ord(s[r]) <= ord('9')))) :
                r = r - 1
                continue
            if s[l] != s[r]: return False
            l = l + 1
            r = r - 1
        return True

s = "A man, a plan, a canal: Panama"
print(Solution().isPalindrome(s))
s = "race a car"
print(Solution().isPalindrome(s))
s = " "
print(Solution().isPalindrome(s))
s = "0P"
print(Solution().isPalindrome(s))
