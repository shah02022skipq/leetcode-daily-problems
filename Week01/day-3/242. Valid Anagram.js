/**
 *  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or 
    phrase, typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  
    let flag = false
    if(s != t){ //means if both the strings are not equal
        
        if(t.length > s.length || s.includes(t))
            return false
        
        let temp = ''
        let sArr = s.split('')
        let tArr = t.split('')
        for(let i=0 ; i<tArr.length ; i++){
            
            if(sArr.includes(tArr[i])){
                temp += tArr[i]
                sArr[sArr.indexOf(tArr[i])] = -1 
            }
        }
        
        if(temp == t){
            return true
        }else{
            return false
        }
        
    }else{
        return true
    }
    
    return flag  
};