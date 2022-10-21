import { TwoSum } from "./two-sum";

const numsArray = [2, 7, 11, 15];

describe("TwoSum", () => {
  it("should return the right numbers position given a target and a numbers array ", () => {
    expect(TwoSum(numsArray, 9)).toEqual([0, 1]);
    expect(TwoSum(numsArray, 18)).toEqual([1, 2]);
  });

  it("should return an empty string if either the target or the numbers array length is equal to zero", () => {
    expect(TwoSum([], 5)).toEqual("");
    expect(TwoSum([], 0)).toEqual("");
    expect(TwoSum(numsArray, 0)).toEqual("");
  });

  it("should return an empty string if there's no numbers sum that matches the target", () => {
    expect(TwoSum(numsArray, 123)).toEqual("");
  });
});
