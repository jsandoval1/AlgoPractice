/**
 * @param {number[]} prices
 * @return {number}
 */

// 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Set up pointer and initialize highestProfit as 0, may return as 0.
    let lowestPrice = prices[0];
    let highestProfit = 0;

    // Iterate through array, setting todays price to [i] and comparing it to our lowestPrice var. If it is lower, set the lowestPrice = to todays price
    for (let i = 0; i < prices.length; i++){
        let todaysPrice = prices[i]

        if ( todaysPrice < lowestPrice){
            lowestPrice = todaysPrice
        }

        if (todaysPrice - lowestPrice > highestProfit){
            highestProfit = todaysPrice - lowestPrice
        }
    }
    return highestProfit
};

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5
console.log("");

console.log(maxProfit([7, 6, 4, 3, 1])); // Expected output: 0
console.log("");

console.log(maxProfit([1, 2, 3, 4, 5])); // Expected output: 4
console.log("");
