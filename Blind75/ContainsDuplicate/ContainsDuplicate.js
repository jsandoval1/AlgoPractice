// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // Create an arrary to store the seen numbers in 
    const seenNumbers = new Set()
    // Loop through nums array
    for (i = 0; i < nums.length; i++) {
        // Test to see if seen numbers already contains number
        if (seenNumbers.has(nums[i])) {
            // If it does, return true
            return true
        } else {
            // Add the numbers from (nums) into (seenNumbers)
            seenNumbers.add(nums[i])
        }
    }
    // If it does not, return false 
    return false
};

// Test Cases
const nums = [1, 2, 3, 1] 
console.log(containsDuplicate(nums)) // true

const nums2 = [1, 2, 3, 4]
console.log(containsDuplicate(nums2)) // false

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(nums3)) // true