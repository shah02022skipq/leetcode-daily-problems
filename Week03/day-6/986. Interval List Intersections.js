/**
 * You are given two lists of closed intervals, firstList and secondList, where firstList[i] = [starti, endi] and secondList[j] = [startj, endj]. Each list of intervals is pairwise disjoint and in sorted order.

Return the intersection of these two interval lists.

A closed interval [a, b] (with a <= b) denotes the set of real numbers x with a <= x <= b.

The intersection of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of [1, 3] and [2, 4] is [2, 3].
 */

/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
 var intervalIntersection = function(firstList, secondList) {
    
    let fst = 0
    let sec = 0
    let res = []
    while(fst<firstList.length && sec<secondList.length){
        
        let l = Math.max(firstList[fst][0], secondList[sec][0])
        let h = Math.min(firstList[fst][1], secondList[sec][1])
        
        if(l<=h)
            res.push([l, h])
        
        if(firstList[fst][1] < secondList[sec][1])
            fst++
        else
            sec++
        
    }
    
    return res
};