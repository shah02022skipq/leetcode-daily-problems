/**
 *  A sentence is a string of single-space separated words where each word
 *  consists only of lowercase letters. A word is uncommon if it appears 
 *  exactly once in one of the sentences, and does not appear in the other sentence.
    Given two sentences s1 and s2, return a list of all the uncommon words. You may 
    return the answer in any order.
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
 var uncommonFromSentences = function(s1, s2) {
    let str = s1.split(' ').concat(s2.split(' '))
    let res = []
    // console.log([... new Set(str)])
    for(let i=0 ; i<str.length ; i++){
        let count = 0
        for(let j=0; j<str.length ; j++){
            if(str[i] == str[j]){
                count ++
            }
        }
        
        if(count < 2){
            res.push(str[i])
        }
        
        // console.log(str[i])
    }
    
    return res
    
    
};