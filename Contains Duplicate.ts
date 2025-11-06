// Problem
// Given an integer array, return true if any value appears at least twice,
// and return false if every element is distinct.
//
// First Attempt (Create Full Set)
// I created a Set from the entire array at once using new Set(nums).
// Then compared the Set size to the array length.
// If they're different, duplicates exist.
//
// Problem
// Always processes the entire array even if duplicates appear early.
// Uses O(n) space for the full Set even when duplicate is at index 1.
//
// Second Attempt (Size Comparison in Loop)
// I built the Set incrementally in a loop, adding one element at a time.
// After each add, checked if Set size equals expected size (i + 1).
// If size doesn't match, found a duplicate.
//
// Problem
// Works but the size comparison logic (i + 1) is less intuitive.
// Still adds the duplicate to the Set before checking.
//
// Third Attempt (Early Exit with .has())
// I check if each number already exists in the Set before adding it.
// If .has() returns true, immediately return true (found duplicate).
// Only add numbers that haven't been seen yet.
//
// Why it's better than my previous attempts
// - Exits immediately when duplicate found
// - More readable: .has() directly expresses "have I seen this?"
// - Doesn't waste operations adding duplicates to Set
// - Same worst case: O(n) time, O(n) space

function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set<number>();

    for (const num of nums) {
        if (numsSet.has(num)) {
            return true;
        }

        numsSet.add(num);
    }

    return false;
}


//function containsDuplicate(nums: number[]): boolean {
//    const numsSet: Set<number> = new Set();
//
//    for (let i = 0; i < nums.length; i++) {
//        numsSet.add(nums[i]);
//        if (numsSet.size !== i + 1) return true;
//    }

//    return false;
//};


//function containsDuplicate(nums: number[]): boolean {
//    const numsSet = new Set(nums);
//    return numsSet.size !== nums.length;
//};