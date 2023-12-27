const isValid = function (s) {
    // If the string is empty, return true
    if (s === "") {
        return true;
    }

    // Create a stack to store the opening brackets and a map to store the opening and closing brackets
    const stack = [];
    const parenthesesMap = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Iterate through the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If the char is an opening bracket, push it to the stack
        if (parenthesesMap[char]) {
            stack.push(char);
        } else {
            // Else, if the char is a closing bracket, pop the last opening bracket from the stack and compare it to the current closing bracket
            const lastOpening = stack.pop();

            // Compare the vbalue of the last opening bracket to the current closing bracket. If they don't match, return false.
            if (parenthesesMap[lastOpening] !== char) {
                return false;
            }
        }
    }
    // When the iteration is complete, if the stack is empty, return true. Otherwise there are unclosed brackets, so return false.
    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log("------------");

console.log(isValid("()[]{}")); // true
console.log("------------");

console.log(isValid("(]")); // false
console.log("------------");

console.log(isValid("([)]")); // false
console.log("------------");