/**
 * Compress a string by replacing consecutive letters with numbers 
 * if compressed string is longer than original string then return original string
 * eg: aaaaa -> a5,  abbbbddeee -> a1b4d2e3 
 * @param {String} s
 * @return {String}
 */

const compress = function(s){
  let result = '';
  let count = 0;
  let prevLetter = s[0]
  for(let i=0; i<=s.length; i+=1){
    if(s[i]!== prevLetter){
      result = `${result}${prevLetter}${count}`
      count = 1
      prevLetter = s[i]
    } else {
      count += 1
    }
  }
  return result.length > s.length ? s : result;
}

// console.log(compress('aaaa'))
// console.log(compress('abbbbddeee'))
// console.log(compress('abaa'))