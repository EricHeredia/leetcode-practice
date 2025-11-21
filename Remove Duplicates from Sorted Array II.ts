// Problem
// Given a sorted array `nums`, remove duplicates in-place such that each element
// can appear at most twice. Return the new length of the array, with the first
// portion of the array up to that length containing the allowed elements.
//
// Approach (Modified Two-Pointer Technique)
// - Initialize `writeIndex` to 2, since the first two elements are always allowed.
// - Iterate through the array starting from index 2.
// - Compare the current element `nums[i]` with the element at `nums[writeIndex - 2]`.
// - If they are different, write `nums[i]` at `writeIndex` and increment `writeIndex`.
// - Continue until the end of the array.
//
// Similarities to Other Problems
// - Very similar to the `removeDuplicates(nums: number[])` problem where only
//   one duplicate is allowed. The main difference is the comparison index (`writeIndex - 2`
//   instead of `writeIndex - 1`) to allow up to two occurrences.
// - Conceptually similar to `removeElement(nums, val)` in using a write pointer
//   to overwrite elements in-place and return a new length.
//
// Why this approach works
// - Maintains O(n) time complexity: each element is checked once.
// - Uses O(1) extra space: modifies the array in-place.
// - Efficiently handles sorted arrays because duplicates are consecutive.
// - Generalizes the previous one-duplicate problem by adjusting the comparison to `writeIndex - 2`.

function removeDuplicates(nums: number[]): number {
  let writeIndex = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[writeIndex - 2]) {
      nums[writeIndex++] = nums[i];
    }
  }

  return writeIndex;
}
