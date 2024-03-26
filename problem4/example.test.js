function isPalindromicInBase(number, base) {
  let num = number;
  let reversed = 0;

  while (num > 0) {
    reversed = reversed * base + (num % base);
    num = Math.floor(num / base);
  }

  return reversed === number;
}
function isStrictlyPalindromic(n) {
  for (let base = 2; base <= n - 2; base++) {
    if (!isPalindromicInBase(n, base)) {
      return false;
    }
  }
  return true;
}

describe('isStrictlyPalindromic function', () => {
  test('Example 1', () => {
    expect(isStrictlyPalindromic(9)).toBe(false);
  });

  test('Example 2', () => {
    expect(isStrictlyPalindromic(4)).toBe(false);
  });


});
