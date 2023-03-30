const input = [1, 2, 3, 4, 5];
/*Square the value of every element in the array. Presume that you 
will only get numbers in the input array.*/

//using reduce
input.reduce((acc, item) => {
  acc.push(item ** 2);
}, []);

//using map
input.map((item) => item ** 2)[
  // Result
  (1, 4, 9, 16, 25)
];
