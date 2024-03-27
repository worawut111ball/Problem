function jumpGame(nums) {
    let maxReach = 0;
    for (let i = 0; i < nums.length; i++) {
        if (maxReach < i) {
            return false;
        }
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    return false;
}
module.exports = jumpGame;

describe('jumpGame', () => {
  it('Example Testcase 1', () => {
    const nums = [2, 3, 1, 1, 4];
    const result = jumpGame(nums);
    expect(result).toBe(true);
  });

  it('Example Testcase 2', () => {
    const nums = [3, 2, 1, 0, 4];
    const result = jumpGame(nums);
    expect(result).toBe(false);
  });

  // Add more test cases as needed
});
