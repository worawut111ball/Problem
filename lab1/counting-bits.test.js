// O(nlogn)
// function countingBits(n) {
//   let result = [0];
//   for (let i = 1; i <= n; i++) {
//     let count = 0;
//     let num = i;
//     while (num > 0) {
//       count += num & 1;
//       num = num >> 1;
//     }
//     result.push(count);
//   }

//   return result;
// }

// O(n)
// 1 => 0
// 2 => 10
// 4 => 100; 5 = 4 + 1 = 101
// 8 => 1000; 10 = 8 + 2 = 1010
function countingBits(n) {
  let pow = 0;
  let result = [0];
  let i = 1;

  while (i <= n) {
    if (i === Math.pow(2, pow)) {
      result.push(1);
      pow++;
    } else {
      // result[i] => return number of 1s in i
      result.push(1 + result[i - Math.pow(2, pow - 1)]);
    }
    ++i;
  }

  return result;
}

test("countingBits (normal cases)", () => {
  // Explanation: 0 --> 0, 1 --> 1, 2 --> 10
  expect(countingBits(2)).toEqual([0, 1, 1]);

  // Explanation:
  // 0 --> 0
  // 1 --> 1
  // 2 --> 10
  // 3 --> 11
  // 4 --> 100
  // 5 --> 101
  // 6 --> 110
  // 7 --> 111
  // 8 --> 1000
  expect(countingBits(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
});

test("countingBits: n = 0", () => {
  expect(countingBits(0)).toEqual([0]);
});
