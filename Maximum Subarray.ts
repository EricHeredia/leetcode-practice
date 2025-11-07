// Problem
// Given an array of integers, find the contiguous subarray with the largest sum
// and return that sum.
//
// First Attempt (Manual If Statements)
// I tracked two variables: runningSum and maxSum.
// At each step, I checked if adding the current number to runningSum
// was better than starting fresh with the current number.
// Then updated maxSum if runningSum was greater.
//
// Problem
// Using manual if statements works but is slightly verbose and repetitive.
//
// Second Attempt used Math.max for Cleaner Logic
// Replaced the conditional checks with Math.max() to update runningSum:
// - currentSum = Math.max(nums[i], currentSum + nums[i])
// - bestSum = Math.max(bestSum, currentSum)
// This implements the same logic more concisely.
//
// Why it's better than my first attempt
// - Cleaner, shorter, and more readable
// - Still O(n) time complexity and O(1) space complexity
// - Avoids manual branching while preserving correct Kadane's Algorithm logic

function maxSubArray(nums: number[]): number {
  let currentSum = nums[0];
  let bestSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    bestSum = Math.max(bestSum, currentSum);
  }

  return bestSum;
}

//function maxSubArray(nums: number[]): number {
//    let maxSum: number = nums[0];
//    let runningSum: number = nums[0];
//
//    for (let i = 1; i < nums.length; i++) {
//        if (nums[i] + runningSum > nums[i]) {
//            runningSum += nums[i];
//
//        } else {
//            runningSum = nums[i];
//        }
//
//        if (runningSum > maxSum) {
//            maxSum = runningSum;
//        }
//    }
//
//    return maxSum;
//};
