/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    console.log(`Checking if String ("${s}") and String ("${t}") are Anagrams.`)

    // Set-up edge case for if strings are not equal length
    if (s.length !== t.length) {
        console.log(`String ("${s}") and String ("${t}") are not equal length; therefore they are not Anagrams.`)
        return false;
    }

    // Set up a hashmap to push chars into from string (s) and delete from with string (t)
    const hashMap = {};

    // Loop through string (s) and push char into hashmap
    for (i = 0; i < s.length; i++) {
        let c = s[i];
        hashMap[c] = (hashMap[c] || 0) + 1;
        console.log(`Adding an increment to the count of ${c}`)
        console.log(hashMap)
    }

    // Now that our hashmap is populated with the (s) string, it's time to revert it to empty with the (t) string
    for (i = 0; i < t.length; i++) {
        let c = t[i];
        // Check if c exists in hashmap, if not => break loop and return false
        if (!hashMap[c]) {
            console.log(`The count for char ${c} is invalid, these are not Anagrams.`);
            return false
        } else {
            // If it does, decrement the count of the char by 1 
            hashMap[c]--;
            console.log(`Decreasing count of char ${c} in Hashmap`)
            console.log(hashMap)
        }
    }
    console.log("These are valid Anagrams")
    return true

};

// Tests:
console.log(isAnagram('anagram', 'nagaram')); // true
console.log("\n")
console.log(isAnagram('rat', 'car')); // false
console.log("\n")
console.log(isAnagram('a', 'ab')); // false