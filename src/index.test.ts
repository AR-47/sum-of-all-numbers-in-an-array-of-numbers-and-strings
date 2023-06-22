import { calculateSum } from "./index";


test('returns correct sum for an input array containing numbers and strings', () => {
    expect(calculateSum([1,2,'3'])).toEqual(3);
    expect(calculateSum([1,2.5,'hello', 'world'])).toEqual(3.5);
})

test('returns 0 for an array containing strings only', () => {
    expect(calculateSum(['hello', 'world'])).toEqual(0);
    expect(calculateSum(['Adil', 'Rahman'])).toEqual(0);
})