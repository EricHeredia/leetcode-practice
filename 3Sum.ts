// Problem
// Given an array of integers, find all unique triplets [a, b, c] in the array
// such that a + b + c = 0. Triplets must be unique (no duplicates in output).
//
// First Attempt (Bottom-most commented code)
// - Sorted the array in-place to simplify duplicate handling.
// - Iterated over each element as the first element of the triplet.
// - Used a two-pointer approach (left and right) inside the loop to find pairs summing with the current element to zero.
// - Skipped duplicates for both the current element and the left/right pointers.
// - Early termination when the current element > 0.
// - All logic inline inside the main loop.
//
// Problem with First Attempt
// - Functional but slightly repetitive; duplicate handling and pointer movements repeated in multiple places.
// - Long inline code block; modularity and readability could improve.
//
// Second Attempt (Middle commented code)
// - Same basic algorithm, but reorganized slightly for readability.
// - Explicitly checked if the current element > 0 and broke early.
// - Kept the two-pointer logic inline but removed some redundant duplicate checks.
// - Functionally identical to first attempt but slightly cleaner.
//
// Why Second Attempt is Better
// - Cleaner inline code, easier to follow than first attempt.
// - Still O(n^2) time complexity and O(1) extra space (ignoring output array).
// - Handles duplicates properly and maintains early termination for positive numbers.
//
// Third Attempt (Most recent, uncommented code)
// - Introduced a helper function `twoSum(start, target)` to modularize the two-pointer logic.
// - Main loop iterates over sorted array and calls `twoSum` for each candidate first element.
// - Helper handles all duplicate checks and pointer movements, keeping main loop concise.
// - Early termination if current element > 0 remains in place.
// - Produces the same correct results with cleaner, modular code.
//
// Why Third Attempt is Better
// - Modular: separates concerns for maintainability and readability.
// - Same O(n^2) time complexity and O(1) extra space (ignoring output array).
// - Explicit duplicate handling ensures unique triplets without repeating code.
// - Easier to extend or modify the two-pointer logic if needed.

function threeSum(nums: number[]): number[][] {
  const sorted = [...nums].sort((a, b) => a - b);
  let answer: number[][] = [];

  if (sorted.length < 3) {
    return [];
  }

  function twoSum(start: number, target: number): void {
    let left = start;
    let right = sorted.length - 1;

    while (left < right) {
      const totalSum = target + sorted[left] + sorted[right];

      if (totalSum === 0) {
        answer.push([target, sorted[left], sorted[right]]);
        while (left < right && sorted[left] === sorted[left + 1]) left++;
        while (left < right && sorted[right] === sorted[right - 1]) right--;
        left++;
        right--;
      } else if (totalSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  for (let i = 0; i < sorted.length; i++) {
    if (i > 0 && sorted[i] === sorted[i - 1]) continue;
    if (sorted[i] > 0) break;

    twoSum(i + 1, sorted[i]);
  }

  return answer;
}

//function threeSum(nums: number[]): number[][] {
//    const sorted = [...nums].sort((a, b) => a - b);
//    let answer: number[][] = [];
//
//    if (sorted.length < 3) {
//        return [];
//    }
//
//    for (let i = 0; i < sorted.length; i++) {
//        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
//
//        let left = i + 1;
//        let right = sorted.length -1;
//
//        if (sorted[i] > 0) {
//            break;
//        }
//
//        while (left < right) {
//            let totalSum: number = sorted[i] + sorted[left] + sorted[right];
//
//            if (totalSum === 0) {
//                answer.push([sorted[i], sorted[left], sorted[right]]);
//                while (left < right && sorted[left] === sorted[left + 1]) left++;
//                while (left < right && sorted[right] === sorted[right - 1]) right--;
//                left++;
//                right--;
//            } else if (totalSum < 0) {
//                left++;
//            } else {
//                right--;
//            }
//        }
//    }
//
//    return answer;
//
//};

//function threeSum(nums: number[]): number[][] {
//    nums = nums.sort((a, b) => a - b);
//    let answer: number[][] = [];
//
//    if (nums.length < 3) {
//        return [];
//    }
//
//    for (let i = 0; i < nums.length; i++) {
//        if (i > 0 && nums[i] === nums[i - 1]) continue;
//
//        let left = i + 1;
//        let right = nums.length -1;
//
//        if (nums[i] > 0) {
//            break;
//        }
//
//        while (left < right) {
//            let totalSum: number = nums[i] + nums[left] + nums[right];
//
//            if (totalSum === 0) {
//                answer.push([nums[i], nums[left], nums[right]]);
//                while (nums[left] === nums[left + 1]) left++;
//                while (nums[right] === nums[right - 1]) right--;
//                left++;
//                right--;
//            } else if (totalSum < 0) {
//                left++;
//            } else {
//                right--;
//            }
//        }
//    }
//
//    return answer;
//
//};
