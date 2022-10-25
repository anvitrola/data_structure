export function ReverseString(string) {
  let newString = [];

  let stringArr = string.split("");

  for (let i = stringArr.length - 1; i >= 0; i--) {
    newString.push(stringArr[i]);
  }

  return newString.join('');
}

export function ReverseStringWithJSArrayMethods (string) {
    return string.split('').reverse().join('')
}