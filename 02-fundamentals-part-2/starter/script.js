// // // // console.log("Part 2 function is ready.");

// // // // // Functions - Declarations and Expressions
// // // // function logger() {
// // // //     console.log(`My name is Charlyn!`);
// // // // }

// // // // logger ();
// // // // logger ();
// // // // logger ();

// // // // function fruitProcessor(apples, oranges) {
// // // //     console.log(apples, oranges);
// // // //     const juice = `Juice with ${apples} apples and ${oranges} oranges`
// // // //     return juice;
// // // // }

// // // // console.log(fruitProcessor(11, 3));

// // // // // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // // // // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // // // // const juice3 = `Juice with 3 apples and 2 oranges.`;

// // // // const juice1 = fruitProcessor(5, 0);
// // // // const juice2 = fruitProcessor(2, 4);
// // // // const juice3 = fruitProcessor(3,2);

// // // // // Function expression
// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // const age1 = calcAge(2004);
// // // // console.log(age1);

// // // // console.log(calcAge(1991));

// // // // function introduce(firstName, lastName, age) {
// // // //     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age}`;
// // // //     return introduction;
// // // // }

// // // // console.log(introduce(`Charlyn`, `Navidad`, 20));
// // // // console.log(introduce(`John`));

// // // // function yearsUntilRetirement(birthYear, firstName) {
// // // //     const age = calcAge(birthYear);
// // // //     const retirement = 65 - age;

// // // //     if (retirement > 0) {
// // // //         return `${firstName} retires in ${retirement} years`;
// // // //     } else {
// // // //         return `${firstName} has already retired`;
// // // //     }
// // // // }
// // // // console.log(yearsUntilRetirement(2004, `Charl`));



// // // // /// function scope
// // // // const globalVar = "I am global";

// // // // function testScope() {
// // // //     const localVar = "I am local";
// // // //     console.log(globalVar);
// // // //     console.log(localVar);
// // // // }

// // // // testScope();
// // // // console.log(globalVar);
// // // // //console.log(localVar);

// // // // ////////////////////////////////////
// // // // // Coding Challenge #1

// // // // // Function to calculate average of 3 scores
// // // // function calcAverage(score1, score2, score3) {
// // // //   return (score1 + score2 + score3) / 3;
// // // // }

// // // // // Function to check winner
// // // // function checkWinner(avgDolphins, avgKoalas) {
// // // //   if (avgDolphins >= 2 * avgKoalas) {
// // // //     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
// // // //   } else if (avgKoalas >= 2 * avgDolphins) {
// // // //     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
// // // //   } else {
// // // //     return `No team wins (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
// // // //   }
// // // // }

// // // // // Test Data 1
// // // // let scoreDolphins = calcAverage(44, 23, 71);
// // // // let scoreKoalas = calcAverage(65, 54, 49);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // // Test Data 2
// // // // scoreDolphins = calcAverage(85, 54, 41);
// // // // scoreKoalas = calcAverage(23, 34, 27);
// // // // console.log(checkWinner(scoreDolphins, scoreKoalas));

// // // // const grades = [85, 92, 78, 96, 88];
// // // // console.log(grades);

// // // // const friends = [`Shekaina`, `Lia`, `Claire`, `Alexa`];
// // // // console.log(friends);

// // // // const mixed = ["Charlyn", 40, false, friends];
// // // // console.log(mixed);

// // // // //other way
// // // // const years = new Array(1991, 2020, 1984, 2008);
// // // // console.log(years);

// // // // // Acessing Array Elements
// // // // console.log(friends[0]);
// // // // console.log(friends[1]);
// // // // console.log(friends[2]);
// // // // console.log(friends[3]);
// // // // console.log(friends[4]);

// // // // // access the length
// // // // console.log(friends.length);

// // // // // changing array elements
// // // // friends[0] = "Jay";
// // // // console.log(friends);

// // // // const calcAge = function (birthYear) {
// // // //     return 2025 - birthYear;
// // // // }

// // // // const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// // // // console.log(ages);

// // // // const newLength = friends.push("John"); // reminder: push - adding in the last part of the list
// // // // console.log(friends);
// // // // console.log(newLength);

// // // // friends.unshift("Mark"); // reminder: unshift - adding in the first part of the list
// // // // console.log(friends);

// // // // // removing elements
// // // // const popped = friends.pop(); // reminder: pop - removing last item on the list
// // // // console.log(popped);
// // // // console.log(friends);

// // // // const shifted = friends.shift(); // reminder: remove first item on the list
// // // // console.log(shifted);
// // // // console.log(friends);

// // // // // finding an element
// // // // console.log(friends.indexOf('Lia'));

// // // // // includes
// // // // console.log(friends.includes('Claire'));
// // // // console.log(friends.includes('John'));

// // // // // Array Iterations
// // // // // Tradition For Loop
// // // // for (let i = 0; i < friends.length; i++) {
// // // //     console.log(friends[i]);
// // // // }

// // // // // one way to create for each
// // // // friends.forEach(
// // // //     function(friend, index) {
// // // //         console.log(`${index + 1}: ${friend}`);
// // // //     }
// // // // );

// // // // friends.forEach((friend, index) => {
// // // //         console.log(`${index + 1}: ${friend}`);
// // // //     });



// // // // const grades2 = [85, 92, 78, 96, 88, 74];
// // // // let total = 0;

// // // // for (let i = 0; i < grades2.length; i++) {
// // // //     total += grades2[i];
// // // // }

// // // // const average = total / grades2.length;
// // // // console.log(`Average grade: ${average.toFixed(2)}`);

// // // // let passedCount = 0;
// // // // grades2.forEach(grades2 => {
// // // //     if (grades2 >= 70) passedCount++;
// // // // })
// // // // console.log(`${passedCount} out of ${grades.length}`);


// // // ////////////////////////////////////
// // // // Coding Challenge #2 - Student Grade Manager

// // // const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// // // // Function to calculate average
// // // function calculateAverage(grades) {
// // //     let sum = 0;
// // //     for (let i = 0; i < grades.length; i++) {
// // //     sum += grades[i];
// // //   }
// // //   return sum / grades.length;
// // // }

// // // // Function to find highest grade
// // // function findHighestGrade(grades) {
// // //   let highest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] > highest) {
// // //         highest = grades[i];
// // //     }
// // //   }
// // //   return highest;
// // // }

// // // // Function to find lowest grade
// // // function findLowestGrade(grades) {
// // //   let lowest = grades[0];
// // //   for (let i = 1; i < grades.length; i++) {
// // //     if (grades[i] < lowest) {
// // //         lowest = grades[i];
// // //     }
// // //   }
// // //   return lowest;
// // //   // Hint: Similar to highest, but use < comparison
// // // }

// // // // Function to count passing students
// // // function countPassing(grades, passing) {
// // //     let count = 0;
// // //   for (let i = 0; i < grades.length; i++) {
// // //     if (grades[i] >= passing) {
// // //       count++; 
// // //     }
// // //   }

// // //   return count; 
// // // }
// // //   // Hint: Counter pattern - increment when condition is met


// // // // Generate complete report
// // // const average = calculateAverage(grades);
// // // const highest = findHighestGrade(grades);
// // // const lowest = findLowestGrade(grades);
// // // const passing = countPassing(grades, 70);

// // // console.log("=== GRADE REPORT ===");
// // // console.log(`Average: ${average.toFixed(2)}`);
// // // console.log(`Highest: ${highest}`);
// // // console.log(`Lowest: ${lowest}`);
// // // console.log(`Passing students: ${passing} out of ${grades.length}`);


// // // const jonasArray = [
// // //   "Jonas",
// // //   "Schmedtmann",
// // //   2037 - 1991,
// // //   "teacher",
// // //   ["Michael", "Peter", "Steven"],
// // // ];

// // // console.log(jonasArray[0]);
// // // console.log(jonasArray[1]);
// // // console.log(jonasArray[2]);

// // // console.log("=== OBJECTS ===");

// // // // Object literal syntax - curly braces create objects
// // // const jonasObject = {
// // //   firstName: "Jonas", // property: string value
// // //   lastName: "Schmedtmann", // property: string value
// // //   age: 2037 - 1991, // property: calculated value
// // //   job: "teacher", // property: string value
// // //   friends: ["Michael", "Peter", "Steven"], // property: array value
// // // };
// // // console.log(jonasObject);

// // // // Property access methods
// // // // Dot notation
// // // console.log(jonasObject.firstName);
// // // console.log(jonasObject.lastName);
// // // console.log(jonasObject.age);

// // // // Bracket notation
// // // console.log(jonasObject["firstName"]);
// // // console.log(jonasObject["lastName"]);
// // // console.log(jonasObject["age"]);

// // // const nameKey = "Name";
// // // console.log(jonasObject["first" + nameKey]);

// // // // Modifying existing properties
// // // jonasObject.job = "Programmer";
// // // jonasObject["age"] = 30;
// // // console.log(jonasObject);

// // // // add new properties
// // // jonasObject.location = "Philippines";
// // // jonasObject["twitter"] = "@jonasschmedtman";
// // // jonasObject.hasDriversLicense = true;
// // // console.log(jonasObject);

// // // // Wghen to use dot vs bracket notation
// // // const property = "job"
// // // console.log(jonasObject[property]);
// // // "1. Property name is in a variable"
// // // "2. Property name has spaces or special characters"
// // // "3. Property name is computed/dynamic"
// // // "Otherwise, use dot notation if property name is known and valid identifier"

// // // Objects and Arrays Decision Making
// // // Arrays
// // // const listOfYears = [1991, 1984, 2008, 2020];
// // // const shoppingList = ["apples", "bananas", "milk", "bread"];
// // // const testScores = [85, 92, 78, 96];

// // // // Objects 
// // // const person = {
// // //   name: "Jonas",
// // //   age: 46,
// // //   occupation: "teacher",
// // // };
// // // const car = {
// // //   brand: "toyota",
// // //   model: "Camry",
// // //   year: 2020,
// // //   color: "blue",
// // // };

// // // // objects can contain arrays, arrays can contain objects
// // // const student = {
// // //   name: "Sarah",
// // //   grades: [85, 92, 78],
// // //   address: {
// // //     street: '123 Main St',
// // //     city: "New York",
// // //   },
// // // };

// // // console.log(student.grades[0]);
// // // console.log(student.address.city);

// // // const john = {
// // //   firstName: "John",
// // //   lastName: "Doe",
// // //   birthYear: 1995,
// // //   job: "teacher",
// // //   friends: ["Mike", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge function (birthYear) {
// // //     return 2025 - birthYear;
// // //   },
// // // };

// // // console.log(john.calcAge(2000));

// // // // 'this' keyword
// // // const johnImproved = {
// // //   firstName: "John",
// // //   lastName: "Doe",
// // //   birthYear: 1995,
// // //   job: "teacher",
// // //   friends: ["Mike", "Peter", "Steven"],
// // //   hasDriversLicense: true,

// // //   calcAge: function () {
// // //    this.age = 2025 - this.birthYear;
// // //    return this.age;
// // //   },
// // //   getSummary: function() {
// // //     return '${this.firstName} is a ${this.calcAge()} -year old ${this.job}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license.';
// // //   }
// // // };

// // // console.log(johnImproved.calcAge());
// // // console.log(johnImproved.age);
// // // console.log(johnImproved.getSummary());


// // ////////////////////////////////////
// // // Coding Challenge #3 - User Profile System

// // const user = {
// //   firstName: "Sarah",
// //   lastName: "Johnson",
// //   birthYear: 1995,
// //   location: "New York",
// //   interests: ["photography", "travel", "coding"],
// //   friends: [
// //     { name: "Michael", status: "active" },
// //     { name: "Emma", status: "inactive" },
// //     { name: "David", status: "active" },
// //   ],
// //   isActive: true,

// //   // Calculate age method
// //   calcAge: function () {
// //     // Calculate age and store as this.age
// //     // Hint: Use new Date().getFullYear() for current year
// //     this.age = new Date().getFullYear() - this.birthYear;
// //     return this.age;
// //   },

// //   // Add friend method
// //   addFriend: function (name, status = "active") {
// //     // Add new friend object to this.friends array
// //     // Return the new length of friends array
// //     this.friends.push({ name, status: "active" });
// //     return this.friends.length;
// //   },

// //   // Get active friends count
// //   getActiveFriends: function () {
// //     // Filter friends array to count only active friends
// //     // Hint: use this.friends.filter()
// //     const activeFriends = this.friends.filter(
// //       (friend) => friend.status === 'active'
// //       );
// //     return activeFriends.length;
// //   },

// //   // Toggle active status
// //   toggleStatus: function () {
// //     // Switch this.isActive between true and false
// //     // Return the new status
// //     this.isActive = !this.isActive;
// //     return this.isActive;
// //   },

// //   // Generate profile summary
// //   getSummary: function () {
// //     // Create a social media style profile summary
// //     // Include: name, age, location, status, friend counts, interests
// //     // Use template literals for nice formatting
// //     const age = this.calcAge();     
// //     const activeFriendsCount = this.getActiveFriends();
// //     const status = this.active ? "active" : "away";
// //     return `
// //     === USER PROFILE SUMMARY ===
// //     Name: ${this.firstName} ${this.lastName}
// //     Age: ${this.calcAge()} 
// //     Location: ${this.location} 
// //     Currently: ${status}
// //     Friends: ${this.friends.length} total (${this.getActiveFriends()} active friends)
// //     Interests: ${this.interests.join(", ")}
// //     `;
// //   }
// // };

// // // Test your user profile system
// // console.log(user.getSummary());
// // user.addFriend("Alex", "active");
// // user.toggleStatus();
// // console.log(`\nAfter updates:`);
// // console.log(user.getSummary());



// // Select DOM Elements
// // querySelector - use css selectors

// const message = document.querySelector(".message");

// console.log(message);
// // gets us the entire element object with all its properties
// const button = document.querySelector("#btn");
// console.log(button);

// const heading = document.querySelector("h1");
// console.log(heading);
// // query selector returns the first matching element

// console.log(message.textContent);
// console.log(button.id);
// console.log(heading.tagName);
// console.log(heading.textContent);

// // getElementByID
// const buttonByID = document.getElementById("btn");
// console.log(buttonByID);
// console.log(buttonByID === button);

// // querySelectorAll - Multiple elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);


// Modifying element content

const message = document.querySelector(".message");

console.log(message.textContent);
message.textContent = "Hello from JavaScript";
console.log(message.textContent);

// innerHTML 
message.innerHTML = '<strong> Bold text from JS! </strong';

// innerText
console.log(message.innerText);

// Input element values
const input = document.querySelector(".guess");
console.log(input.value);

input.value = "Default text";

const heading = document.querySelector("h1");
heading.style.color = "pink";
heading.style.backgroundColor = "white";
heading.style.fontSize = "3rem";

const button = document.querySelector("#btn");
button.style.padding = "20px";
button.style.borderRadius = "10px";

// Event listener
button.addEventListener("click", function() {
  console.log('Button was clicked!');
  message.textContent = "You clicked the button";
  message.color = "green";
});

let clickCount = 0;
button.addEventListener("click",  function () {
  clickCount++;
  button.textContent = `Clicked ${clickCount} times`;
  button.style.backgroundColor = `hsl(${clickCount * 30}, 70%, 50% )`;
});

// input events
const display = document.querySelector(".message");
input.addEventListener("input", function() {
  const userText = input.value;
  display.textContent = `You typed ${userText}`;
  display.style.fontSize = `${userText.length + 10} px`;
});

// keyboard events - respond to specific key
input.addEventListener('keydown', function (event) {
  console.log(`Key pressed ${event.key}`);

  if (event.key === "Enter") {
    display.textContent = `You pressed Enter! Text was ${input.value}`;
    input.value = ""; // clear input
  }
});