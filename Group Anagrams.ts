// Problem
// Given an array of strings, group the strings that are anagrams of each other.
// Return the groups as an array of string arrays.
//
// First Attempt (If/Else Checks)
// I sorted each word alphabetically to create a key.
// Then checked if the key existed in a Map.
// If it did, I pushed the word into the existing array.
// Otherwise, I created a new array with that word.
//
// Problem
// Repeatedly calling has() and get() makes the code slightly longer and more verbose.
// Slightly more boilerplate to manage the creation of new arrays.
//
// Second Attempt (Nullish Coalescing)
// Sorted each word to generate a key as before.
// Used nullish coalescing (??) to get the existing array or create a new empty one.
// Pushed the word into the array and set it back in the Map.
//
// Why it's better than my first attempt
// - Cleaner and more concise code using nullish coalescing
// - Avoids repeated has() checks
// - Still O(n * k log k) time complexity
// - Maintains same space complexity: O(n * k) for storing groups
//
// Could probably make this more efficient using a character frequency signature for the
// key instead of sorting, but Don't really see a point to do that here.
// "eat" -> [1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0] -> "1#0#0#0#1#0#0#0#0#0#0#0#0#0#0#0#0#0#0#1#0#0#0#0#0#0"

function groupAnagrams(strs: string[]): string[][] {
  const anagramMap: Map<string, string[]> = new Map();

  for (const word of strs) {
    const sortedWord: string = word.split("").sort().join("");

    const group = anagramMap.get(sortedWord) ?? [];
    group.push(word);
    anagramMap.set(sortedWord, group);
  }

  return Array.from(anagramMap.values());
}

//function groupAnagrams(strs: string[]): string[][] {
//    const anagramMap: Map<string, string[]> = new Map();
//
//    for (const word of strs) {
//        const sortedWord: string = word.split('').sort().join('');
//
//        if (anagramMap.has(sortedWord)) {
//            anagramMap.get(sortedWord).push(word);
//        } else {
//            anagramMap.set(sortedWord, [word]);
//        }
//    }
//
//    return Array.from(anagramMap.values());
//};
