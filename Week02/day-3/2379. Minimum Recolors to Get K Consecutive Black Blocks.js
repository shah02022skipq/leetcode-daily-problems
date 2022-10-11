/**
 * You are given a 0-indexed string blocks of length n, where blocks[i] is either 'W' or 'B',
 *  representing the color of the ith block. The characters 'W' and 'B' denote the 
 *  colors white and black, respectively.

    You are also given an integer k, which is the desired number of consecutive black blocks.
    In one operation, you can recolor a white block such that it becomes a black block.

    Return the minimum number of operations needed such that there is at least one occurrence of k
    consecutive black blocks.
 */

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
 var minimumRecolors = function(blocks, k) {
  
    let right=0
    
    let minOp = Infinity
    let str = ''
    let count=0
    
    for(right; right<blocks.length ; right++){
        
        str += blocks.charAt(right)
        count ++
        
        if(count == k){
           
            let c = 0
            let replacements=0
            while(c <= right){
                if(str.charAt(c) == 'W')
                    replacements++
                
                c++
            }

            minOp = Math.min(minOp, replacements)
            str = str.slice(1)
            count -- 
            
        }
    }
    
    return minOp
    
};