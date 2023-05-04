const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  // creates a visual of array stepwise
  console.log(arr.slice(start, end));
  // base case. Once we go through entire array, it terminates
  if (start > end) {
    return false;
  }
  // binary search
  let midIndex = Math.floor((start + end) / 2);
  if (arr[midIndex] > target) {
    return binarySearch(arr, target, start, arr[midIndex] - 1);
  } else {
    return binarySearch(arr, target, arr[midIndex] + 1, end);
  }
};

arr = [];
for (let i = 1; i <= 1024; i++) {
  arr.push(i);
}
target = 10000;
console.log(binarySearch(arr, target));
