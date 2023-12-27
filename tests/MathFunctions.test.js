// Import the function to be tested
const { add } = require("../src/mathFunctions"); // Adjust the path as needed

// Describe the test suite (a group of related tests)
describe("Math Functions", () => {
  test("Addition", () => {
    const result = add(3, 5);
    expect(result).toBe(8);
  });

  // You can add more test cases here to cover different scenarios
});
