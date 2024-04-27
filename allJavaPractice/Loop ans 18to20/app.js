//loop
//ans 1

// for (var i = 0; i < 5; i++) {
// document.write("hello world "+ "<br>")}

//ans 2
// for (var i=1; i<=10 ;i++){
//     document.write(i+"<br>")
// }

//ans 3
// var userTableNum = prompt("enter the number");
// var userNum = prompt("enter length  number");

// for (var i = 1; i <= userNum; i++) {
//   document.write(userTableNum + "x" + i + "=" + userTableNum * i + "<br>");
// }
//ans 4

// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < arr.length; i++) {
//   document.write(arr[i] + "<br>");
// }
//ans 5
// var arr = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for (var i = 0; i < arr.length; i++) {
//   document.write("Element at index" + i + "is" + arr[i] + "<br>");
// }
//ans 6
// var user=prompt("Enter number of items")
// var arr=[]
// for(var i=0;i<user;i++){
//     var item=prompt("Enter item"+(i+1)+":")
//     arr.push(item)
// }
// document.write(arr)
//ans 7
// for (var i=1; i<=10 ;i++){
//     document.write(i)
// }
// for (var i=10; i>=1 ;i--){
//     document.write(i)
// }
// for (var i = 0; i <= 10; i += 2) {
//   document.write(i);
// }
// for (var i = 1; i <= 20; i += 2) {
//   document.write(i);
// }
// for (var i = 2; i <=20; i+=2) {
//   document.write(i+"k");
// }
//ans 8
// var bakkery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item to search:");
// found = false;
// for (i = 0; i < bakkery.length; i++) {
//   var curent = bakkery[i];
//   if (userInput === bakkery) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//   alert("No, '" + userInput + "' is not found in the list.");
// }

//ans 9

// var numbers = [24, 53, 78, 91, 12];
// var maxNumber = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//   if (maxNumber > numbers) {
//     maxNumber = numbers[i];
//   }
// }

// console.log("The largest number in the array is:", maxNumber);

//ans 10
// var numbers = [24, 53, 78, 91, 12];
// var minNumber = numbers[0];
// for (var i = 0; i < numbers.length; i++) {
//   if (minNumber < numbers) {
//     minNumber = numbers[i];
//   }
// }

// console.log("The largest number in the array is:", minNumber);

//ans11
// var number = [24, 53, 78, 91, 12];
// var maxNumber = number[0];
// var minNumber = number[0];
// for (var i = 0; i < number.length; i++) {
//   if (number[i] > maxNumber) {
//     maxNumber = number[i];
//   }
//   if (number[i] < minNumber) {
//     minNumber = number[i];
//   }
// }
// console.log("The largest number in the array is:", maxNumber);
// console.log("The smallest number in the array is:", minNumber);
//ans 12

// for (var i = 5; i <= 100; i += 5) {
//   document.write(i+",");
// }
//ans 13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];
// var table = "<table border=1px><tr><th>students</th><th>scores</th></tr>";

// for (var i = 0; i < students.length; i++) {
//   table += "<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>";
// }
// document.write(table);

//ans 14

// var scores = [12, 45, 3, 22, 34, 50];
// var userInput = prompt("enter value");
// for (var i = 0; i < scores.length; i++) {
//   document.write(scores[i] + ", ");
//   if (scores[i] == userInput) {
//     break;
//   }
// }
//ans 16

// var user=prompt("enter value")
// while(user>0){
//     document.write(user+",")
//     user-=0.5
// }
//ans 17

// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }
// ans 18

// var product = 1;

// for (var i = 1; i <= 7; i +=2) {
//     product *= i;

// }
// document.write(product)

//ans
// var initialStars = prompt("Enter the initial number of stars: ");
// for (var i = 0; i < 6; i++) {
//   for (var z = 0; z < i; z++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }
