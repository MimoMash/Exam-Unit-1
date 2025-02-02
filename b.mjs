import test from "./test.mjs";

/*
    Challenge: Implement the `formatName` function.

    The function `formatName` takes a single parameter `name` (a string) and formats it based on the following rules:

    1. If `name` is not a string, return null.
    2. Remove any leading or trailing whitespace from the string.
    3. Capitalize the first letter of each word in the name (e.g., "john doe" becomes "John Doe").
    4. If the string is empty (after trimming), return an empty string.
    5. If the string contains special characters (e.g., "@", "#", etc.), return null.

    Your task:
    1. Write the tests (within the tests region) that correspond to the described behavior.
    2. Complete the logic of the `formatName` function to pass all the tests.

*/

//#region function -----------------------------------------------------------------
// Write your function her.

function formatName(name) {
    if (typeof name !== "string") {
        return null;
    }

    name = name.trim();

    if (name == "") {
        return "";
    }

    name = name.split(" ");
    for (let i = 0; i < name.length; i++) {
        name[i] = name[i].replace(name[i][0], name[i][0].toUpperCase());
    }
      return name.join(" ");
}

//#endregion





//#region Tests --------------------------------------------------------------------
// Write your tests her.
const tests = test("Format Name Function")

tests.isEqual(formatName(2), null, "2 is not a string");
tests.isEqual(formatName("Mohammad"), "Mohammad", "Format Name Ok");
tests.isEqual(formatName("    Mohammad   "), "Mohammad", "Removed leading and trailing whitespace");
tests.isEqual(formatName("mohammad ahmadi"), "Mohammad Ahmadi", "Capitalization works");
tests.isEqual(formatName("  "), "", "Empty string");
tests.isEqual(formatName("mohammad#"), null, "Special character filter works");

//#endregion