// Problem
// Given an array of stock prices where prices[i] is the price on day i,
// find the maximum profit from buying on one day and selling on a later day.
// Return 0 if no profit is possible.
//
// First Attempt (Manual If Statements)
// I tracked the minimum price and maximum profit with separate if statements.
// Used one if to update minPrice when finding a lower price
// and another if to update maxProfit when finding a better profit.
//
// Problem
// Didn't handle edge case where array has less than 2 elements.
// Could cause issues with empty arrays or single-element arrays.
//
// Second Attempt (Math.min/Math.max with Edge Case)
// Added early return for arrays with less than 2 elements.
// Replaced if statements with Math.min() and Math.max() for cleaner code.
// Still tracks minimum price seen so far and calculates profit at each step.
//
// Why it's better than my first attempt
// - Handles edge cases properly (arrays with < 2 elements)
// - More concise and readable with Math functions
// - Same time/space complexity: O(n) time, O(1) space

function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;

    let minPrice: number = prices[0];
    let maxProfit: number = 0;

    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        const currentProfit = price - minPrice;
        maxProfit = Math.max(maxProfit, currentProfit);
    }

    return maxProfit;
}

//function maxProfit(prices: number[]): number {
//    let minPrice: number = prices[0];
//    let maxProfit: number = 0;
//
//    for (const price of prices) {
//        if (price < minPrice) {
//            minPrice = price;
//        }
//        
//        if (price - minPrice > maxProfit) {
//            maxProfit = price - minPrice;
//        }
//    }
//
//    return maxProfit;
//};