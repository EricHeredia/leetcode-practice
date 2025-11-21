// Problem
// Given an array `nums`, rotate it to the right by `k` steps, modifying the array in-place.
// Must handle cases where k >= nums.length efficiently.
//
// First Attempt (Repeated Pop + Unshift)
// - Used a loop to pop the last element and unshift it to the front `k` times.
// - Correct but O(n*k) time complexity, which is slow for large arrays.
// - Uses O(1) extra space.
//
// Second Attempt (Splice + Unshift)
// - Removed the last `k` elements using splice and inserted them at the front with unshift.
// - More concise than repeated pop/unshift.
// - Still modifies the array in-place but creates a temporary array of size k, O(k) extra space.
// - Time complexity O(n) due to shifting elements when unshifting.
//
// Third Attempt (Reverse Method - Optimized)
// - Uses a helper function `reverse(nums, start, end)` to reverse a subsection of the array in-place.
// - Steps:
//     1. Normalize k: `k = k % nums.length`
//     2. Reverse the entire array
//     3. Reverse the first k elements
//     4. Reverse the remaining elements
// - Time complexity: O(n), space complexity: O(1) (fully in-place)
// - Efficient and clean, avoids creating temporary arrays or performing repeated shifts.
//
// Why the Reverse Method is Better
// - O(n) time and O(1) space, making it optimal for large arrays.
// - Clean, readable, and fully in-place without extra memory allocation.
// - Avoids repetitive operations that make other approaches slower for large k.

/**
  Do not return anything, modify nums in-place instead.
*/

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
}

function rotate(nums: number[], k: number): void {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

//function rotate(nums: number[], k: number): void {
//    k = k % nums.length;
//
//    let rotated = nums.splice(nums.length - k, k);
//    nums.unshift(...rotated);
//};

//function rotate(nums: number[], k: number): void {
//    k = k % nums.length;
//
//    for (let i = 0; i < k; i++) {
//        nums.unshift(nums.pop());
//    }
//};
