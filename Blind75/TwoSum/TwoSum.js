/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    console.log(`\n => Checking to see which two nums from [${nums}] will sum to make (${target})`);

    // Create a hashmap to keep track of seen numbers and their indices
    const hashMap = {};

    // Loop through the array of numbers
    for (let i = 0; i < nums.length; i++) {
        // Current number
        let n = nums[i];

        // Calculate the difference needed to reach the target
        let difference = target - n;

        // Log current iteration details
        console.log(`Checking number at index ${i}: ${n}, Difference needed: ${difference}`);
        console.log(hashMap)

        // Check if the difference is already in the hashmap
        if (hashMap[difference] !== undefined) {
            // If yes, log and return the indices of the two numbers
            console.log(`Found a pair: ${difference} and ${n}`);
            return [hashMap[difference], i];
        } else {
            // If no: add the index of the current number to the hashmap
            console.log(`Adding ${n} at index ${i} to the hashmap`);
            hashMap[n] = i;
        }
    }
}

// Test Cases
let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target)); // [0, 1]

nums = [3, 2, 4];
target = 6;
console.log(twoSum(nums, target)); // [1, 2]

nums = [3, 3];
target = 6;
console.log(twoSum(nums, target)); // [0, 1]

nums = [3, 2, 3];
target = 6;
console.log(twoSum(nums, target)); // [0, 2]