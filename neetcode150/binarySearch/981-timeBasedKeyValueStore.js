// 981. Time Based Key-Value Store
// Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.
// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".


var TimeMap = function() {
    this.hashMap = new Map();
    return this;
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (!this.hashMap.has(key)) {
        this.hashMap.set(key, []);
    }
    let arr = this.hashMap.get(key);
    arr.push([value, timestamp]);
    this.hashMap.set(key, arr);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.hashMap.has(key)) {
        return "";
    } else {
        let res = "";
        // the value is already in increasing order by the timestamp
        let arr = this.hashMap.get(key);
        let left = 0, right = arr.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (arr[mid][1] <= timestamp) {
                // in this way we can get the value associated with the closest timestamp 
                res = arr[mid][0];
                left = mid + 1;
            } else {
                // arr[mid][1] is too bigger, not satisfied value;
                right = mid - 1;               
            }
        }
        return res;
    }
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */


//  Input
//  ["TimeMap", "set", "get", "get", "set", "get", "get"]
//  [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
//  Output
//  [null, null, "bar", "bar", null, "bar2", "bar2"]