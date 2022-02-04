import { timesTwo } from "./functions";

// this is jest syntax, configured when we spin up a new react app

// first argument = name of test,
// second argument = what should be tested
test("Multiplies by two", () => {
  // passing a callback function and using the 'expect' assertion
  //to call a function with a certain value (4), and use toBe
  // matcher function to find out if the result equals 8
  expect(timesTwo(4)).toBe(8);
});

// we write the test first, watch them fail, and try to get them to pass
// this is 'test-driven development'
