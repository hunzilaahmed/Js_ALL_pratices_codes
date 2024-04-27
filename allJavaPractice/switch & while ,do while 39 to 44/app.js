// switch statements

//ans 1
// let age = 14;

// switch (true) {
//   case age >= 18:
//     console.log("you are young");
//     break;
//   default:
//     console.log("heyy kid");
// }

//ans 2
// let number = 15;
// switch (number % 3) {
//   case 0:
//     console.log("allow");
//     break;
//   default:
//     console.log("not allow");
// }

//ans 3

// function calcSwitch(num1, num2, operator) {
//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "x":
//       return num1 * num2;
//     case "/":
//       if (num2 !== 0) {
//         return num1 / num2;
//       } else {
//         return " cannot divide";
//       }
//     default:
//       return "Invalid operator";
//   }
// }
// let num1 = prompt("num1");
// let num2 = prompt("num2");
// let operator = prompt("operator");
// console.log(calcSwitch(num1, num2, operator));

//ans 4

// let getNew = new Date().getDay();
// switch (getNew) {
//   case 0:
//     console.log("this is sunday");
//     break;
//   case 1:
//     console.log("this is Monday");
//     break;
//   case 2:
//     console.log("this is Tuesday");
//     break;
//   case 3:
//     console.log("this is Wednesday");
//     break;
//   case 4:
//     console.log("this is Thurs");
//     break;
//   case 5:
//     console.log("this is Fri");
//     break;
//   case 6:
//     console.log("this is sat");
//     break;
//   default:
//     console.log("this is nothing");
// }

//ans 5
// let getNew = new Date().getDay();
// switch (getNew) {
//   case 0:
//     break;
//   case 1:
//     console.log("this is Monday");
//     break;
//   case 2:
//     console.log("this is Tuesday");
//     break;
//   case 3:
//     console.log("this is Wednesday");
//     break;
//   case 4:
//     console.log("this is Thurs");
//     break;
//   case 5:
//     console.log("this is Fri");
//     break;
//   case 6:
//     break;
//   default:
//     console.log("week day");
// }
// if (getNew == 0 || getNew == 6) {
//   console.log("this weekend");
// } else {
//   console.log("It's a weekday.");
// }

//ans 6

// function findcar() {
//   let text;
//   let favCar = prompt("enter car name");
//   switch (favCar) {
//     case "bmw":
//       text = "German car";
//       break;
//     case "ford":
//       text = "American car";
//       break;
//     case "peugeot":
//       text = "French car";
//       break;

//     default:
//       text = "Unknown car name";
//   }
//   document.write(text);
// }
// findcar()

//ans 7

// function checkFruit() {
//   var text;
//   var fruits = prompt("Enter a fruit name");
//   switch (fruits) {
//     case "Banana":
//       text = "Banana is good!";
//       break;
//     case "Orange":
//       text = "I am not a fan of orange.";
//       break;
//     case "Apple":
//       text = "How you like them apples?";
//       break;

//     default:
//       text = "I have never heard of that fruit.";
//   }
//   document.write(text);
// }
// checkFruit();

//ans 8

// function findGrade(grade) {
//   switch (grade) {
//     case "A":
//       console.log("Marks [>= 90]");
//       break;
//     case "B":
//       console.log("Marks [>= 80 and < 90]");
//       break;
//     case "C":
//       console.log("Marks [>= 70 and < 80]");
//       break;
//     case "D":
//       console.log("Marks [>= 60 and < 70]");
//       break;
//     case "E":
//       console.log("Marks [>= 50 and < 60]");
//       break;
//     default:
//       console.log("Invalid grade");
//   }
// }
// findGrade(prompt("Enter grade"));

//ans 9

// function months(userInp) {
//   switch (userInp) {
//     case "1":
//       console.log("Jan");
//       break;
//       case "2":
//       console.log("Feb");
//       break;
//       case "3":
//       console.log("Apr");
//       break;
//       case "4":
//       console.log("Mar");
//       break;
//       case "5":
//       console.log("May");
//       break;
//       case "6":
//       console.log("june");
//       break;
//       case "7":
//       console.log("July");
//       break;
//       case "8":
//       console.log("Aug");
//       break;
//       case "9":
//       console.log("Sep");
//       break;
//       default:
//       console.log("error Find");

//   }

// }
// months(prompt("Enter mnth"))

//ans 10

// let age = 12;
// let valid = age > 18 ? "to young" : "old";
// console.log(valid);

//ans 11

// let count = 0;
// while (count < 5) {
//   count++;
//   console.log("Hello World ");
// }

// do {
//   console.log("Hello World ");
//   count++;
// } while (count < 5);

//ans 12
// let count = 0;
// while (count < 10) {
//   count++;
//   document.write(count + "<br>");
// }
// do {
//   count++;
//   document.write(count + "<br>");
// } while (count < 10);

//ans 13

// let tableNumber = parseInt(prompt("Enter a table number"));
// let tableLength = parseInt(prompt("Enter a table length"));
// let table = "";
// let i = 1;
// while (i <= tableLength) {
//   table += tableNumber + "x" + i + "=" + tableNumber * i + "<br>";
//   i++;
// }
// document.write(table);
// do {
//   table += tableNumber + "x" + i + "=" + tableNumber * i + "<br>";
//   i++;
// } while (i <= tableLength);
// document.write(table);

//ans 14
// let a = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// let i = 0;
// while (i < a.length) {
//   console.log(a[i]);

//   i++;
// }

// do {
//   console.log(a[i]);
//   i++;
// } while (i < a.length);

//ans 15
// let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// let i = 0;
// while (i < fruits.length) {
//   console.log("Element at index " + i + " is " + fruits[i]);
//   i++;
// }
// do {
//   console.log("Element at index " + i + " is " + fruits[i]);
//   i++;
// } while (i < fruits.length);

//ans 16

// let N = parseInt(prompt("Enter item length"));
// let items = [];
// let i = 0;
// while (i < N) {
//   let item = prompt("ENTER ITEM" + (i + 1) + ":");
//   items.push(item);
//   i++;
// }
// console.log(items);

// do {
//   let item = prompt("Enter Item" + (i + 1) + ":");
//   items.push(item);
//   i++;
//   console.log(items);
// } while (i < N);

//ans 17

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log(i);
// }

// let i = 10;
// while (i > 1) {
//   i--;
//   console.log(i);
// }

// let i = 0;
// while (i < 10) {
//   i+=2;
//   console.log(i);
// }

// let i = 1;
// while (i < 9) {
//   i += 2;
//   console.log(i);
// }

//ans 18
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInp = prompt("Enter a A name");
// let i = 0;
// let found = false;
// while (i < A.length) {
//   if (userInp == A[i]) {
//     found = true;
//     break;
//   }
//   i++;
// }
// if (found) {
//   alert("Yes, '" + userInp + "' is found in the list.");
// } else {
//   alert("no, '" + userInp + "' is found in the list.");
// }

//ans 19
//not ans 
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = parseInt(prompt("Enter the stop value:"));
// var result = [];
// if (isNaN(stopValue)) {
//   alert("Please enter a valid number.");
// } else {
//   let i = 0;

//   while (i < scores.length && scores[i] <= stopValue) {
//     result.push(scores[i]);

//     i++;
//   }
//   if (i == scores.length-1 && stopValue > scores[i ]) {
//     alert("Stop value is greater than the maximum value in the array.");
//   }
// }
// console.log(result);
