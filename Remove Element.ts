// Problem
// Given an array `nums` and a value `val`, remove all instances of `val` in-place
// and return the new length of the array. The order of elements can be changed,
// but the first portion of the array up to the returned length must contain the remaining elements.
//
// First Attempt (For-of Loop)
// - Used a for-of loop to iterate over each number in `nums`.
// - If the current number was not equal to `val`, wrote it at the `pWrite` pointer and incremented `pWrite`.
// - Returned `pWrite` as the new length of the array.
//
// Problem with First Attempt
// - For-of works, but doesn’t provide the index directly, which may be less intuitive
//   when working with in-place modifications that rely on array indices.
//
// Second Attempt (Normal For Loop)
// - Switched to a standard for loop with index `i` from 0 to nums.length.
// - Same logic: if nums[i] !== val, write it at nums[pWrite++].
// - Returning `pWrite` remains the same.
//
// Why Second Attempt is Better / Preferred
// - Clearer when performing in-place modifications since the index is explicit.
// - Often preferred in problems that return numeric lengths or require index-based operations.
// - Time complexity: O(n), space complexity: O(1).
// - Functionally identical to the first approach but easier to read in some contexts.

function removeElement(nums: number[], val: number): number {
  let pWrite = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[pWrite++] = nums[i];
    }
  }

  return pWrite;
}

//function removeElement(nums: number[], val: number): number {
//    let pWrite = 0;
//
//    for (const num of nums) {
//        if (num !== val) {
//            nums[pWrite++] = num;
//        }
//    }
//
//    return pWrite;
//};
