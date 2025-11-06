// Problem
// Given a string containing brackets,
// determine if the brackets are valid (properly opened and closed in correct order).
//
// First Attempt (Stack-based)
// I used a stack to track opening brackets as I encounter them.
// When I find a closing bracket, I check if it matches the most recent
// opening bracket (top of stack). If it matches, pop from stack.
// At the end, the stack should be empty if all brackets were properly closed.
//
// Why this approach works
// - Stack naturally handles the most recent unmatched bracket logic
// - Single pass through string: O(n) time
// - Used a Record to map closing brackets to their matching opening brackets
// - Type guards ensure TypeScript safety when accessing the bracket pairs
// - Trade-off: O(n) space for the stack in worst case (all opening brackets)

function isValid(s: string): boolean {
    type ClosingBracket = ')' | ']' | '}';
    type OpeningBracket = '(' | '[' | '{';

    const stack: string[] = [];
    const bracketPairs: Record<ClosingBracket, OpeningBracket> = {
        ')':'(',
        ']':'[',
        '}':'{'
    };

    const isClosingBracket = (bracket: string): bracket is ClosingBracket => bracket in bracketPairs;
    const peek = (): string | undefined => stack[stack.length -1];

    for (const currentBracket of s) {
        if (isClosingBracket(currentBracket)) {
            // Closing bracket
            if (stack.length === 0 || peek() !== bracketPairs[currentBracket]) {
                return false;
            }
            stack.pop()
        } else {
            // Opening bracket
            stack.push(currentBracket);
        }
    }

    return stack.length === 0;
};