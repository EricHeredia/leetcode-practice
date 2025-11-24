// Problem
// Given an array `nums` where each element represents the maximum jump length
// from that position, determine if you can reach the last index from the first.
//
// First Attempt (Ternary / Manual Max Check)
// - Tracked the farthest reachable index with `farthestIndex`.
// - Iterated through the array using index and value.
// - If the current index exceeds `farthestIndex`, return false (cannot reach this point).
// - Otherwise, update `farthestIndex` manually using a ternary check:
//       farthestIndex = (num + index > farthestIndex) ? num + index : farthestIndex;
//
// Problem
// - Works correctly but slightly verbose due to manual ternary expression.
//
// Second Attempt (Math.max Cleaner Version)
// - Same logic: track `farthestIndex` and return false if current index is beyond it.
// - Update `farthestIndex` using `Math.max(farthestIndex, num + index)` for cleaner code.
// - Functionally identical but more readable and concise.
//
// Why the Math.max Approach is Better
// - Clearer and easier to scan than the ternary-based update.
// - O(n) time complexity: each element visited once.
// - O(1) extra space: only a single variable (`farthestIndex`) is used.
// - Simple, greedy approach that effectively tracks the maximum reachable position.

function canJump(nums: number[]): boolean {
  let farthestIndex = 0;

  for (const [index, num] of nums.entries()) {
    if (index > farthestIndex) return false;

    farthestIndex = Math.max(farthestIndex, num + index);
  }

  return true;
}

//function canJump(nums: number[]): boolean {
//    let farthestIndex = 0;
//
//    for (const [index, num] of nums.entries()) {
//        if (index > farthestIndex) {
//            return false;
//        }
//
//        farthestIndex = num + index > farthestIndex ? num + index : farthestIndex;
//    }
//
//    return true;
//};
