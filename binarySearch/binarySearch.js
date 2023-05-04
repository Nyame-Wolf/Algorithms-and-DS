const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return false;

  let midIndex = Math.floor((start + end) / 2);

  if (arr[midIndex] === target) {
    return true;
  } else if (arr[midIndex] > target) {
    return binarySearch(arr, target, start, midIndex - 1);
  } else {
    return binarySearch(arr, target, midIndex + 1, end);
  }
};
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const target = 7;
console.log(binarySearch(arr, target));
