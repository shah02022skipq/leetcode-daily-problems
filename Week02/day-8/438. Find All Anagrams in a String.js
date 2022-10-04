/**
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
 * You may return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    
    if(s.length < p.length)
        return []

    if(s == p)
        return [0]
    
    let pHash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let sHash = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
    let left=0
    let right=0
    let idxArr = []
    
    for(let i=0 ; i<p.length ; i++){
        pHash[p.charAt(i).charCodeAt(0) - 97]++
    }
    
    let count = 0
    while(right < s.length){
        sHash[s.charAt(right).charCodeAt(0) - 97] ++
        count++
        
        if(count == p.length){            
            
            if(_.isEqual(pHash, sHash)){
                idxArr.push(left)                
            }
            
            sHash[s[left].charCodeAt(0) - 97]--
            left ++             
            count --
        }
        
        
        right ++
    }
    
    
    return idxArr
};

