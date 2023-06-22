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
    
    let result = arr.reduce((accumlator, currentValue) =>
        (typeof currentValue === Number) ? accumlator + currentValue : 0
    )

    return result;
}

export {calculateSum};
