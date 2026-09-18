class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let start = 0;
        const map = new Set();
        let res = 0;
        
        for(let end = 0; end < s.length; end++){
            while(map.has(s[end])){
                map.delete(s[start])
                start++
            }
            map.add(s[end]);
            res =  Math.max(res, end - start + 1)
        }

        return res
    }
}
