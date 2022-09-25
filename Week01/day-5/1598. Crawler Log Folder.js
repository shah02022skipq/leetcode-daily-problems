/**
 * The Leetcode file system keeps a log each time some user performs a change folder operation.
 * 
    The operations are described below:

    "../" : Move to the parent folder of the current folder. (If you are already in the main folder, remain in the same folder).
    "./" : Remain in the same folder.
    "x/" : Move to the child folder named x (This folder is guaranteed to always exist).
    You are given a list of strings logs where logs[i] is the operation performed by the user at the ith step.
    The file system starts in the main folder, then the operations in logs are performed.
    
    Return the minimum number of operations needed to go back to the main folder after the change folder operations.
 */

/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    
    let step = ''
    let minSteps = 0
    for(let i=0 ; i<logs.length ; i++){
        step = logs[i]
        
        if(step.charAt(0) == '.' && step.charAt(1) == '.'){ // "../" => -1
            if(minSteps != 0)
                minSteps += -1
        }
        else if(step.charAt(0) != '.'){ // "x/" => +1
            minSteps += 1
        }
    }
    
    return minSteps
};