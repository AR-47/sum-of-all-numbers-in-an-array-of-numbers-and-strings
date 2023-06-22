/**
 * Return the total SUM of all numbers in an array of numbers and strings.  Use array functions, not a loop. (TypeScript)
 * calculateSum([”old”, 10, 20, “pond”, -5, -3]) should return 22
 * 
 * program: calculateSum
 * inputs: array of strings and numbers
 * return: the sum of all numbers - number
 */

type StringsAndNumbersArr = (string | number)[]


function calculateSum(arr:StringsAndNumbersArr): number {

    let filteredArr: any[] = arr.filter(isNumber)
    let result = filteredArr.reduce((acc, currVal) => acc + currVal, 0) 

    return result;
}

// function that returns true if an input value is of type Number, otherwise, returns false
function isNumber(value: string | number): boolean {
    return typeof value === 'number'
}

export {calculateSum, isNumber};
