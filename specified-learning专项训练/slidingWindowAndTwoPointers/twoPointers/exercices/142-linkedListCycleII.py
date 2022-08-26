# 142. Linked List Cycle II
# Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
# There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
# Do not modify the linked list.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if head == None or head.next == None:
            return None
        fast = head
        slow = head
        
        while fast != None and fast.next != None:
            slow = slow.next
            fast = fast.next.next
            if slow == fast:
                curr = head
                while curr != slow:
                    curr = curr.next
                    slow = slow.next
                return curr
        return None
        # if head == None or head.next == None:
        #     return None
        # freq = set()
        # slow = head
        # while slow != None :
        #     if slow in freq:
        #         return slow
        #     freq.add(slow)
        #     slow = slow.next
        # return None