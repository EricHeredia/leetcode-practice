// Problem
// Given an array `nums` where each element represents the maximum jump length
// from that position, determine the minimum number of jumps required to reach
// the last index. You can assume that you can always reach the last index.
//
// Approach (Greedy / BFS-like Layer Tracking)
// - Track three variables:
//     1. `farthestReach` — the farthest index we can reach at the current step.
//     2. `currentEnd` — the end of the current "jump range" or layer.
//     3. `jumps` — the number of jumps taken so far.
// - Iterate through the array up to the second-to-last element (no need to jump from the last index).
// - At each index, update `farthestReach = max(farthestReach, nums[i] + i)`.
// - When reaching `currentEnd`, increment `jumps` and set `currentEnd = farthestReach`.
// - If `currentEnd` reaches or exceeds the last index, break early.
//
// Why this approach works
// - Greedy strategy: always jump to the farthest reachable position within the current range.
// - Effectively treats each jump as a BFS layer, ensuring minimum jumps are counted.
// - Time complexity: O(n), each element visited once.
// - Space complexity: O(1), only a few variables used.
// - More efficient than recursive or DP solutions, avoids unnecessary computations.

function jump(nums: number[]): number {
  let farthestReach = 0;
  let currentEnd = 0;
  let jumps = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    farthestReach = Math.max(farthestReach, nums[i] + i);

    if (i === currentEnd) {
      jumps++;
      currentEnd = farthestReach;

      if (currentEnd >= nums.length - 1) break;
    }
  }

  return jumps;
}
