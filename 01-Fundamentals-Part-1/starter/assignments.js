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
