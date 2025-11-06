// Problem
// Given two strings s and t, determine if t is an anagram of s.
// Two strings are anagrams if they contain the exact same characters
// with the exact same frequencies, just possibly in a different order.
//
// First Attempt (Sorting Both Strings)
// I split each string into an array of characters, sorted both arrays,
// then compared the final sorted strings.
// If they matched, the strings are anagrams.
//
// Problem
// Sorting has a higher time cost and doesn't scale as well.
// Also creates extra intermediate arrays and strings,
// which increases memory usage.
//
// Second Attempt (Character Frequency Map)
// Added early return if lengths don't match (anagrams must match in length).
// Built a Map to count occurrences of each character in s.
// Then iterated through t, decrementing counts in the Map.
// If any character count goes below zero or doesn't exist,
// t can't be an anagram of s.
//
// Why it's better than my first attempt
// - Faster overall: O(n) time vs. O(n log n)
// - More memory-efficient: only stores character counts
// - Explicitly handles mismatched lengths up front
// - Avoids creating extra arrays/strings from sorting

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charCount = new Map();

    for (const char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) - 1);
            if (charCount.get(char) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}


//function isAnagram(s: string, t: string): boolean {
//    if (s.length !== t.length) return false;
//    
//    const sSorted = s.split('').sort().join('');
//    const tSorted = t.split('').sort().join('');
//
//    return sSorted === tSorted;
//}