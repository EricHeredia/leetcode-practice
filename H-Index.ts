// Problem
// Given an array `citations` where each element represents the number of citations
// for a researcher's paper, compute the h-index. The h-index is defined as the
// maximum value `h` such that the researcher has at least `h` papers with at least
// `h` citations each.
//
// First Attempt (Sorting-Based)
// - Sort the citations array in ascending order.
// - Iterate through the sorted array, for each index i, compute h = n - i (papers remaining).
// - If citations[i] >= h, return h.
// - Correct and simple, but requires O(n log n) time for sorting.
//
// Second Attempt (Bucket Sort / Counting Approach)
// - Initialize a bucket array of size n + 1, where n is the number of papers.
// - For each citation c:
//     - If c >= n, increment bucket[n].
//     - Otherwise, increment bucket[c].
// - Iterate h from n down to 0, accumulating the number of papers with >= h citations.
// - Return the first h where accumulated papers >= h.
// - Runs in O(n) time and O(n) space, avoiding sorting.
//
// Why the Bucket Sort Approach is Better
// - Time complexity reduced to O(n) from O(n log n) in the sorting approach.
// - Space complexity O(n) due to the bucket array.
// - Efficiently counts papers by citation levels, especially effective for large datasets.
// - Provides the exact h-index without fully sorting the array.

function hIndex(citations: number[]): number {
  const n = citations.length;
  const bucket = new Array(n + 1).fill(0);

  for (const c of citations) {
    if (c >= n) {
      bucket[n]++;
    } else {
      bucket[c]++;
    }
  }

  let papers = 0;
  for (let h = n; h >= 0; h--) {
    papers += bucket[h];
    if (papers >= h) {
      return h;
    }
  }

  return 0;
}

//function hIndex(citations: number[]): number {
//    citations.sort((a, b) => a - b);
//    let n = citations.length;
//
//    for (let i = 0; i < n; i++) {
//        let h = n - i;
//
//        if (citations[i] >= h) {
//            return h;
//        }
//    }
//
//    return 0;
//};
