// 121. Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// * Solution:
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    // Initialize pointers, these will change so they are "let"
    let leftPointer = 0;
    let rightPointer = 0;
    let maxPrice = 0;

    // loop through prices array, ending at prices.length
    for (rightPointer = 0; rightPointer < prices.length; rightPointer++) {
        console.log(`Checking prices[${leftPointer}] = ${prices[leftPointer]} and prices[${rightPointer}] = ${prices[rightPointer]}`);

        // if leftP price is less than rightP price
        if (prices[leftPointer] < prices[rightPointer]) {
            // declare newPrice var
            // access prices inside [prices] at pointers
            // get the max price from new prices and current max price
            let newPrice = prices[rightPointer] - prices[leftPointer];
            maxPrice = Math.max(maxPrice, newPrice);
            console.log(`Found potential profit. Updating maxPrice to ${maxPrice}`);
        } else {
            // otherwise,
            leftPointer = rightPointer;
            console.log(`Resetting leftPointer to ${leftPointer}`);
        }
    }
    console.log(`Final maxPrice: ${maxPrice}`);
    return maxPrice;
};


// Example 1:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.


// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// * test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // -> 5
console.log("-----");
console.log(maxProfit([7, 6, 4, 3, 1])); // -> 0