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