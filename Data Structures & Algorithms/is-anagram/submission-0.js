class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //If lengths are different, cannot be anagrams
        if(s.length !== t.length) {
            return false
        }

        const count = {};

        //Count characters from first string
        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        //Subtract character counts usinf second string
        for (let char of t) {
            if (!count[char]) {
                return false;
            }

            count[char]--;
        }

        return true;

    }
}
