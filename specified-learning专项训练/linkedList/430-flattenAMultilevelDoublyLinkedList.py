# 430. Flatten a Multilevel Doubly Linked List
# You are given a doubly linked list, which contains nodes that have a next pointer, a previous pointer, and an additional child pointer. This child pointer may or may not point to a separate doubly linked list, also containing these special nodes. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure as shown in the example below.
# Given the head of the first level of the list, flatten the list so that all the nodes appear in a single-level, doubly linked list. Let curr be a node with a child list. The nodes in the child list should appear after curr and before curr.next in the flattened list.
# Return the head of the flattened list. The nodes in the list must have all of their child pointers set to null.


# Definition for a Node.
class Node:
    def __init__(self, val, prev, next, child):
        self.val = val
        self.prev = prev
        self.next = next
        self.child = child

from typing import Optional
class Solution:
    def getEnd(self, head):
        while head.next != None:
            head = head.next
        return head        

    def flatten(self, head: 'Optional[Node]') -> 'Optional[Node]':
        if head == None:
            return None
        curr = head
        while curr != None:
            if curr.child != None:
                prevNode = curr
                nextNode = curr.next
                childHead = self.flatten(curr.child)
                childEnd = self.getEnd(curr.child)
                prevNode.next = childHead 
                if childHead != None:
                    childHead.prev = prevNode 
                childEnd.next = nextNode 
                if nextNode != None:
                    nextNode.prev = childEnd 
                curr.child = None
                curr = nextNode
            else:
                curr = curr.next
        return head