// Import the functions to be tested
const { add, subtract, multiply, divide } = require("../src/mathFunctions"); // Adjust the path as needed

// Describe the test suite (a group of related tests)
describe("Math Functions", () => {
  test("Addition", () => {
    const result = add(3, 5);
    expect(result).toBe(8);
  });

  test("Subtraction", () => {
    const result = subtract(10, 4);
    expect(result).toBe(6);
  });

  test("Multiplication", () => {
    const result = multiply(2, 7);
    expect(result).toBe(14);
  });

  test("Division", () => {
    const result = divide(8, 2);
    expect(result).toBe(4);
  });

  // Test division by zero
  test("Division by zero should throw an error", () => {
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
  });
});
