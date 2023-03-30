/*
If the given input is an array of numbers, return the sum of all 
the positives ones. If the array is empty or there aren't any positive 
numbers, return 0.
*/

const input = [1, -4, 12, 0, -3, 29, -150];
//using reduce
input.reduce((acc, item) => {
  if (item > 0) {
    acc += item;
  }
  return acc;
}, 0);

// using filter
let sum = 0;
input.filter((item) => item > 0).reduce((acc, item) => acc + item, 0);
//Result
42;
