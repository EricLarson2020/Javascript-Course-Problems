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
/*
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    console.log(`${firstName} is already retired`);
    return -1;
  }
};
// return exits the function
// option up arrow/down arrow moves line up or down
// command d with multiple clicks produces multiple cursors
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Jonas"));

// function declaration: can be used before declared in code
function calcAge(birthYear) {
  return 2037 - birthYear;
}

// function expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// arrow function: no disk key_word
const calcAge = (birthYear) => 2037 - birthYear;

// function name(paramenters) {
  here is the body
  some sort of return statement that ends functions excutions
}

call function with function name(arguments);
*/

// Challenge Number One

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
const calcAverage = (score1, score2, score3) => {
  const average = (score1 + score2 + score3) / 3;
  return average;
};

const avgDolhins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

function checkWinner(avgDolhins, avgKoalas) {
  if (avgDolhins > avgKoalas * 2) {
    console.log(
      `The Dolhins won with an average score of ${avgDolhins} vs ${avgKoalas}`
    );
  } else if (avgKoalas > avgDolhins * 2) {
    console.log(
      `The Koalas won with an average score of ${avgKoalas} vs ${avgDolhins}`
    );
  } else {
    console.log(`No team wins`);
  }
}
checkWinner(avgDolhins, avgKoalas);
*/

// Arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";
// better way

const friends = [friend1, friend2, friend3];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);
console.log(friends[0]);
console.log(friends[2]);
// length is a property
console.log(friends.length);
console.log(friends[friends.length - 1]);

//expression vs statement => expression returns something

friends[2] = "Jay";
console.log(friends);
// array is not a primative value (const only restricts primative values).
// friends = ['Bob', 'Alice] => this is illegal

const firstName = "Eric";
const jonas = ["firstName", "Sword", 2037 - 1991, friends];
console.log(jonas);

// Exercise

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const allYears = [1990, 1967, 2002, 2010, 2018];
const age1 = calcAge(allYears[0]);
const age2 = calcAge(allYears[1]);
const age3 = calcAge(allYears[allYears.length - 1]);
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);
