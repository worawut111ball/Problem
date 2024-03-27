function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

module.exports = missingNumber;

describe('Missing Number', () => {
  it('Example Testcase 1', () => {
    const nums = [3, 0, 1];
    const result = missingNumber(nums);
    expect(result).toBe(2);
  });

  it('Example Testcase 2', () => {
    const nums = [0, 1];
    const result = missingNumber(nums);
    expect(result).toBe(2);
  });

  it('Example Testcase 3', () => {
    const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
    const result = missingNumber(nums);
    expect(result).toBe(8);
  });

  // Add more test cases as needed
});
