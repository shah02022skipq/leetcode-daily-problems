/**
 *  You are given an integer array cards where cards[i] represents the value of the ith card.
 *  A pair of cards are matching if the cards have the same value.

    Return the minimum number of consecutive cards you have to pick up to have a pair of
    matching cards among the picked cards. If it is impossible to have matching cards, return -1.
 */

/**
 * @param {number[]} cards
 * @return {number}
 */
 var minimumCardPickup = function(cards) {
    
    let minNo=Infinity
    let map = new Map()
    
    for(let i=0 ; i<cards.length ; i++){

        if(map.has(cards[i])){
            
            let p = map.get(cards[i]) //give the value of last element which is == cards[i]
            let len = i-p +1
            
            minNo = Math.min(minNo, len)
        }
        map.set(cards[i], i) //index will be value and value of cards[i] will be index at map 
    }
    
    return minNo == Infinity ? -1 : minNo
        
    
};