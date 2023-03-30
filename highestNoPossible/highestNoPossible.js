function descendingOrder(n) {
  /* takes any non-negative integer as an argument and return it with 
    its digits in descending order. Essentially, rearrange the digits to 
    create the highest possible number.*/
  let numS = n
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
  return Number(numS);
}

// best soln:
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
}

tests;
// const { assert } = require("chai")

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(descendingOrder(0), 0)
//     assert.strictEqual(descendingOrder(1), 1)
//     assert.strictEqual(descendingOrder(111), 111)
//     assert.strictEqual(descendingOrder(15), 51)
//     assert.strictEqual(descendingOrder(1021), 2110)
//     assert.strictEqual(descendingOrder(123456789), 987654321)
//     })
//   })
