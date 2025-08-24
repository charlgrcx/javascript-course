// // // JavaScript Fundamentals - Part 1
// // // We'll write our code here!

// // let js = "amazing";
// // console.log(40 + 8 + 23 - 10);
// // console.log(js);


// // console.log("===VARIABLES ===");
// // let firstName = "Jonas";
// // console.log(firstName);

// // let age = 30;
// // console.log(age);
// // age = 50;
// // console.log(age);

// // const birthYear = 1991;
// // console.log(birthYear);

// // const PI = 3.1415;
// // console.log(PI);

// // var job = "programmer";
// // job = "teacher";
// // console.log(job);

// // const country = "Philippines";
// // const language = "Filipino";

// // age = 25;
// // age = 26;

// // console.log("=== DATA TYPES ===");

// // // Number
// // let id = 12345;
// // console.log(id);
// // console.log(typeof id);

// // // String
// // let lastName = "Doe";
// // console.log(lastName);
// // console.log(typeof lastName);

// // // Boolean
// // let javaScriptIsFun = true;
// // console.log(javaScriptIsFun);
// // console.log(typeof javaScriptIsFun);

// // // undefined
// // let year;
// // console.log(year);
// // console.log(typeof year);

// // let dynamicVariable = 40;
// // console.log(dynamicVariable, typeof dynamicVariable);

// // // change to a string
// // dynamicVariable = "I am now a string";
// // console.log(dynamicVariable, typeof dynamicVariable);

// // // change to a boolean
// // dynamicVariable = true;
// // console.log(dynamicVariable, typeof dynamicVariable);


// // Basic Operators - Math
// console.log("==== MATH OPERATORS ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// // More math operators
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations");
// console.log("Addition: ", 10 + 5);
// console.log("Subtraction: ", 20 - 8);
// console.log("Multiplication: ", 4 * 7);
// console.log("Division: ", 15 / 3);
// console.log("Exponentiation: ", 2 ** 3); // 3 * 3 * 3

// // Math with Strings!
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);

// console.log("Hello " + "World" + "!");

// // Assignment Operators
// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("x starts as:", x);

// x *= 4;
// console.log("x starts as:", x); 

// x /= 2;
// console.log("x starts as:", x); 

// x++;
// console.log("x starts as:", x); 

// x--;
// console.log("x starts as:", x);

// // comparison operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison: ");
// console.log(ageJonas > ageSarah); 
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison: ");
// console.log(25 > 10);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >=18;
// console.log("Sarah is an adult:", isFullAge);

// console.log("Complex comparison");
// console.log(now - 1991 > now - 2018);

// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// // Coding Challenge #1
// // TEST DATA 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;

// const markHigherBMI = bmiMark > bmiJohn;

// console.log("=== BMI Calculation Test Data 1 ===");
// console.log("Mark's BMI: ", bmiMark);
// console.log("John's BMI: ", bmiJohn);
// console.log("Who has higher BMI? ", markHigherBMI);

// //TEST DATA 2
// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// const bmiMark2 = massMark2 / heightMark2 ** 2;
// const bmiJohn2 = massJohn2 / heightJohn2 ** 2;

// const markHigherBMI2 = bmiMark2 > bmiJohn2;

// console.log("=== BMI Calculation Test Data 2 ===");
// console.log("Mark's BMI: ", bmiMark2);
// console.log("John's BMI: ", bmiJohn2);
// console.log("Who has higher BMI? ", markHigherBMI2);

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew); 

console.log(`I'm ${2037 - 1991} years old`);
console.log(`Math works here: ${2 + 3} equals five`);


if (age > 18) {
    console.log(`Sarah can start a driving license`);

} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years : )`);
}


console.log(Boolean(0)); //falsy value
console.log(Boolean(undefined)); // falsy value
console.log(Boolean("Jonas")); //truthy value
console.log(Boolean({})); //truthy value
console.log(Boolean("")); //falsy value


////////////////////////////////////
// Coding Challenge #2

// Reuse your BMI calculation from Challenge #1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

// Your if/else statement here:
if (BMIMark > BMIJohn) {
   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else{
   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

// Compare BMIs and create intelligent messages

// Use template literals for beautiful output