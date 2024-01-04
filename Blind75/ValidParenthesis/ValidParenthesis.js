/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    // Create array push current parenthesis to and from. Create Hashmap to define pairs.
    let stack = [];
    let hashMap = {
        "(": ")",
        "{": "}",
        "[": "]",
    }

    // Create for loop to iterate through string and push into array
    for (let i = 0; i < s.length; i++) {
        let symbol = s[i];
        // If symbol is not undefined in the hashMap, push it in 
        if (hashMap[symbol] !== undefined) {
            stack.push(symbol);
            //  else, pop the last entered symbol and compare it to the current one iterating.
        } else {
            const lastOpening = stack.pop();
            if (hashMap[lastOpening] !== symbol) {
                // If is not the proper key value pair of the prior opening symbol, this is false
                console.log(`"${symbol}" is not following the proper order. Returning false...`);
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log("------------");

console.log(isValid("()[]{}")); // true
console.log("------------");

console.log(isValid("(]")); // false
console.log("------------");

console.log(isValid("([)]")); // false
console.log("------------");