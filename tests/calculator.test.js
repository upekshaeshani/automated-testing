import { divide } from "../src/calculator.js";

test("divides two numbers correctly", () => {
    expect(divide(10, 2)).toBe(5);
});

test("throws TypeError when first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
});

test("throws TypeError when second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
});

test("throws TypeError when first argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
});

test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
});