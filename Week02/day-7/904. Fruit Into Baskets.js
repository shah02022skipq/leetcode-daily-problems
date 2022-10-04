/**
 * You are visiting a farm that has a single row of fruit trees arranged from left to right. 
 * The trees are represented by an integer array fruits where fruits[i] is the type of fruit 
 * the ith tree produces.   
 * 
 * You want to collect as much fruit as possible. However, the owner has some strict rules that 
 * you must follow:
        -> You only have two baskets, and each basket can only hold a single type of fruit. 
            There is no limit on the amount of fruit each basket can hold.
        -> Starting from any tree of your choice, you must pick exactly one fruit from every tree
            (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
        -> Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
    
    Given the integer array fruits, return the maximum number of fruits you can pick.
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */
 var totalFruit = function(fruits) {
    
    const types = new Map();
    
    let frts = 0
    let left = -1;
    
    for (itms of fruits) {
        types.has(itms) ? types.set(itms, types.get(itms) + 1) : types.set(itms, 1);
       
        while (2 < types.size) {
            
            types.set(fruits[++left], types.get(fruits[left]) - 1);
            
            if (types.get(fruits[left]) === 0) {
                types.delete(fruits[left]);
            }
        }
        frts = Math.max(frts, [...types.values()].reduce((s, c) => s + c, 0));
        
    }
    
    
    return frts;
    
};