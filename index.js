// EXAMPLE 1 - Check if a value is a Float or an Integer in JavaScript

// ✅ check if a value is a float
function isFloat(value) {
  if (
    typeof value === 'number' &&
    !Number.isNaN(value) &&
    !Number.isInteger(value)
  ) {
    return true;
  }

  return false;
}

console.log(isFloat(1)); // 👉️ false
console.log(isFloat(1.5)); // 👉️ true
console.log(isFloat(-1.5)); // 👉️ true
console.log(isFloat('1.5')); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 2 - Checking if a value is an integer

// console.log(Number.isInteger(1)); // 👉️ true
// console.log(Number.isInteger('1')); // 👉️ false
// console.log(Number.isInteger(1.5)); // 👉️ false

// ------------------------------------------------------------------

// // EXAMPLE 3 - A custom function that checks if the value is int or float

// function isIntOrFloat(value) {
//   if (typeof value === 'number' && !Number.isNaN(value)) {
//     if (Number.isInteger(value)) {
//       console.log('The value is an integer', value);
//     } else {
//       console.log('The value is a floating-point number', value);
//     }
//   } else {
//     console.log('The value is not a number', value);
//   }
// }

// isIntOrFloat(1); // 👉️ The value is an integer 1
// isIntOrFloat(1.5); // 👉️ The value is a floating-point number 1.5
// isIntOrFloat('1'); // 👉️ The value is not a number 1
// isIntOrFloat(5.0); // 👉️ The value is an integer 5
// isIntOrFloat('test'); // 👉️ The value is not a number test

// ------------------------------------------------------------------

// // EXAMPLE 4 - Checking if the value is a valid integer using `RegExp.test()`

// function isInteger(value) {
//   return /^-?[0-9]+$/.test(value);
// }

// console.log(isInteger(12)); // 👉️ true
// console.log(isInteger(-12)); // 👉️ true
// console.log(isInteger(1.0)); // 👉️ true
// console.log(isInteger('1')); // 👉️ true
// console.log(isInteger(1.5)); // 👉️ false
