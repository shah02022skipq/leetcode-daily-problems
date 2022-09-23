/**
 * International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

 
 */

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    let codes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..",
                 "--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-",
                 "-.--","--.."]
    let resArr = []
    for(let i=0 ; i<words.length ; i++){
        let tokens = words[i].split('')
        let resStr = ''
        for(let j=0 ; j<tokens.length ; j++){
            let ascii = tokens[j].charCodeAt(0)
            let idx = ascii-97 
            
            resStr += codes[idx]
        }
        
        resArr.push(resStr)
    }
    
    // console.log(resArr)
    resArr = [... new Set(resArr)]
    
    return resArr.length
    
};