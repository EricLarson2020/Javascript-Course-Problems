// strict mode

// stict mode: special mode to make code more secure
// strict must be first thing in document
"use strict";

// stricts makes accidental errors harder to make
// lets us see errors, tells us what we did wrong
// makes visible errors in developer console
/*
let hasDriversLicense = false;
const passTest = true;

// It catches mispellings of variable names letting me know they are not defined
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

// introduces short list of variable names for features that might be defined later
// const interface = 'Audio';   will give error of reserved word
// or const private = 534;
// const if = 23; does not work either since it is already something in the language.

// functions
/*
//  code in {} is called function body
function logger() {
  console.log("My name is Jonas");
}

logger();
// calling / running / invoking the function.

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

fruitProcessor(5, 0);

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);

console.log(appleOrangeJuice);
*/

// Function Declarations vs. Expressions

/*
// parameter is the placeholder in teh function, the argument is the actual value we use to fill in that palceholder.
// function declaration
const age1 = calcAge1(1991);
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

console.log(age1);

// function expression : write function with no name, but store into variable, and varialbe is function


// expression is you assign the function to a variable without giving it a name
// Declaration is you declare the function and give it a name.
// expression produce values => functions are just values

// you can call function declarations before they are defined in the code
// You cannot do this for expressions
 */

// Arrow Functions

// added in ES6
/*
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1991);

// arrow Function : Good for 1-liner functions : Dont need return keyword for this.
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1991, "Jonas"));

// Difference- Arrow functions do not get a disk keyword.
*/

// functions calling other functions

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces ofapples and ${orangePieces} pieces of oranges`;
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

// Functions Review

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1;
  }
};
// return exits the function
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Jonas"));
