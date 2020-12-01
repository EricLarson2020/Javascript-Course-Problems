/*
let country = "United States of America";
let continent = "North America";
let population = 30000000;
let city = "Denver";
console.log(country);
console.log(continent);
console.log(population);
console.log(country, continent, population);
console.log(city);
*/

//This is a comment (I am being ignored, I can write anything here)

/*
Everything here is commented out, I can comment out a bunch of stuff with this
*/
/*
console.log(PI);

console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof "Jonas");
*/
// typeof operator show the type of the vaule
// Only need the let on the initial declaration, I am making a value (value), and just changing what is in the box
/*
javascriptIsFun = "Hello";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
*/
/*
console.log(typeof null);
The above is a bug
*/

// Const, let, and var - other ways to declare varialbes
// var is old way

//let is used to declare variables that can change later
/*
let age = 30;
console.log(age);
age = 31;
console.log(age);
//This is we mutated a variable (changed to let value)

// Const variables cant be changed

const birthYear = 1991;
console.log(birthYear);
birthyear = 1990;
console.log(birthYear);
//The year does not change

// const job; (Cant do this)
// Use const by default, and let when you are sure that it will chagne

// Let should only be used when you know the value needs to change

// Completely avoid var as it is an old way to define variables.

var job = "programmer";
job = "teacher";

// never use var

// The below does not create a variable in a scope, it is bad practice.
lastName = "Bob";
console.log(lastName);
*/
// Operators lets use transform and combine values
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const irstName = "Jonas";
const lastName = "Carson";

console.log(irstName + " " + lastName);
// adds/concatonates strings together

// Assignment opperators

let x = 10 + 5;
// Two operators above, + and =, the + comes beofre the equals

console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// ++ increment by 1, -- decrement by 1

//comparison operators

console.log(ageJonas < ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

// operator precedience
// mdn opperator precedence

console.log(25 - 10 - 5);

let u, v;
u = v = 25 - 10 - 5;

console.log(u, v);
// assignment does the right side first
// operators do the left side fist
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log(averageAge);

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
markHeight1 = 1.69;
markWeight1 = 78;
johnWeight1 = 92;
johnHeight1 = 1.95;

markHeight2 = 78;
markWeight2 = 1.69;
johnWeight2 = 92;
johnHeight1 = 1.95;

const markBMI = markWeight1 / markHeight1 ** 2;
const johnBMI = johnWeight1 / johnHeight1 ** 2;

var markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// template literals
const year = 2077;
const ericFirstName = "Eric";
const job = "teacher";
const birthYear = 1991;

const eric =
  "I'm " +
  ericFirstName +
  ", a " +
  (year - birthYear) +
  " years old " +
  job +
  "!";
console.log(eric);

// Template literals make the above easier

const ericNew = `I'm ${ericFirstName}, a ${year - birthYear} year old ${job}!`;
console.log(ericNew);

console.log(`Just a regular string...`);

// You can always use backticks for strings if you want
// bad old way to do new lines
console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);

// if and else statements

// Program that checks if a person can take a driver lisence test

const age = 15;
const isOldEnough = age >= 18;
// emoji cmd control space
if (isOldEnough) {
  console.log("Sharah can start driving license 😜");
} else {
  console.log("Sharah is to young to learn to drive");
  const yearsLeft = 18 - age;
  console.log(`Sarah is too yourng. Wait another ${yearsLeft} years.`);
}

// The above is called a control structure.

const personBirthYear = 1991;
let century;
if (personBirthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
// anything defined in a codeblock wont exist outsdie it
console.log(century);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else if (johnBMI < markBMI) {
  console.log(`John's BMI (${johnBMI} is higher than Mark's (${markBMI})!`);
} else {
  console.log(`John and Mark have the same BMI (${johnBMI}).`);
}

// type conversion: manually convert from one type ot another

// type coversion: javascipt does the converstion for us
//type conversion
const inputYear = "1991";
console.log(inputYear + 18);
// above gives '199118
console.log(Number(inputYear) + 18);
// Above gives 2009

console.log(Number("Hello"));
console.log(typeof NaN);
// NaN if you try to convert something not a number to number
// NaN is of a number type

console.log(String(23));
// The above gives me a string

// You can covert to a number or string

// Type Coercion (Javascript does the conversion for us)

console.log("I am " + 23 + " years old");
// if there is an operator between string and number, the number is converted to a string
// can also do
console.log("I am " + String(23) + " years old");
console.log("23" - "10" - 3);
// Here javascript will convert the 10 and 23 to a number and subtract them

console.log("23" * "2");
//above give 46, since the multiplier needs numbers

console.log("23" > "18");
// only in the + operator are numbers converted to strings
// For all other operators, strings are converted to numbers if applicatble

let n = "1" + 1;
// This adds on 1 to 1 giving us 11

n = n - 1;
// This subtracts 11 - 1 giving us 10
console.log(n);
// Thus for all + coercion the strings are added together including numbers

console.log(2 + 3 + 4 + "5");
// This gives 95
console.log("10" - "4" - "3" - 2 + "5");
// This gives 15

// The falsy values: 0, '', undefined, null, NaN => These are all false when converted to a boolean
// Everything else is converted to ture

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Eric"));
console.log(Boolean(""));
console.log(Boolean({}));

// coercion via boolean

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job");
}

// You should get a job is displayed, because money = 0 is false

let height;

if (height) {
  console.log("Yay!");
} else {
  console.log("Height is Undefined");
}

// Equality Operators

const myAge = 18;

// strick equality operator
if (myAge === 18) console.log("You just became an adult");
/// The tripple equal show that the value is exactly on the right.

// loose equality operator => these perform coercion
if ("18" == 18) console.log("Hello");
// avoid the loose equality operator as much as you can (introduces weird bugs)

// prompt function => gets input from screen

const favorite = Number(prompt("What's your favorite number"));
console.log(favorite);

if (favorite === 23) {
  //
  console.log("Cool! 23 is an amazing numbe!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else {
  console.log("Never mind it is quite lame");
}

// == and === might give different things due to the data type

if (favorite !== 23) console.log("Why not 23?");
*/
// AND, OR, and NOT operators for boolean logic
// Sarash has a driver liscense
// Sarah has good vision

const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = false;
console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive && hasGoodVision && !isTired) {
  console.log("Sharah is able to drive!");
} else {
  console.log("Someone else should drive");
}

console.log(hasDriverLicense || hasGoodVision || isTired);
console.log(hasDriverLicense && hasGoodVision && isTired);

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


*/
let dolphin1 = 100;
let dolphin2 = 100;
let dolphin3 = 100;

let koalas1 = 100;
let koalas2 = 100;
let koalas3 = 100;

const dolphinAverage = (dolphin1 + dolphin2 + dolphin3) / 3;
const koalasAverage = (koalas1 + koalas2 + koalas3) / 3;

if (
  dolphinAverage > koalasAverage &&
  (dolphinAverage >= 100 || koalasAverage >= 100)
) {
  console.log(`The dolphin team won with an avage score of ${dolphinAverage}`);
} else if (
  koalasAverage > dolphinAverage &&
  (dolphinAverage >= 100 || koalasAverage >= 100)
) {
  console.log(`The koalas team won with an average score of ${koalasAverage}`);
} else if (
  koalasAverage === dolphinAverage &&
  (dolphinAverage >= 100 || koalasAverage >= 100)
) {
  console.log(`The two teams tied with an average score of ${dolphinAverage}`);
} else {
  console.log(`Sorry Neither team scored high enough to win
  but better luck next time`);
}

// The switch statement

const day = "wednesday";

switch (day) {
  case "monday": //day === 'monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Perpare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

// statements vs expressions

// expression bit of code that produces a value like 3 + 4, as it creates an expression
// 1001
// true && false
// The above produce a value

// Statements do not give a value

if (23 > 10) {
  const str = "23 is bigger";
}

// The above does not produce a value, it simple sets a varialbe.

console.log(`I'm ${2037 - 1991} years old`);
//above is an expression (if I put an if in, javascript would ot understand as you cannot compbine a statement and expression)

// conditional operator
//ternary operator
const age = 23;
age >= 18 ? console.log("I like pizza") : console.log("I loke food");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
// the drink2 is an expression, thus it must be defined outside of the statement if block

console.log(`I like to drink ${drink}`);
// The ternary opperator produces a value so I can put it in the string which also produces a value, the if statement wont work in that case

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

const bill = 430;
let tip;

// if (bill > 50 && bill < 300) {
//   tip = bill * 0.15;
// } else {
//   tip = bill * 0.2;
// }

bill > 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }.`
);
