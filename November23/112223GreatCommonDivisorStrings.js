// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// * Code Below
// * @param {string} str1
// * @param {string} str2
// * @return {string}

var gcdOfStrings = function (str1, str2) {
    // Set up for edge case: If the concatenation of str1 and str2 is not equal
    // to the concatenation of str2 and str1, then there is no common divisor.
    if (str1 + str2 !== str2 + str1) {
        return "No common divisor found for " + str1 + " + " + str2; // No common divisor found
    }

    // Tackle the main logic:
    // Determine the minimum length between str1 and str2
    let minLength = Math.min(str1.length, str2.length);

    // Iterate from the minimum length towards 1
    for (let l = minLength; l > 0; l--) {
        // Check if both str1 and str2 are divisible by the current length 'l'
        if ((str1.length % l === 0) && (str2.length % l === 0)) {
            // Return the common divisor, which is a substring of str1
            // from index 0 to index 'l'
            return str1.substring(0, l);
        }
    }

    // If no common divisor is found, return an empty string
    return "";
};

// ? Example 1:
Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

// ? Example 2:
Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"

// ? Example 3:
Input: str1 = "LEET", str2 = "CODE"
Output: ""

// ! Constraints:
// 1 <= str1.length, str2.length <= 1000
// str1 and str2 consist of English uppercase letters.

// * Test Cases:
console.log(gcdOfStrings("ABCABC", "ABC")); // ? Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // ? Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // ? Output: ""
