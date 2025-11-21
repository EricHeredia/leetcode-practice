// Problem
// Given an array `nums`, find the majority element—
// the element that appears more than ⌊n / 2⌋ times.
// It is guaranteed that a majority element always exists.
//
// First Attempt (Explicit Counters and Conditionals)
// - Started with the first element as the candidate and count = 1.
// - Iterated through the array, increasing count when encountering the same element
//   and decreasing it when encountering a different one.
// - When count dropped to zero, reset the candidate to the current number and count to 1.
// - Correct implementation of the Boyer-Moore Voting Algorithm, just more verbose.
//
// Problem with First Attempt
// - Logic was correct but required multiple explicit if/else steps.
// - Code was longer and slightly harder to scan quickly.
// - Reset behavior required multiple lines instead of being folded into the main update statement.
//
// Second Attempt (Cleaner Boyer-Moore Voting Algorithm)
// - Used a `candidate` initialized to null and a count starting at 0.
// - For each number:
//       If count is 0 → set new candidate.
//       Then adjust count: +1 if it matches candidate, -1 otherwise.
// - After one pass, `candidate` is guaranteed to be the majority element.
// - More concise and idiomatic version of the same algorithm.
//
// Why this approach is better
// - Much more concise while preserving the same logic.
// - One-pass solution with O(n) time complexity.
// - O(1) extra space—only tracks `candidate` and `count`.
// - Clean, readable, and directly expresses the essence of the Boyer-Moore Voting Algorithm.

function majorityElement(nums: number[]): number {
  let candidate: number = nums[0];
  let count = 0;

  for (const num of nums) {
    if (count === 0) candidate = num;
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

//function majorityElement(nums: number[]): number {
//    let candidate = nums[0];
//    let count = 1;
//
//    for (let i = 1; i < nums.length; i++) {
//        if (count === 0) {
//            candidate = nums[i]
//            count = 1;
//            continue;
//        }
//
//        if (nums[i] === candidate) {
//            count++
//        } else {
//            count--
//        }
//    }
//
//    return candidate;
//};
