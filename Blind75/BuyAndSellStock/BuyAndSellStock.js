/**
 * @param {number[]} prices
 * @return {number}
 */

// 
var maxProfit = function (prices) {
    // Set up pointers to track the lowest price and the highest profit
    let lowestPrice = prices[0];
    let highestProfit = 0;

    // Set up a for loop to iterate through the prices array
    for (let i = 0; i < prices.length; i++) {
        // If the current price is lower than the lowest price, set the current price as the lowest price
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }
        // If the current price minus the lowest price is greater than the highest profit, set the current price minus the lowest price as the highest profit
        if (prices[i] - lowestPrice > highestProfit) {
            highestProfit = prices[i] - lowestPrice;
        }
    }
    // Return the highest profit
    return highestProfit;
};

// Test Cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Expected output: 5
console.log("");

console.log(maxProfit([7, 6, 4, 3, 1])); // Expected output: 0
console.log("");

console.log(maxProfit([1, 2, 3, 4, 5])); // Expected output: 4
console.log("");
