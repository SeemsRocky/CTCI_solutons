/**
 * Determine if s2 is one letter away from creating s1
 * @param {String} originalString
 * @param {String} changedString
 * @return {Boolean}
 */
const oneAway = function(originalString,changedString){
  const ogLen = originalString.length;
  const changedLen = changedString.length;
  
  if(Math.abs(ogLen-changedLen)>=2) return false;

  
  let errorCount = 0

  for(let ogIndex = 0,changeIndex=0; ogIndex<ogLen;ogIndex+=1,changeIndex+=1){
    console.log(errorCount);
    console.log(originalString[ogIndex])
    console.log(changedString[changeIndex])
    if(originalString[ogIndex]!==changedString[changeIndex]){
      if(changedLen<ogLen){
        changeIndex -=1;
      } 
      if(changedLen>ogLen){
        if(errorCount===1){
          return false;
        }
        ogIndex -=1
      }
      errorCount +=1;
    }
  }
  if(!errorCount && ogLen < changedLen) errorCount += 1
  console.log(errorCount)
  return errorCount === 1
}

// console.log(oneAway('pale','pal')) 
// console.log(oneAway('pale','pales'))
// console.log(oneAway('pale','pasle'))
// console.log(oneAway('pale','bale'))
// console.log(oneAway('pale','bal'))
// console.log(oneAway('pale','aple'))
// console.log(oneAway('pale','palesy'))
// console.log(oneAway('pale','pa'))