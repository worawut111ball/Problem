function sumOfUnique(nums) {
    const freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    let sum = 0;
    freqMap.forEach((value, key) => {
        if (value === 1) {
            sum += key;
        }
    });
    return sum;
}
module.exports = sumOfUnique;

describe('Sum of Unique Elements', () => {
  it('Example Testcase 1', () => {
    const nums = [1, 2, 3, 2];
    const result = sumOfUnique(nums);
    expect(result).toBe(4);
  });

  it('Example Testcase 2', () => {
    const nums = [1, 1, 1, 1, 1];
    const result = sumOfUnique(nums);
    expect(result).toBe(0);
  });

  it('Example Testcase 3', () => {
    const nums = [1, 2, 3, 4, 5];
    const result = sumOfUnique(nums);
    expect(result).toBe(15);
  });

  // Add more test cases as needed
});
