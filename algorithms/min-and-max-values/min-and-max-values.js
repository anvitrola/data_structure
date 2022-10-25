export function ExtractMinAndMaxValuesFromArray(arr) {
  let min = Number.MAX_VALUE,
    max = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }

    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return {
    min,
    max,
  };
}
