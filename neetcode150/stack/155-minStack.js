// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.


// 这道题的思路是用两个stack，一个记录正常值，一个记录最小值
var MinStack = function() {
    this.valStack = [];
    this.minValStack = [];
    return this;
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.valStack.push(val);
    if (this.minValStack.length === 0) {
        this.minValStack.push(val);
    } else {
        // we need to check if val is smaller than the top element or not
        let topMinVal = this.minValStack[this.minValStack.length - 1];
        if (val < topMinVal) {
            this.minValStack.push(val);
        } else {
            this.minValStack.push(topMinVal);
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.valStack.pop();
    this.minValStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.valStack[this.valStack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minValStack[this.minValStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

//  Input
//  ["MinStack","push","push","push","getMin","pop","top","getMin"]
//  [[],[-2],[0],[-3],[],[],[],[]]
 
//  Output
//  [null,null,null,null,-3,null,0,-2]