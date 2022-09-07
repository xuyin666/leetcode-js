# 69. Sqrt(x)
# Given a non-negative integer x, compute and return the square root of x.
# Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
# Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

class Solution:
    def mySqrt(self, x: int) -> int:
        l = 0
        r = x + 1
        while l < r:
            mid = l + (r - l) // 2
            if mid * mid > x:
                r = mid
            else:
                l = mid + 1
        return l - 1

x = 4
print(Solution().mySqrt(x))
x = 8
print(Solution().mySqrt(x))
