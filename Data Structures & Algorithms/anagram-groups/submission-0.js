class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        const map = {};

        for(let str of strs) {
            // sort characters to create a unique key
            const key = str.split("").sort().join("")

            // create array if key doesn't exist
            if(!map[key]) {
                map[key] = []
            }

            // Push original string
            map[key].push(str)
        }

        return Object.values(map)

    }
}
