// Problem
// Given an array `prices` where prices[i] is the stock price on day i,
// calculate the maximum profit from as many transactions as needed
// (buy one day, sell on a later day). You cannot hold more than one stock at a time.
//
// Approach (Greedy Peak-to-Valley)
// - Iterate through the array starting from index 1.
// - Whenever prices[i] > prices[i - 1], buy at i - 1 and sell at i to capture profit.
// - Add the difference to a running total `maxProfit`.
// - Continue this for every increasing pair of consecutive days.
//
// Why this approach works
// - Captures all upward trends, effectively summing all local gains.
// - O(n) time complexity: each price is checked once.
// - O(1) space complexity: only a single variable is used.
// - Simpler and more efficient than trying to find explicit valleys and peaks.

function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}
