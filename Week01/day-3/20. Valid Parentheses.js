/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let openArr = []
    
    let flag = false
    let isOpenEmpty = false
    let i=0
    let opens = '({['
    let closed = ')}]'
    for(i ; i<s.length ; i++){
        if(opens.includes(s.charAt(i))){
            openArr.push(s.charAt(i))
        }
        else if(closed.includes(s.charAt(i))){
            if(openArr.length != 0){
                if(s.charAt(i)==')' && openArr[openArr.length-1]=='('){
                    openArr.pop()
                }
                else if(s.charAt(i)=='}' && openArr[openArr.length-1]=='{'){
                    openArr.pop()
                }
                else if(s.charAt(i)==']' && openArr[openArr.length-1]=='['){
                    openArr.pop()
                }else{
                    break
                }    
            }else{
                isOpenEmpty = true
            }
                        
        }
        else{
            //means other than brackets
        }
    }
    
    if(openArr.length ==0 && isOpenEmpty != true){
        flag = true
    }
    
    return flag 
};