class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        const charMap = new Map()
        for(let char of s){
            if(charMap.has(char)){
                charMap.set(char, charMap.get(char) + 1)
            } else {
                charMap.set(char, 1)
            }
        }

        for(let char of t){
            if(!charMap.has(char)) return false

            if(charMap.get(char) === 1) {
                charMap.delete(char)
            } else {
                charMap.set(char, charMap.get(char) - 1)
            }
        }

        return charMap.size === 0
    }
}
