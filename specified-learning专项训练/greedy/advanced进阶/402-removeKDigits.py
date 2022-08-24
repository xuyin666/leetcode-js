# 402. Remove K Digits
# Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.
# 这道题主要是得用栈
# 比较当前的值和栈顶的值，如果当前的值大于栈顶的值就直接删掉
# 不然推入栈中
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        if len(num) == k: return "0"
        arr = [int(dig) for dig in num]
        stack = []
        i = 0
        for i in range(len(arr)):
            curr = arr[i]
            # 如果当前值比栈顶的值大，删掉当前的num[i]
            while(len(stack) > 0 and k > 0 and curr < stack[len(stack) - 1]):
                stack.pop()
                k = k - 1
            # 栈为空，且当前值为0时不入栈 因为这时0 不可能出栈了
            stack.append(curr)
        while k > 0:
            stack.pop()
            k = k - 1
        res = ""
        for i in range (len(stack)):
            res = res + str(stack[i])
        return str(int(res))

num = "1432219"
k = 3
print(Solution().removeKdigits(num, k))
num = "10200"
k = 1
print(Solution().removeKdigits(num, k))
num = "10"
k = 2
print(Solution().removeKdigits(num, k))
