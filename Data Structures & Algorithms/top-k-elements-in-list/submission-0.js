class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        // Count frequency of each number
        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        // Convert Object to Array and sort by frequency
        const sorted = Object.entries(count).sort((a,b) => b[1] - a[1])

        // Take first k elements and return only numbers
        return sorted.slice(0, k).map(item => Number(item[0]))
    }
}
