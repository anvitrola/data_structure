import { ReverseString, ReverseStringWithJSArrayMethods } from "./reverse-string";

describe("Reverse-String", () => {
  it("should be able to properly reverse a string", () => {
    expect(ReverseString("uhsnamiH")).toBe("Himanshu");
    expect(ReverseStringWithJSArrayMethods("uhsnamiH")).toBe("Himanshu");
  });
});
