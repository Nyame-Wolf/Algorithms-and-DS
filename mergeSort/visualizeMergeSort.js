const mergeSort = (arr) => {
  // complexity O(log n ) halfs array each time
  // Base case check that the array length is more than 1
  if (arr.length < 2) {
    return arr;
  }

  // Get the index of the item at the center, if odd or if even, index  b4 midpoint
  const midIndex = Math.floor(arr.length / 2);

  /* split the array into 2, note slice does not include las index, but up to the index 
  hence we use arr.length */
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.slice(midIndex, arr.length);

  /* use a helper function to resursively sort the array by splittiing until there 
  is only 1 item per array.*/
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  // helper function to merge sorted arrays complexity O(n) since each item is checked

  // Initialize below
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    /* ensure that the left index is less than the length of left array 
  and the right index is less than the length of right array */
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      /* compare items on each index and if the one on left is less, push it
     too the result array */
      resultArr.push(leftArr[leftIndex]);
      // increament each time once an item with index from left array is used
      leftIndex += 1;
    } else {
      resultArr.push(rightArr[rightIndex]);
      // increament each time once an item with index from right array is used
      rightIndex += 1;
    }
  }
  /* Just incase we are dealing with an even array, add items from all 3 arrays since 
  at the last iteration one side will have the index equal to array.length i.e leftIndex
  might be equal to leftArr.length or rightIndex may  be equal to rightArr.length  */
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

console.log(mergeSort([6, 1, 23, 3, 0]));
/*
- On first mergeSort, array is broken into 2 say [6,1] and [23,3,0]
- Since base case has not been hit, further split left side( [6] , [1]) and rightside
[23], [3,0]
- further split for the right side [3], [0], until all arrays have only 1 item which is sorted, 
since there is no items to compare it to

- then merge is called on the loops starting with the last 1. Results in a sorted array of
[0,3] 
- then it further sorts the arrays to get a sorted left side [1,6] and a  sorted right side,
 [0,3,23]
- merge is then called one last time which sorts the array further t one [ 0,1,3,6,23]

Complexity:
O(logn)(mergeSort) * O(n)(merge)
*/
