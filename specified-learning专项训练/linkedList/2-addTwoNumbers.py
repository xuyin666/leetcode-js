# 2. Add Two Numbers
# You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
# You may assume the two numbers do not contain any leading zero, except the number 0 itself.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

from typing import Optional
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode
        curr = dummy
        carry = 0
        while l1 != None or l2 != None or carry != 0:
            v1 = l1.val if l1 != None else 0
            v2 = l2.val if l2 != None else 0
            total = v1 + v2 + carry
            reste = total % 10
            carry = total // 10 

            curr.next = ListNode(reste)
            l1 = l1.next if l1 != None else None
            l2 = l2.next if l2 != None else None
            curr = curr.next
        return dummy.next

    # 我的方法
    # def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    #     dummy = ListNode()
    #     tail = dummy
    #     addin = 0
    #     while newHead1 != None and newHead2 != None:
    #         totalVal = newHead1.val + newHead2.val + addin
    #         addin = int(totalVal / 10)
    #         reste = totalVal % 10
    #         tail.next = ListNode(reste)
    #         newHead1 = newHead1.next
    #         newHead2 = newHead2.next
    #         tail = tail.next
    #     while newHead1 != None:
    #         totalVal = newHead1.val + addin
    #         addin = int(totalVal / 10)
    #         reste = totalVal % 10 
    #         tail.next = ListNode(reste)
    #         newHead1 = newHead1.next
    #         tail = tail.next
    #     while newHead2 != None:
    #         totalVal = newHead2.val + addin
    #         addin = int(totalVal / 10)
    #         reste = totalVal % 10 
    #         tail.next = ListNode(reste)
    #         newHead2 = newHead2.next
    #         tail = tail.next
    #     if addin != 0:
    #         tail = ListNode(addin)
    #     return dummy.next