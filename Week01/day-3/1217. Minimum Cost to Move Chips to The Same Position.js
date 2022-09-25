/**
 * We have n chips, where the position of the ith chip is position[i].

    We need to move all the chips to the same position. In one step, we can change the 
    position of the ith chip from position[i] to:

    position[i] + 2 or position[i] - 2 with cost = 0.
    position[i] + 1 or position[i] - 1 with cost = 1.
    
    Return the minimum cost needed to move all the chips to the same position.
 */

/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    
    let odd =0 ;
    let even =0; 
    
    for(let i=0 ; i<position.length ; i++){
        position[i] % 2 == 0 ? even++ : odd++
    }
    
    return Math.min(even, odd)
};