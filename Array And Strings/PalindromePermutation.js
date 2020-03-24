/**
 * Determine if input has a permutation that is a palindrome
 * @param {String} s
 * @return {Boolean}
 */
const PalindromePermutation = function(str){
  const dict = {}
  for(const letter of str){
    if(!dict.hasOwnProperty(letter)){
      dict[letter] = 1
    } else {
      dict[letter] += 1
    }
  }
  let hasOddFreq = false
  for(const key in dict){
    if(key!== ' ' && dict[key]%2===1){
      console.log(key)
      console.log(dict[key])
      if(hasOddFreq){
        return false
      } else {
        hasOddFreq = true
      }
    }
  }
  return true
}
console.log(PalindromePermutation('tact coa'))