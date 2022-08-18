// 146. LRU Cache
// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.
function Node(key, val, prev, next) {
    this.key = (key !== undefined ? key : 0);
    this.val = (val !== undefined ? val : 0);
    this.prev = (prev !== undefined ? prev : undefined);
    this.next = (next !== undefined ? next : undefined);
}

/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
    // save the key with the node
    this.cache = new Map();
    this.capacity = capacity;

    // least recently used
    this.lru = new Node();
    // most recently used
    this.mru = new Node();

    this.lru.next = this.mru;
    this.lru.prev = null;

    this.mru.prev = this.lru;
    this.mru.next = null;

    return this;
};


// we will add the right
LRUCache.prototype.add = function(node) {
    let prevMRU = this.mru.prev;
    prevMRU.next = node;
    node.prev = prevMRU;
    node.next = this.mru;
    this.mru.prev = node;
}

// we will delete from the list
LRUCache.prototype.delete = function(node) {
    let nextNode = node.next;
    let prevNode = node.prev;
    prevNode.next = nextNode;
    nextNode.prev= prevNode;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.cache.has(key)) {
        let node = this.cache.get(key);
        this.delete(node);
        this.add(node)
        return this.cache.get(key).val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        // there is a oldNode
        let oldNode = this.cache.get(key);
        this.delete(oldNode);
    } 
    let newNode = new Node(key, value);
    this.add(newNode);
    this.cache.set(key, newNode);
    // if we have too many element
    // we need to delete the lru
    if (this.cache.size > this.capacity) {
        // to ensure that we will never have too many elements
        this.cache.delete(this.lru.next.key);
        this.delete(this.lru.next);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]


// 这道题的思路是 双链表
// 最左边的node指向LRU，
// 最右边的node指向most recently used
// 然后添加两个方法 remove(), add(node)