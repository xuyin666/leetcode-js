# 328. Odd Even Linked List
# Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.
# The first node is considered odd, and the second node is even, and so on.
# Note that the relative order inside both the even and odd groups should remain as it was in the input.
# You must solve the problem in O(1) extra space complexity and O(n) time complexity.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head == None or head.next == None:
            return head
        odd = head
        evenHead = head.next
        even = head.next
        # even == None 意味着我们是奇数个数，我们到达了最后一个node
        # even.next == None 意味着我们是偶数个数，我们到达了最后一个node
        while even != None and even.next != None:
            odd.next = odd.next.next
            even.next = even.next.next
            odd = odd.next
            even = even.next
        # 连接奇数尾巴和偶数头部
        odd.next = evenHead
        return head

# 这道题思路是用双指针，先将奇数Node全部连接起来
# 然后呢再讲偶数Node全部连接起来
# 最后用奇数的尾部接着偶数的头部