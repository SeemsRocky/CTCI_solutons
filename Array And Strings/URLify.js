/** 
 * Turn string into a URL, given S with n characters, can be done in place
 * @param {String} s
 * @param {Integer} n
 * @return {String}
 */
// Time => O(n) 
// Space => O(n)
const URLify = function(s,n){
  let result = ""
  for(let i = n-1; i >= 0; i-=1){
    if(s[i]!==' '){
      result = s[i] + result
    } else {
      result = "%20" + result
    }
  }
  return result
}

console.log(URLify('Mr John Smith    ',13))