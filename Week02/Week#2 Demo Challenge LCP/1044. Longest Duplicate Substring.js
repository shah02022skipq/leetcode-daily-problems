/**
 * Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap.

Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".
 */

/**
 * @param {string} s
 * @return {string}
 */
 var longestDupSubstring = function(S) {
    // convert string to char code array
    const charArr = [...S].map(x => x.charCodeAt() - 'a'.charCodeAt());
    const SIZE = S.length;
    
    // Binary Search
    let low = 1, high = SIZE, maxLen = [0, 0];
    
    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const result = rollingHash(mid);
        
        if(!result.length) high = mid-1;
        else {
            maxLen = result;
            low = mid+1;
        }
    }
    
    return S.slice(maxLen[0], maxLen[1]);
    
    // Rolling hash algorithm
    function rollingHash(len) {
        const seen = new Set();
        const PRIME = 2**47 - 1;
        const BASE = 26;
        let MOST_SIG_DIGIT = 1;
        let hashKey = 0;
        
        for (let i = 0; i < len; i++) {
            // generate the most significat digit
            MOST_SIG_DIGIT = (MOST_SIG_DIGIT * BASE) % PRIME;
            // build the initial hash window
            hashKey = (hashKey * BASE + charArr[i]) % PRIME;
        }

        seen.add(hashKey);

        for (let i = len; i < SIZE; i++) {
            hashKey *= BASE;
            // remove the first char
            hashKey -= MOST_SIG_DIGIT * charArr[i-len] % PRIME;
            hashKey += PRIME;
            // add the next char
            hashKey = (hashKey + charArr[i]) % PRIME;

            if (seen.has(hashKey)) return [i-len+1, i+1];
            seen.add(hashKey);
        }
        return [];
    }
};