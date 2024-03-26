function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}
describe('countBits function', () => {
  test('Example 1', () => {
    expect(countBits(2)).toEqual([0, 1, 1]);
  });

  test('Example 2', () => {
    expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
  });
});
