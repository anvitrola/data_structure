/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Solution:
1. Transform the number array into a hashmap in which the key will be the number itself and the value will be the number position*
2. Inside a for loop, iterate the number array and calculate the difference between the target and the current number
3. Try to perform a hashmap.get(difference) and if the return isn't undefined, it means that we found a number that matches the sum, ie,
in our hashmap there's a number that, if summed with the number we're currently focusing in the loop, will match the target


* Why transform it into a hashmap? Basically, it's a combination problem. 
To avoid O(n²) complexity. We will already have to iterate the array once and if we don't tranform
the array into a hashmap, we will have to iterate the array again inside the first iteration to test because we need to see
if there's a match for all numbers with all numbers.

Edge cases:
target is 0 -> return ""
nums array.length === 0 -> return ""
any numbers sum matches the target -> return ""

complexity: O(n) in terms of time and space

*/

export function TwoSum(nums: number[], target: number) {
  if (!nums.length || target === 0) {
    return "";
  }

  const numbersMap = new Map<number, number>();

  //adding numbers to numbersMap in which the key is the number itself and the value is it's position
  for (let i = 0; i <= nums.length; i++) { //Complexity: O(n) 
    numbersMap.set(nums[i], i);
  }

  //iterating the given numbers array to calculate the difference between the target and each number
  for (let i = 0; i <= nums.length; i++) { //Complexity: O(n) 
    const difference = target - nums[i];

    //looking if the there's a number that matches the difference we just calculated in the numbers hashmap
    const possiblyMatchPosition = numbersMap.get(difference);
    
    //return the matching numbers position if hashmap get doesn't return undefined
    if (possiblyMatchPosition) {
      return [i, possiblyMatchPosition];
    }
  }

  return "";
}
