// 211. Design Add and Search Words Data Structure

// Design a data structure that supports adding new words and finding if a string matches any previously added string.
// Implement the WordDictionary class:
// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.


var WordDictionary = function() {
    
};

/** 
 * @param {string} word
 * @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
    
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


//  Input
//  ["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
//  [[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
//  Output
//  [null,null,null,null,false,true,true,true]