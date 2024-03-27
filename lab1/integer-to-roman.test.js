// Observations:
// IV, IX, XL, XC, CD, CM (1 - 5 = 4, 1 - 10 = 9)
// Max unit come first: 1000, 100, 10, 1

// Time Complexity: O(1)
function intToRoman(num) {
  const u4 = ["", "M", "MM", "MMM"];
  const u3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const u2 = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const u1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  return (
    u4[Math.floor(num / 1000)] +
    u3[Math.floor((num % 1000) / 100)] +
    u2[Math.floor((num % 100) / 10)] +
    u1[Math.floor(num % 10)]
  );
}

test("intToRoman: 1 - 100", () => {
  expect(intToRoman(1)).toBe("I");
  expect(intToRoman(3)).toBe("III");
  expect(intToRoman(4)).toBe("IV");
  expect(intToRoman(9)).toBe("IX");
  expect(intToRoman(58)).toBe("LVIII");
});

test("intToRoman: 100 - 1000", () => {
  expect(intToRoman(555)).toBe("DLV");
  expect(intToRoman(558)).toBe("DLVIII");
  expect(intToRoman(900)).toBe("CM");
});

test("intToRoman: 1000 - 3999", () => {
  expect(intToRoman(1994)).toBe("MCMXCIV");
  expect(intToRoman(3999)).toBe("MMMCMXCIX");
});
