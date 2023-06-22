import { calculateSum, isNumber } from "./index";

test("isNumber returns correct output", () => {
    expect(isNumber(3)).toEqual(true);
    expect(isNumber('hi')).toEqual(false);
})

test('calculateSum returns correct sum for input array containing numbers and strings', () => {
    expect(calculateSum([1,2,'3'])).toEqual(3);
    expect(calculateSum([1,2.5,'hello', 'world'])).toEqual(3.5);
    expect(calculateSum([1,2, 456,'hello', 'world'])).toEqual(459);
})

test('calculateSum returns correct sum for input array containing negative numbers', () => {
    expect(calculateSum([-1,2,'3'])).toEqual(1);
    expect(calculateSum([1,-10,5, 'hello', 'world'])).toEqual(-4);
    expect(calculateSum([10,20,-30,'hello', 'world'])).toEqual(0);
})

test('calculateSum returns 0 for input array containing strings only', () => {
    expect(calculateSum(['hello', 'world'])).toEqual(0);
    expect(calculateSum(['Adil', 'Rahman'])).toEqual(0);
})

test('calculateSum returns 0 for empty input array', () => {
    expect(calculateSum([])).toEqual(0);
})
