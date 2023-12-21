/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Helper function to process the string to printable ASCII
    function proccessString(s) {
        console.log(`The old string is: ${s}`);
        const newString = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        console.log(`The new string is: ${newString}`);
        return newString
    }

    // Store the return of processed string in a variable
    const cleanedString = proccessString(s);

    // Main function to test if cleanedString is a palindrome
    function palindromeTest(cleanedString) {
        // Create two pointers, one at the beginning of the string and one at the end
        let left = 0;
        let right = cleanedString.length - 1;

        while (left < right) {
            if (cleanedString[left] !== cleanedString[right]) {
                console.log(`${cleanedString[left]}`, "!==", `${cleanedString[right]}, this is not a palindrome.`)
                return false
            } else {
                console.log(`${cleanedString[left]}`, "==", `${cleanedString[left]}`)
                left++;
                right--;
            }
        }
        console.log("The string cleared the test and therefore is a Palindrome!")
        return true
    }
    // * Return the result of the palindromeTest function
    return palindromeTest(cleanedString);
};


// Test Cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Expected output: true
console.log("");

console.log(isPalindrome("racecar")); // Expected output: true
console.log("");

console.log(isPalindrome("race a car")); // Expected output: false
console.log("");

console.log(isPalindrome("")); // Expected output: true
console.log("");

console.log(isPalindrome("12321")); // Expected output: true
console.log("");

console.log(isPalindrome("hello")); // Expected output: false
console.log("");








