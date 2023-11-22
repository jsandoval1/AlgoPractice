/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    // Create for loop to iterate through array
    for (i = 0; i < nums.length; i++) {
        // Create a second for loop to iterate through the array, one position ahead of the prior loop
        for (j = i + 1; j < nums.length; j++) {
            // If the sum of the two numbers is equal to the target
            if (nums[i] + nums[j] === target) {
                // Return the index of the two numbers
                return [i, j]
            }
        }
    }
};

// Test Cases:
console.log(twoSum([2,7,11,15], 9)); // --> [0,1]
console.log(twoSum([3,2,4], 6)); // --> [1,2]
console.log(twoSum([3,3], 6)); // --> [0,1]