/**
 * Given an array of intervals where intervals[i] = [starti, endi], merge all 
 * overlapping intervals, and return an array of the non-overlapping intervals 
 * that cover all the intervals in the input.
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]) // we are making the all intervals in an ascending order sorting
    
    const res = [intervals[0]] // putting first interval in the result array
    
    for (let curr of intervals) {
        prev = res[res.length - 1] //getting the latest/last/previous interval from the result array
        
        //If the last value (second value) of the previous interval is greater than the first value of the current 
        // interval then we have to make the previous interval's second values the greatest in the second value of 
        // the previous interval and the first value of the current interval to merge these two intervals into one.
        if(prev[1] >= curr[0]) {
            prev[1] = Math.max(curr[1], prev[1])
        }
        else { //otherwise we are inserting the current interval in the result array
            res.push(curr)
        }
    }
    
    return res
};