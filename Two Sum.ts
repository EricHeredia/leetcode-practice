// Problem
// Find two numbers in an array that add up to a target value.
// Return their indices.
//
// First Attempt (Brute Force)
// I used nested iteration with findIndex() to check each number
// against all others.
//
// Problem
// O(n²) time complexity because findIndex() scans the
// entire array for each element.
//
// Second Attempt (Hash Map)
// I used a Map to store numbers I've seen with their indices.
// For each number, I calculate what complement I need (target - current).
// If that complement exists in my map, I've found the pair.
//
// Why it's better than my first attempt
// - Single pass through array: O(n) time
// - Map lookups are O(1) average case
// - Trade-off: O(n) extra space for the map

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }

    map.set(nums[i], i);
  }

  throw new Error("No solution found");
}

//function twoSum(nums: number[], target: number): number[] {
//    for (let i = 0; i < nums.length; i++) {
//        const complement = target - nums[i];
//        const complementIndex = nums.findIndex(num => num === complement);
//
//        if (complementIndex >= 0 && complementIndex !== i) {
//            return [i, complementIndex];
//        }
//    }
//
//    throw new Error("No solution found");
//};
