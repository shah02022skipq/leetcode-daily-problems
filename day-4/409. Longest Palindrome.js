/**Given a string s which consists of lowercase or uppercase letters, return the 
 * length of the longest palindrome that can be built with those letters.

    Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
        
    let largP = 0
    if(isPalindrome(s) || s.length==1)
        return s.length
    else{
        let uniq = [... new Set(s.split(''))]
        let flag = false
        console.log(uniq)
        for(let i=0 ; i<uniq.length ; i++){
            
            let times = timesChar(s, uniq[i])
            
            if(times % 2 == 0){//if even
                largP += times 
            }
            else{ //if odd   
                if(times != 1)
                    largP += (times-1)
                
                flag = true
            }
        }
        
        if(flag==true)
            largP += 1
    }
    
    return largP
};

const timesChar = (str, ch) => {
    let count=0
    for(let i=0 ; i<str.length ; i++){
        if(str.charAt(i) == ch)
            count ++
    }    
    return count
}

const isPalindrome = (str) => {
    return (str == str.split('').reverse().join(''))
}