import test from "./test.mjs";

/*
    Challenge: Implement the `multiply` function.

    The function `multiply` takes an indefinit number of parameters (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
    It should return the product of the numbers, with the following constraints:

    1. If one or more of the parameters are not valid numbers, the function should return NaN (Not a Number).
    2. If either parameter is a string that can be converted to a number (e.g., "3"), it should be parsed into a number before multiplying.
    3. If either parameter is Infinity or -Infinity, return Infinity or -Infinity based on the rules of multiplication.
    4. Handle edge cases like multiplying by 0 and NaN appropriately.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `multiply` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function multiply(...numbers) {

    for (let arg of numbers) {
        if (arg === Infinity || arg === -Infinity)
            return arg;
        arg = parseInt(arg);
        if (isNaN(arg) || typeof arg !== "number") {
            return NaN;
        }
    }
   
    let total = 1;
    for (const arg of numbers) {
        total *= arg;
    }
    return total;
}

//#endregion



//#region Tests --------------------------------------------------------------------
// Write your tests her.

const tests = test("Multiply Function");

// Valid inputs
tests.isEqual(multiply(2, 2), 4, "Product of 2 and 2 should be 4");
tests.isEqual(multiply(2, 2, 2, 3), 24, "Product of 2, 2, 2, and 3 should be 24");
tests.isEqual(multiply(-1, 2, 3), -6, "Product of -1, 2 and 3 should be -6");
tests.isEqual(multiply(2.5, 3.5), 8.75, "Product of 2,5 and 3,5 should be 8,75");
tests.isEqual(multiply("2", 2), 4, "Product of '2' and 2 should be 4");

// Invalid inputs
tests.isNotANumber(multiply(NaN, 2), "Product of NaN and 2 should be NaN");
tests.isNotANumber(multiply(undefined, 2, 3), "Product of undefined, 2 and 3 should be NaN");
tests.isNotANumber(multiply(null, 5), "Product of null and 5 should be NaN");

//Edge cases
tests.isEqual(multiply(Infinity, 2), Infinity, "Product of Infinity and 2 should be Infinity");
tests.isEqual(multiply(2, -Infinity), -Infinity, "Product of 2 and -Infinity should be -Infinity");
tests.isEqual(multiply(2, 0), 0, "Product of 2 and 0 should be 0");
//#endregion