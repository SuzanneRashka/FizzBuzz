var myFunctions = require('../index.js');
describe('FizzBuzz', function() {
  it('returns "YUP!"', function() {
    expect(myFunctions.fizz(10)).toEqual("Buzz")
  });
  it('returns "YUP!"', function() {
  expect(myFunctions.fizz(9)).toEqual("Fizz")
  });
  it('returns "YUP!"', function() {
    expect(myFunctions.fizz(91)).toEqual("91")
  });
  it('returns "YUP!"', function() {
    expect(myFunctions.fizz(90)).toEqual("FizzBuzz")
  });
})
