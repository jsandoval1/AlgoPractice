// You are given two strings word1 and word2. 
// Merge the strings by adding letters in alternating order, starting with word1. 
// If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// * Code here
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}

var mergeAlternately = function (word1, word2) {
    // Convert the strings into arrays, because in strings are immutable in JavaScript
    const arr1 = word1.split('')
    const arr2 = word2.split('')

    // Set an empty array to merge into, as we cannot merge strings themselves. 
    mergedArray = [];

    // Merging the two split arrays into one, alternating in order. 
    // This below is one interation. It will run all this as one iteration. Then it will do again as needed. 
    while (arr1.length > 0 || arr2.length > 0) {
        if (arr1.length > 0) {
            mergedArray.push(arr1.shift()); //pushing into mergedArray (what we shift from arr1)
        }
        if (arr2.length > 0) {
            mergedArray.push(arr2.shift());
        }
    }

    // Converting the mergedArray to a string
    return mergedArray.join('')
};

// ? Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r

// ? Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b
// word2:    p   q   r   s
// merged: a p b q   r   s

// ? Example 3:
// Input: word1 = "abcd", word2 = "pq"
// Output: "apbqcd"
// Explanation: Notice that as word1 is longer, "cd" is appended to the end.
// word1:  a   b   c   d
// word2:    p   q
// merged: a p b q c   d

// !Constraints:
// 1 <= word1.length, word2.length <= 100
// word1 and word2 consist of lowercase English letters.

// * Test Cases 
// Test case 1: word1 and word2 have equal lengths
console.log(mergeAlternately("abc", "pqr")); // Expected output: "apbqcr"

// Test case 2: word1 is shorter than word2
console.log(mergeAlternately("ab", "pqrs")); // Expected output: "apbqrs"

// Test case 3: word1 is longer than word2
console.log(mergeAlternately("abcd", "pq")); // Expected output: "apbqcd"

// Test case 4: word1 is an empty string
console.log(mergeAlternately("", "xyz")); // Expected output: "xyz"

// Test case 5: word2 is an empty string
console.log(mergeAlternately("abc", "")); // Expected output: "abc"

// Test case 6: word1 and word2 are both empty strings
console.log(mergeAlternately("", "")); // Expected output: ""