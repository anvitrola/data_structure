const { RomanToInt } = require("./roman-to-int");

describe("Roman-to-Int", () => {
  it("should be able to correctly return the roman number as an integer", () => {
    expect(RomanToInt("III")).toBe(3);
    expect(RomanToInt("LVIII")).toBe(58);
    expect(RomanToInt("MCMXCIV")).toBe(1994);
  });
});
