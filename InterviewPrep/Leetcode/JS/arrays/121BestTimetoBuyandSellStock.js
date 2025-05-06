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


/////////sol1/////////////


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    const n = prices.length;
    let min_val = prices[0];
    let max_profit = 0;
    for (let i = 1; i < n; i++) {
        const curr_diff = (prices[i] - min_val);
        if (curr_diff > max_profit)
            max_profit = curr_diff;
        // you have to get the minimum element before the current index
        // and you do diff with this value in next iteration
        if (prices[i] < min_val)
            min_val = prices[i];
    }
    return max_profit;

};


//////////sol2////////

// Same as sol1 with optimisation

var maxProfit = function(prices) {
    let profit = 0;
    let buyPrice = prices[0];

    for (let i=1; i<prices.length; i++) {
        if(buyPrice > prices[i]) {
            buyPrice = prices[i];
        }
        profit = Math.max(profit, prices[i] - buyPrice);
    }
    return profit;
};
