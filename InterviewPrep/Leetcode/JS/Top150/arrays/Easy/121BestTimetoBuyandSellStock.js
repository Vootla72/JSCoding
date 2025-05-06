// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 

// Constraints:

// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104



// Approach:
// We can solve this problem by using a greedy approach.
// We can keep track of the minimum price so far and the maximum profit so far.
// We can iterate through the prices array and update the minimum price and maximum profit accordingly.
// If the current price is less than the minimum price, we update the minimum price.
// If the current price is greater than the minimum price, we update the maximum profit.
// We return the maximum profit at the end.


// *********************


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    if (prices.length === 0) return 0;

    let max_profit = 0;
    let buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > buy) {
            max_profit = Math.max((prices[i] - buy), max_profit);
        }
        else {
            buy = prices[i];
        }

    }
    return max_profit;

};

// TC: O(N)
// SC: O(1)