function evaluate(str) {
  expr = str.split(" ");
  let result = parseInt(expr[0]);

  for (let i = 1; i < expr.length; i += 2) {
    let op = expr[i];
    let num = parseInt(expr[i + 1]);
    if (op === "+") {
      result += num;
    } else if (op === "-") {
      result -= num;
    } else {
      throw new Error("Invalid operator");
    }
  }

  return result;
}

test("evaluate single number", () => {
  expect(evaluate("5")).toBe(5);
  expect(evaluate("10")).toBe(10);
});

test("evaluate single negative number", () => {
  expect(evaluate("-5")).toBe(-5);
});

test("evaluate 2 numbers", () => {
  expect(evaluate("10 + 5")).toBe(15);
  expect(evaluate("10 - 5")).toBe(5);
});

test("evaluate 2 numbers (negative numbers)", () => {
  expect(evaluate("10 + -5")).toBe(5);
  expect(evaluate("10 - -5")).toBe(15);
});

test("evaluate 3 or more numbers", () => {
  expect(evaluate("2 + 3 - 1")).toBe(4);
  expect(evaluate("2 + 3 + 1 + 10")).toBe(16);
  expect(evaluate("1 - 2 - 3 - 4")).toBe(-8);
  expect(evaluate("1 - 1 + 1 - 1 + 1 - 1 + 1 - 1")).toBe(0);
});

test("other operations rather than +, - must throw error", () => {
  expect(() => evaluate("5 * 2")).toThrow();
});
