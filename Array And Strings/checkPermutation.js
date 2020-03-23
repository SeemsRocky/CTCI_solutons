/**
 * Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const getAnagram = function(str) {
  const dict = {}
  for(const letter of str){
    if(dict.hasOwnProperty(letter)){
      dict[letter] += 1;
    } else {
      dict[letter] = 1;
    }
  }
  return dict
}
const checkAnagrams = function(dict1, dict2){
  if(Object.keys(dict1).length !== Object.keys(dict2).length) return false
  for(const key in dict1){
    if(dict1[key]!==dict2[key]){
      return false
    }
  }
  return true
}
const checkPermutation = function(s1, s2) {
  if(s1.length > s2.length) return false;

  const s1Dict = getAnagram(s1);

  for(let i = 0; i < s2.length-s1.length; i+=1){
    const currString = s2.substring(i,i+s1.length)
    if(!checkAnagrams(s1Dict,getAnagram(currString))){
      return false
    }
  }
  return true
};