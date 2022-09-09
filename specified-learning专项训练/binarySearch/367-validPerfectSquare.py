# 367. Valid Perfect Square
# Given a positive integer num, write a function which returns True if num is a perfect square else False.
# Follow up: Do not use any built-in library function such as sqrt.

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        l = 0
        r = num + 1
        while l < r:
            mid = l + (r - l) // 2
            if mid * mid == num:
                return True
            elif mid * mid > num:
                r = mid
            else:
                l = mid + 1
        return False

num = 16
print(Solution().isPerfectSquare(num))
num = 14
print(Solution().isPerfectSquare(num))
