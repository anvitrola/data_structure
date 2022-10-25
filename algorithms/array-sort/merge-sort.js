/**
 *
 * Merge sort is based on the "divide and conquer" technique
 *
 * Ex: [4, 2, 5, 7, 1, 8, 9]
 *
 * Solution:
 *
 * 1. First, we splice the array in the middle. After this operation, we will have two arrays:
 *     [4, 2, 5, 7] e [1, 8, 9]
 *
 * 2. Through recursion, we keep dividing the sub-arrays until it's length is equal 1
 *    2nd round:
 *      [4, 2, 5, 7] -> [4, 2] e [5, 7]                 [1, 8, 9] -> [1,8] e [9]
 *
 *    3rd round:
 *      [4, 2] -> [4] e [2] -> merge([4], [2])                             [1,8] -> [1] e [8] -> merge([1], [8])
 *      [5, 7] -> [5] e [7] -> merge([5], [7])                             [9]
 *
 * 3. After left && right arrays length is 1, we perfom merge. So, we will have:
 *    [2,4]
 *    [5,7]
 */

const list = [4, 2, 5, 7, 1, 8, 9];

function merge(leftArr, rightArr) {
  let sortedArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }

  while (leftArr.length) {
    sortedArr.push(leftArr.shift());
  }

  while (rightArr.length) {
    sortedArr.push(rightArr.shift());
  }

  return sortedArr;
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const middlePointer = Math.ceil(arr.length / 2);

  let left = arr.splice(0, middlePointer);

  //here we use '-' to get the last elements, ie, the elements left in the second half
  let right = arr.splice(-middlePointer);

  merge(mergeSort(left), mergeSort(right));
}

mergeSort(list);

/**
 *
 *
 */
