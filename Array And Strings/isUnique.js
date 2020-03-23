/** 
* Implement an algorithm if a string has all unique characters
* Assuming S only contains ASCII characters and length is 0 or greater
* Space Complexity - O(n)
* Time Complexity - O(n)
* @param {string} s1
* @param {string} s2
* @return {boolean}
*/
function isUnique(s){
  const dict = {}
  for(const letter of s){
    if(dict.hasOwnProperty(letter)){
      return false
    }
    dict[letter] = true
  }
  return true
}

