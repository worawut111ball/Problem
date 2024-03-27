// Time Complexity: O(1)
function isStrictlyPalindromic(n) {
  return false;
}

// Input: n = 9
// Output: false
// Explanation:In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// Input: n = 4
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.

// Base: 2, Symbol (2): 0, 1
// 0 -> 0
// 1 -> 1
// 2 -> 10
// 3 -> 11
// 4 -> 100 ...

// Base: 5, Symbol (5): 0, 1, 2, 3, 4
// 0 -> 0
// 4 -> 4
// 5 -> 10 **
// 6 -> 11, 7 -> 12

// Base: 9, Symbol (9): 0 - 8
// 0 -> 0
// 8 -> 8
// 9 -> 10 **
// 10 -> 11
// 11 -> 12

// Base: 120, Symbol (120): 0 - 119
// 120 -> 10 **
// 122 -> 10 + 2 => 12

// Observation
// - If b in range [2, n-2]; If there is one n of base b that is not parindrome
//    - Return false
// - At base n-2; the value of n in that base is gonna be 12
//    - Therefore, we can return false
