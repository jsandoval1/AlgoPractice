/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    console.log(` => Checking if set up numbers ${nums} contains duplicates...`)

    // Set up edgecase
    if (nums.length <= 1) {
        console.log("The array of nums is empty or only contains one element and cannot contain duplicates")
        return false
    }

    // Set up Hashmap
    const hashMap = {};

    // Set up loop to push elements of (nums) into (hashMap)
    for (i = 0; i < nums.length; i++) {
        let n = nums[i];

        // Check if the value already exists in the hashMap
        if (hashMap[n]) {
            // Yes, it does exist, then:
            console.log(`There duplicate was found using the number: ${n}`);
            return true
        } else {
            // No, it does not exist, then initialize to 0 and add 1
            hashMap[n] = (hashMap[n] || 0) + 1;
            console.log(`Found one count of ${n} and adding it to the hashMap \n`, hashMap)
        }
        // Can now exit the for loop one done iterating
    }
    console.log("The array did not contain duplicates, everything was found once.");
    return false
}

// Test Cases
const nums = [1, 2, 3, 1]
console.log(containsDuplicate(nums)) // true
console.log("")

const nums2 = [1, 2, 3, 4]
console.log(containsDuplicate(nums2)) // false
console.log("")

const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
console.log(containsDuplicate(nums3)) // true
console.log("")
