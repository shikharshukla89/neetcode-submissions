class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let sNew = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        let sReverse = sNew.split('').reverse().join('')
        return sNew === sReverse
    }
}
