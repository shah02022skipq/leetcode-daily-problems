/**
 *  Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
    In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let res = [1]
    
    if(rowIndex == 0) //if index==0
        return res
    else if(rowIndex == 1){ //if index==1
        res.push(1)
        return res
    }
    else{ //else if we have index > 1 
        
        let prev = [1, 1] // this is the previous array for index 1      
        rowIndex = rowIndex-2 // we are subtracting two from the rowIndex because 
                              // we already have done with the previous two rows by having 
                              // previous array of [1,1], means we are now on 3rd row as 0th                                // index  
        for(let i=0 ; i<=rowIndex ; i++){
            
            for(let j=0 ; j<prev.length-1 ; j++){
                let sum = prev[j] + prev[j+1]
                res.push(sum)
            }
            res.push(1) // completing the res array
            prev = res // assigning res to prev array 
            if(i != rowIndex) //when it is last iteration, then do not change the res array
                res = [1]
        }      
    }    
    return res
};