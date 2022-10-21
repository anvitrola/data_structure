import { isPalidrome } from "./is-palidrome";

describe("isPalidrome", () => {
  it("should return true if given words are palidrome", () => {
    expect(isPalidrome("anna", "anna")).toBe(true);
  });

  it("should return false if given words are not palidrome", () => {
    expect(isPalidrome("banana", "banana")).toBe(false);
  });
});
