// Problem
// Given an array of numbers, return a new array where each element at index i
// is the product of all numbers in the array except nums[i].
// You cannot use division, and the solution must run in O(n) time.
//
// First Attempt (Left Array + Right Array)
// I created two separate arrays:
// - A left-prefix array storing products of all elements before index i
// - A right-suffix array storing products of all elements after index i
// Then multiplied left[i] * right[i] to build the final result.
//
// Problem
// Although correct, this approach uses O(n) extra space for both left and right arrays.
// It also requires two full passes before combining the results,
// making it more memory-heavy than necessary.
//
// Second Attempt (Optimized Prefix + Suffix Using one Output Array)
// Created one output array, answer[], and set answer[0] = 1.
// First pass: filled answer[] with prefix products so answer[i] holds the product
// of all elements before index i.
// Second pass (reverse): used a running suffix product variable to multiply into answer[i],
// effectively combining prefix and suffix values in place.
//
// Why it's better than my first attempt
// - O(1) extra space
// - Still O(n) time with only two simple passes
// - Avoids creating additional left/right arrays
// - Cleaner, more memory-efficient, and scalable for larger inputs

function productExceptSelf(nums: number[]): number[] {
  const numsLength = nums.length;
  const answer: number[] = new Array(numsLength);

  answer[0] = 1;
  for (let i = 1; i < numsLength; i++) {
    answer[i] = answer[i - 1] * nums[i - 1];
  }

  let suffix = 1;
  for (let i = numsLength - 1; i >= 0; i--) {
    answer[i] = answer[i] * suffix;
    suffix *= nums[i];
  }

  return answer;
}


//function productExceptSelf(nums: number[]): number[] {
//  const numsLength = nums.length;
//  const left: number[] = [];
//  const right: number[] = [];
//  const answer: number[] = [];
//
//  left[0] = 1;
//  for (let i = 1; i < numsLength; i++) {
//    left[i] = left[i - 1] * nums[i - 1];
//  }
//
//  right[numsLength - 1] = 1;
//  for (let j = numsLength - 2; j > -1; j--) {
//    right[j] = right[j + 1] * nums[j + 1];
//  }
//
//  for (let k = 0; k < numsLength; k++) {
//    answer[k] = left[k] * right[k];
//  }
//
//  return answer;
//}