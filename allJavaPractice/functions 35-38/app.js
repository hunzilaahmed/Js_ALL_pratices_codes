// ans 1
// function calls(a) {
//   alert("hello  " + a);
// }
// calls("hunzila");

//ans 2
// function dateTime() {
//   var current = new Date();
//   return current;
// }
// var store = dateTime();
// alert(store);

//ans 3

// function nme(a, b) {
//   alert(a + b);
// }
// nme("hunzila", "ahmed");

//ans 4

// function summ(a, b) {
//   alert(a + b);
// }
// summ(+prompt("Enter first value"), +prompt("Enter 2nd value"));

//ans 5
// var num1 = parseFloat(prompt("Enter 1st Value"));
// var operator = prompt("Enter operator");
// var num2 = parseFloat(prompt("Enter 2nd Value"));

// function mathCalc(num1, operator, num2) {
//   var result;
//   if (operator === "+") {
//     result = num1 + num2;
//   } else if (operator === "-") {
//     result = num1 - num2;
//   } else if (operator === "*") {
//     result = num1 * num2;
//   } else if (operator === "/") {
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Cannot divide by zero!";
//     }
//   } else {
//     result = "Invalid operator";
//   }
//   document.write("Result: " + result);
// }
// mathCalc(num1, operator, num2);

// ans 6

// function square(x) {
//   return x ** 2;
// }
// console.log(square(4));

//ans 7
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }

// console.log(factorial(5));

//ans 8

// var userInp1 = prompt("Enter Start Value");
// var userInp2 = prompt("Enter End Value");

// function displayCount(userInp1, userInp2) {
//   for (var i = userInp1; i <= userInp2; i++) {
//     console.log(i);
//   }
// }
// displayCount(userInp1, userInp2);

//ans 10

// function argumentLength() {
//   var result = "";
//   for (i = 0; i < arguments.length; i++) {
//     result += arguments[i] + " ";
//   }
//   document.write(result);
// }
// argumentLength("avr", "12344", "3fss");

//ans 11

// function largest() {
//   if (arguments.length === 0) {
//     return null;
//   }
//   var largest = arguments[0];
//   for (i = 1; i < arguments.length; i++) {
//     if (arguments[i] > largest) {
//       largest = arguments[i];
//     }
//   }

//   return largest;
// }
// console.log(largest(12, 211, 233, 111));

/// ans 12

// function multiply(width, height) {

//   return width * height;
// }

// console.log(multiply(12, 33));

// function multiplyVar() {

//   var h = 22;
//   var w = 33;

//   return h * w;
// }

// console.log(multiplyVar(12, 33));

//ans 13

// function sortArray() {
//   const unsortedArray = [3, 1, 5, 2, 4];
//   const sortedArray = unsortedArray.sort();
//   return sortedArray;
// }
// const result = sortArray();
// console.log(result);

//ans 14

// function sumArray(numbers) {
//   if (!Array.isArray(numbers)) {
//     return undefined;
//   }
//   let sum = 0;
//   for (let number of numbers) {
//     if (typeof number === "number") {
//       sum += number;
//     }
//   }
//   return sum;
// }
// const number = [3, 4, 111, 444];
// const result = sumArray(number);
// console.log(result);

//ans 15
// var param = function inner() {
//     return typeof inner;
// }
// alert(param());

//ans 16

// function sett(base, exponent) {
//   return Math.pow(base, exponent);
// }
// const final = sett(2, 3);
// console.log(final);

//ans 17

// function randomDice() {
//   return (number = Math.floor(Math.random() * 2) + 1);
// }
// console.log(randomDice());

//ans 18

// function reverseNum(num) {
//   let numStr = num.toString();
//   let reverseNums = numStr.split("").reverse().join("");
//   return reverseNums;
// }
// let number = reverseNum(23231);
// console.log(number);

//ans 19

// function isPaldrome(x) {
//   let str = x.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
//   return str === str.split("").reverse().join("");
// }
// let change = isPaldrome("madam");
// console.log(change);

//ans 20

// function firstLetter() {
//   let str = "hello world the diamond";
//   let words = str.split(" ");

//   for (var i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }

//   str = words.join(" ");
//   return str;
// }
// console.log(firstLetter());

//ans 21

// function findLongestWord() {
//   let longestWord = "";
//   let maxLength = 0;

//   let para = "longest word in this paragraph";
//   let words = para.split(" ");

//   for (var i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       longestWord = words[i];
//       maxLength = words[i].length;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord());

//ans 22

// function vowelFind() {
//   const vowels = ["a", "e", "i", "o", "u"];

//   const inputString = "The quick brown fox";
//   let str = inputString.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < str.length; i++) {

//     if (vowels.includes(str[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(vowelFind());

//ans 23

// function getType(value) {
//   return typeof value;
// }

// console.log(getType(42));
// console.log(getType("Hello"));
// console.log(getType(true));
// console.log(getType({}));
// console.log(getType(undefined));
// console.log(getType(function () {}));




