// Problem
// Given a sorted array `nums`, remove duplicates in-place such that each element
// appears only once. Return the new length of the array, with the first portion
// of the array up to that length containing the unique elements.
//
// Approach (Two-Pointer Technique)
// - Initialize `writeIndex` to 1 (first unique element is always at index 0).
// - Iterate through the array starting from index 1.
// - Compare the current element `nums[i]` with the previous element `nums[i - 1]`.
// - If they are different, write the current element at `writeIndex` and increment `writeIndex`.
// - Continue until the end of the array.
//
// Why this approach works
// - Maintains O(n) time complexity: each element is checked once.
// - Uses O(1) extra space: modifies the array in-place.
// - Efficiently handles sorted arrays by leveraging the property that duplicates are consecutive.
// - Returns the length of the array with all unique elements consolidated at the start.

function removeDuplicates(nums: number[]): number {
  let writeIndex = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[writeIndex++] = nums[i];
    }
  }

  return writeIndex;
}
