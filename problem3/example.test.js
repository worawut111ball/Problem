function evaluate(str) {
  const tokens = str.split(' ');

  const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  };

  let result = parseInt(tokens[0], 10);
  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const operand = parseInt(tokens[i + 1], 10);
    result = operators[operator](result, operand);
  }

  return result;
}

describe('evaluate function', () => {
  test('Example 1', () => {
    expect(evaluate("2 + 3 - 1")).toBe(4);
  });

  test('Example 2', () => {
    expect(evaluate("10 - 5 + 2")).toBe(7);
  });

  // Add more test cases if needed
});
