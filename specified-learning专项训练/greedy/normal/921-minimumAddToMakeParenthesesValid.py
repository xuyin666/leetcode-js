# 921. Minimum Add to Make Parentheses Valid
# A parentheses string is valid if and only if:
# It is the empty string,
# It can be written as AB (A concatenated with B), where A and B are valid strings, or
# It can be written as (A), where A is a valid string.
# You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.
# For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
# Return the minimum number of moves required to make s valid.

# 这题的思路是 如果是'('则推入栈中，如果是')' 然后栈顶元素是"(",推出'('
# 不然的话 把')'也推入栈中
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        arr = []
        for i in range(len(s)):
            if s[i] == "(":
                arr.append(s[i])
            else:
                if len(arr) != 0 and (arr[len(arr) - 1] == "("):
                    arr.pop()
                else:
                    arr.append(s[i])
        return len(arr)

s = "())"
print(Solution().minAddToMakeValid(s))
s = "((("
print(Solution().minAddToMakeValid(s))
