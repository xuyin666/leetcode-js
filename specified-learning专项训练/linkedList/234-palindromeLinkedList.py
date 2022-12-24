# 234. Palindrome Linked List
# Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional

class Solution:
    # 不使用额外的内存
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        slow = head
        fast = head
        while fast != None and fast.next != None:
            fast = fast.next.next
            slow = slow.next
        
        # slow即为需要reverse的head
        prev = None
        while slow != None:
            tmp = slow.next
            slow.next = prev
            prev = slow
            slow = tmp
        # prev 有结尾，它的末端是None
        while prev != None:
            if head.val != prev.val:
                return False
            head = head.next
            prev = prev.next
        return True

    # 使用额外的内存
    # def isPalindrome(self, head: Optional[ListNode]) -> bool:
    #     arr = []
    #     while head != None:
    #         arr.append(head.val)
    #         head = head.next
    #     i = 0
    #     j = len(arr) - 1
    #     while i <= j:
    #         if arr[i] != arr[j]:
    #             return False
    #         i = i + 1
    #         j = j - 1
    #     return True

# 这道题有两个思路，使用额外的内存和不使用额外的内存
# 使用额外的内存，思路就比较简单，直接遍历这个list，然后将值全部放入一个arr中
# 再来判断这个arr里面的值是否为回文
# 不使用额外的内存，这个需要用快慢指针
# 将中间及以后的node全部反转过来，再来判断是否为回文