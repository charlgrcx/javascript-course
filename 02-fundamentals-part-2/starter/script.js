// console.log("Part 2 function is ready.");

// // Functions - Declarations and Expressions
// function logger() {
//     console.log(`My name is Charlyn!`);
// }

// logger ();
// logger ();
// logger ();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice;
// }

// console.log(fruitProcessor(11, 3));

// // const juice1 = `Juice with 5 apples and 0 oranges.`;
// // const juice2 = `Juice with 2 apples and 4 oranges.`;
// // const juice3 = `Juice with 3 apples and 2 oranges.`;

// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3,2);

// // Function expression
// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const age1 = calcAge(2004);
// console.log(age1);

// console.log(calcAge(1991));

// function introduce(firstName, lastName, age) {
//     const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age}`;
//     return introduction;
// }

// console.log(introduce(`Charlyn`, `Navidad`, 20));
// console.log(introduce(`John`));

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         return `${firstName} has already retired`;
//     }
// }
// console.log(yearsUntilRetirement(2004, `Charl`));



// /// function scope
// const globalVar = "I am global";

// function testScope() {
//     const localVar = "I am local";
//     console.log(globalVar);
//     console.log(localVar);
// }

// testScope();
// console.log(globalVar);
// //console.log(localVar);

// ////////////////////////////////////
// // Coding Challenge #1

// // Function to calculate average of 3 scores
// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// // Function to check winner
// function checkWinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   } else {
//     return `No team wins (Dolphins: ${avgDolphins}, Koalas: ${avgKoalas})`;
//   }
// }

// // Test Data 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// // Test Data 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// const friends = [`Shekaina`, `Lia`, `Claire`, `Alexa`];
// console.log(friends);

// const mixed = ["Charlyn", 40, false, friends];
// console.log(mixed);

// //other way
// const years = new Array(1991, 2020, 1984, 2008);
// console.log(years);

// // Acessing Array Elements
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);
// console.log(friends[4]);

// // access the length
// console.log(friends.length);

// // changing array elements
// friends[0] = "Jay";
// console.log(friends);

// const calcAge = function (birthYear) {
//     return 2025 - birthYear;
// }

// const ages = [calcAge(2000), calcAge(1940), calcAge(1991)];
// console.log(ages);

// const newLength = friends.push("John"); // reminder: push - adding in the last part of the list
// console.log(friends);
// console.log(newLength);

// friends.unshift("Mark"); // reminder: unshift - adding in the first part of the list
// console.log(friends);

// // removing elements
// const popped = friends.pop(); // reminder: pop - removing last item on the list
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift(); // reminder: remove first item on the list
// console.log(shifted);
// console.log(friends);

// // finding an element
// console.log(friends.indexOf('Lia'));

// // includes
// console.log(friends.includes('Claire'));
// console.log(friends.includes('John'));

// // Array Iterations
// // Tradition For Loop
// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// // one way to create for each
// friends.forEach(
//     function(friend, index) {
//         console.log(`${index + 1}: ${friend}`);
//     }
// );

// friends.forEach((friend, index) => {
//         console.log(`${index + 1}: ${friend}`);
//     });



// const grades2 = [85, 92, 78, 96, 88, 74];
// let total = 0;

// for (let i = 0; i < grades2.length; i++) {
//     total += grades2[i];
// }

// const average = total / grades2.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// let passedCount = 0;
// grades2.forEach(grades2 => {
//     if (grades2 >= 70) passedCount++;
// })
// console.log(`${passedCount} out of ${grades.length}`);


////////////////////////////////////
// Coding Challenge #2 - Student Grade Manager

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// Function to calculate average
function calculateAverage(grades) {
    let sum = 0;
    for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Function to find highest grade
function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
        highest = grades[i];
    }
  }
  return highest;
}

// Function to find lowest grade
function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
        lowest = grades[i];
    }
  }
  return lowest;
  // Hint: Similar to highest, but use < comparison
}

// Function to count passing students
function countPassing(grades, passing) {
    let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passing) {
      count++; 
    }
  }

  return count; 
}
  // Hint: Counter pattern - increment when condition is met


// Generate complete report
const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);