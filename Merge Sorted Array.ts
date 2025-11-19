// Problem
// Given two sorted arrays, nums1 and nums2, merge nums2 into nums1 as one
// fully sorted array. nums1 has enough trailing space to hold all elements of nums2.
// The merge must be done in-place without returning anything.
//
// First Attempt (Manual If/Else Logic)
// - Started pointers at the end of the valid portions of nums1 and nums2.
// - Compared nums1[i] and nums2[j], placed the larger value at the end (index p).
// - Decremented pointers manually using clear if/else blocks.
// - After the main loop, copied any remaining nums2 values into nums1.
// - Correct and readable, but slightly verbose.
//
// Problem
// - Uses explicit if/else blocks for each comparison.
// - Requires multiple lines per pointer update, making the merge logic longer.
//
// Second Attempt (Ternary Operator for Cleaner Pointer Movement)
// - Same pointer setup and same in-place strategy working from the end of the array.
// - Rewrote the core comparison using a ternary operator:
//     nums1[p--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
// - Reduced the comparison, assignment, and pointer movement into a single line.
// - After finishing the main merge loop, copied any remaining nums2 values as before.
//
// Why it's better than my first attempt
// - More concise without changing the underlying algorithm
// - Cleaner merging logic with fewer lines of code
// - Still O(m + n) time and O(1) extra space (fully in-place)
// - Keeps the optimal backward-merge strategy while making code easier to scan

/**
  Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  let p = m + n - 1;

  while (i >= 0 && j >= 0) {
    nums1[p--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
  }

  while (j >= 0) {
    nums1[p--] = nums2[j--];
  }
}

/**
  Do not return anything, modify nums1 in-place instead.
 */

//function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//    let i = m - 1;
//    let j = n - 1;
//    let p = m + n - 1;
//
//    while (i >= 0 && j >= 0) {
//        if (nums1[i] > nums2[j]) {
//            nums1[p] = nums1[i];
//            i--;
//        } else {
//            nums1[p] = nums2[j];
//            j--;
//        }
//        p--;
//    }
//
//    while (j >= 0) {
//        nums1[p] = nums2[j];
//        j--;
//        p--;
//    }
//};
