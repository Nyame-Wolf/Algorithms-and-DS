function findOdd(A) {
  /*Given an array of integers, find the one that appears an odd number
   of times. There will always be only one integer that appears an odd 
   number of times. */
  const dict = A.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  console.log(dict);
  for (const key in dict) {
    if (dict[key] % 2 === 1) {
      return Number(key);
    }
  }
  return null;
}

// best solns
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}
// tests
// const assert = require('chai').assert;

// describe('Example tests', function() {

//   function doTest(a, n) {
//     assert.strictEqual(findOdd(a), n, `Incorrect answer for input=[${a}]`);
//   }

//   it("Example tests", () => {
//     doTest([7], 7);
//     doTest([0], 0);
//     doTest([1,1,2], 2);
//     doTest([0,1,0,1,0], 0);
//     doTest([1,2,2,3,3,3,4,3,3,3,2,2,1], 4);
//   });

//   it("Fixed tests", () => {
//     doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
//     doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//     doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//     doTest([10], 10);
//     doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
//     doTest([5,4,3,2,1,5,4,3,2,10,10], 1);
//   });
// });
