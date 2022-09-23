/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  
    //This will remove all the characters which are not numeric and alphabetic
    let replaced = s.replace(/[^a-z0-9]/gi, '')
    replaced = replaced.toLowerCase()
    
    if(replaced == replaced.split("").reverse().join("")){
       return true
    }else{
        return false
    }

  
};