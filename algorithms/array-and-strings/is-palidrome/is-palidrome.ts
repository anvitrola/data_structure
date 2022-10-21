/*
Given two strings s and t, write a function to determine if t is a palindrome of s.

Example 1:
Input: s = "anagram", t = "magrana"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Solution:
1. Create an array of characteres based on the first and second strings
2. Compare these two arrays length. If the lengths are different, return false 
3. Create a for statement with two variables and set one to start wiyh 0 and will be increased
and another one that will start with arr.length - 1
4. Compare the first word first char with the second word last char and return false if it doesn't match

Complexity -> O(n)
*/

export function isPalidrome(firstWord: string, secondWord: string) {
  const firstWordChars = firstWord.split("");
  const secondWordChars = secondWord.split("");

  //if the two arrays don't have the same size we don't even need to go on
  if (firstWordChars.length !== secondWordChars.length) return false;

  /**
   * here we create two couters, the first one will alow us to iterate the first word char array
   * from the 1st element to the last and the second counter will allow us to read the second word
   * char array from the last to the first
   */
  for (
    let i = 0, j = firstWordChars.length - 1;
    i < firstWordChars.length;
    i++, j--
  ) {
    if (firstWordChars[i] !== secondWordChars[j]) {
      return false;
    }
  }

  return true;
}
