/**
 * You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:

Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
Align the substitution table with the regular English alphabet.
Each letter in message is then substituted using the table.
Spaces ' ' are transformed to themselves.
For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
Return the decoded message.
 */

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
 var decodeMessage = function(key, message) {
    let arr = key.split(' ')
    let charArr=[]
    for(let i=0 ; i<arr.length ; i++){
        let token = arr[i].split('')
        for(let j=0 ; j<token.length ; j++){
            charArr.push(token[j])
        }
    }
    charArr = [...new Set(charArr)]
    let res = ''
    token = message.split('')
    for(i=0 ; i<token.length ; i++){
        if(token[i] == ' '){
            res += ' '
        }else{
            for(j=0 ; j<charArr.length ; j++){
                if(token[i] == charArr[j]){
                    res += String.fromCharCode((j+97))
                }
            }
        }
    }
    
    return res
};