/**
 * Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
    In other words, return true if one of s1's permutations is the substring of s2.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    
    let flag = false
    let right = 0
    let left = 0
    
    let S1 = Array(26).fill(0)
    let S2 = Array(26).fill(0)
       
    for(let i=0 ; i<s1.length ; i++){
        S1[s1.charAt(i).charCodeAt(0) - 97] ++ //97 => ascii code of 'a'
    }
    
    let count=0
    while(right < s2.length){
        S2[s2.charAt(right).charCodeAt(0) - 97]++
        count++
        
        if(count==s1.length){
            
            if(_.isEqual(S1, S2)){
                return true
            }
            
            S2[s2.charAt(left).charCodeAt(0) - 97]--
            left++
            count--
        }
        
        right++
    }
    
    return flag
};