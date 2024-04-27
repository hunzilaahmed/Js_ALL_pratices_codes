//Ans

// var name=prompt('enter your name')
// alert("hello Mr "name)

//Ans

// var name=prompt('enter your city name')
// alert("welcome to  " + name + " the city of light")

//Ans

// var gender=prompt('enter your gender')

// if(gender === "male"){
//     document.write("hllo mr")

// }
// else if ( gender === "female") {

//     document.write("hello mrs")
// }
// else(
//     document.write('or chakky')
// )
//Ans
// var lights = prompt("enter color name");
// if (lights === "red") {
//   document.write("must stop");
// } else if (lights === "green") {
//   document.write(" go ");
// } else {
//   document.write("vehicles should get ready to go ");
// }
//ans
// var currentAge = prompt("enter your current Age");

// var maxAge = prompt("enter your maximum Age");
// if (currentAge <= maxAge) {
//   document.write("welcome");
// } else {
//   document.write("sorry");
// }

//ans

// var fuel = prompt("enter your fuel remaining in litres");
// if (fuel <= "0.25") {
//   document.write("“Please refill the fuel in your car”");
// } else {
//   document.write("no need");
// }
//ans
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 15){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// if (true){
//     alert("True");
// //     }
//     if (false){
//     alert("False");
//     }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//ans
// var name = prompt("Enter your name");
// var bio = +prompt("Enter bio marks");
// var chem = +prompt("Enter chem marks");
// var fsx = +prompt("Enter fsx marks");
// var urdu = +prompt("Enter urdu marks");
// var pst = +prompt("Enter pst marks");
// var total = bio + chem + fsx + urdu + pst;
// var per = (total / 500) * 100;
// var remarks;
// var grade;
// if (per >= 80) {
//   grade = "A";
//   remarks = "excellent";
// } else if (per >= 70 && per < 80) {
//   grade = "B";
//   remarks = "very good";
// } else if (per >= 60 && per < 70) {
//   grade = "c";
//   remarks = "good";
// } else if (per >= 50 && per < 60) {
//   grade = "d";
//   remarks = "improve";
// } else if (per >= 40 && per < 50) {
//   grade = "e";
//   remarks = "need more effort";

// } else {
//   grade = "fail";
//   remarks = "Fail";
// }

// document.write(
//   `<table border='1px'>
//     <tr>
//     <th>NAME</th>
//     <th>BIO</th>
//     <th>CHEM</th>
//     <th>FSX</th>
//     <th>URDU</th>
//     <th>PST</th>
//     <th>TOTAL</th>
//     <th>PERCENTAGE</th>
//     <th>GRADE</th>
//     <th>Remarks</th>
//     </tr>

//     <tr>
//     <td>${name}</td>
//     <td>${bio}</td>
//     <td>${chem}</td>
//     <td>${fsx}</td>
//     <td>${urdu}</td>
//     <td>${pst}</td>
//     <td>${total}</td>
//     <td>${per.toFixed(2)} %</td>
//     <td>${grade}</td>
//     <td>${remarks}</td>

//     </tr>
// `
// );
// var item1 = prompt("Enter the name of item 1:");
// var price1 = 1500;
// var quantity1 = prompt("Enter the ordered quantity of item 1:");

// var item2 = prompt("Enter the name of item 2:");
// var price2 = 200;
// var quantity2 = prompt("Enter the ordered quantity of item 2:");

// var shippingCharges = 150;

// var total = price1 * quantity1 + price2 * quantity2;
// var finalTotal = total + shippingCharges;
// var lastTotal = finalTotal;
// var discount;
// if (finalTotal > 2000) {
//   discount = 0.1 * finalTotal;
//   lastTotal = finalTotal - discount;
// }
// document.write(
//   `
//   Item 1: ${item1}<br>  Price: PKR ${price1} <br>
//   Quantity: ${quantity1} <br>
//   Item 2: ${item2} <br>  Price: PKR ${price2} <br>
//   Quantity: ${quantity2} <br>
//   Subtotal: PKR ${total} <br>
//   Shipping Charges: PKR ${shippingCharges} <br>
//   Total: PKR ${finalTotal} <br>
//   Discount: PKR ${discount} <br>
//   Final Total: PKR ${lastTotal}
// `
// );
//ans
// var secret = 5;
// var user = +prompt("enter the correct secret number");
// if (user === secret) {
//   document.write("bingo!");
// } else if (user + 1 === secret || user - 1 === secret) {
//   document.write("Close enough to the correct answer.");
// } else {
//   document.write("sorry");
// }
//ans
// var number=+prompt("Enter your number")
// if(number % 3){
//     document.write("the number is divisible by 3.")
// }
// else{
//     document.write("sorryyy")
// }
//ans
// var firstTeam=+prompt("enter the first Team number")
// var secondTeam=+prompt("enter the second Team number")
// if(firstTeam> secondTeam){
//     document.write("you won tigers")
// }
// else if(secondTeam> firstTeam){
//     document.write("you won pak")
// }
// else{
//     document.write("Tie")
// }
//ans
// var strVariable = "string";
// var numVariable = 42;
// var boolVariable = true;

// if ( strVariable === "string") {
//   console.log("Variable 'strVariable' is a string.");
// } else {
//   console.log("Variable 'strVariable' is not a string.");
// }

// if ( numVariable == "number") {
//   console.log("Variable 'numVariable' is a number.");
// } else {
//   console.log("Variable 'numVariable' is not a number.");
// }

// if ( boolVariable === "boolean") {
//   console.log("Variable 'boolVariable' is a boolean.");
// } else {
//   console.log("Variable 'boolVariable' is not a boolean.");
// }
//Ans
// var userInput = prompt("Enter a number:");

// if (userInput % 2 === 0) {
//   console.log(userInput + " is an even number.");
// } else {
//   console.log(userInput + " is an odd number.");
// }
//ans
// var temperature = +prompt("Enter a Temperature");
// if (temperature >= 40) {
//   document.write("“It is too hot outside.”");
// } else if (temperature >= 30 && temperature < 40) {
//   document.write("“The Weather today is Normal.”");
// } else if (temperature >= 20 && temperature < 30) {
//   document.write("“Today’s Weather is cool.”");
// } else if (temperature >= 10 && temperature < 20) {
//   document.write("“OMG! Today’s weather is so Cool.” ");
// }
//ans
// var firstNumber = +prompt("ENTER FIRST VALUE");
// var secondNumber = +prompt("ENTER SECOND VALUE");
// var operation = prompt("Enter the operation (+, -, *, /)");
// var result;
// if (operation === "+") {
//   result = firstNumber + secondNumber;
//   alert(`${firstNumber} + ${secondNumber} is ${result}`);
// } else if (operation === "-") {
//   result = firstNumber - secondNumber;
//   alert(`${firstNumber} - ${secondNumber} is ${result}`);
// } else if (operation === "*") {
//   result = firstNumber * secondNumber;
//   alert(`${firstNumber} * ${secondNumber} is ${result}`);
// } else if (operation === "/") {
//   result = firstNumber / secondNumber;
//   alert(`${firstNumber} / ${secondNumber} is ${result}`);
// }
//ans
// var user = prompt("Enter Days");
// if (
//   user === "monday" ||
//   user === "tuesday" ||
//   user === "wednesday" ||
//   user === "thursday" ||
//   user === "friday"
// ) {
//   document.write("It's a week day go & do some work.");
// } else if (user === "saturday") {
//   document.write("It's weekend.");
// } else if (user === "sunday") {
//   document.write("Yay! It's a holiday.");
// }

//ans
// var user = +prompt("Enter a number");
// if (user >= 50) {
//   document.write("youre a passed");
// } else {
//   document.write("youre failed");
// }
//ans

// var user1 = +prompt("Enter first value");
// var user2 = +prompt("Enter second value");

// if (user1 > user2) {
//   document.write(`the greater number of ${user1} and ${user2} is ${user1} `);
// } else if (user2 > user1) {
//   document.write(`the greater number of ${user1} and ${user2} is ${user2} `);
// }
//ans
// var user = prompt("enter language");

//  if (user === "es"){
//     alert("Hola, Mundo!")
// }
// else if(user=== "de"){
//     alert("Hallo, Welt!")
// }
// else if (user === "fr"){
//     alert("Bonjour, le monde!!")

// }
// else{
//     alert("hello world")
// }
//ans
// var input = prompt("enter whether");
// if (input > 0) {
//   alert("whether is positive");
// } else if (input < 0) {
//   alert("whether is negative");
// }

//ans

// var input1 = prompt("Enter a number");
// var input2 = prompt("Enter a text");
// alert(input1 + " " + input2);

// 12 or 13

//ans

// var input=prompt("enter the value")
// if(input % 3 === 0){
//     alert("value is divisible by 3")
// }
// else{
//     alert("value is not divible by 3")
// }
//ans
// var input=prompt("enter the value")
// if(input % 2 == 0){
//     alert("is an even number.`")
// }
// else{
//     alert("is an odd number.")

// }

//ans
// var input=+prompt("enter the age")
// if(input>= 18){
//     alert(" old enough")
// }
// else{alert("oh young")}
//ans
// var input = prompt("enter the name");
// if (input === "hunzila") {
//   document.write(
//     input + " Hello, It's nice to meet someone with the same name as mine."
//   );
// }

//ans
// var input = prompt("enter the number");
// if (input % 3 === 0) {
//   document.write("number is divisible by 3.");
// } else {
//   document.write("number is not divisible by 3.");
// }

//ans

// var input = +prompt("Enter time 24hours clock format");
// if (input >= 0 && input < 1200) {
//   document.write("Good Morning");
// } else if (input >= 1200 && input < 1700) {
//   document.write("Good afternoon");
// } else if (input >= 1700 && input < 2100) {
//   document.write("Good evening");
// } else if ((input >= 2100 && input < 2359) || (input >= 0 && input < 2400)) {
//   document.write("Good night");
// }
//ans
// var pass = " hunzila";
// var input = prompt("Enter a password");
// if (input === "") {
//   alert("enter a pasword");
// } else if (pass === input) {
//   document.write("login successful");
// } else {
//   document.write("failed ");
// }
//ans
// var name = "fahad";
// var inp = prompt("enter a name");
// if (name === inp) {
//   document.write("youre welcome shantoo");
// } else {
//   document.write("youre not a shantoo");
// }
//ans
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

//ans
// var num1 = +prompt("enter 1st number");
// var num2 = +prompt("enter 2nd number");
// if (num1 > num2) {
//   document.write(`The greater number of ${num1} and ${num2} is ${num1}.`);
// } else if (num2 > num1) {
//   document.write(`The greater number of ${num1} and ${num2} is ${num2}.`);
// } else {
//   document.write(`${num1} and ${num2} are equal.`);
// }

//ans

// var user1 = prompt("enter value");
// if (user1 > 0) {
//   document.write("positive");
// } else if (user1 < 0) {
//   document.write("negative");
// } else {
//   document.write("zero");

// }
//ans
// var input = prompt("Enter vowel");
// if (
//   input === "a" ||
//   input === "e" ||
//   input === "i" ||
//   input === "o" ||
//   input === "u"
// ) {
//   document.write("yes vowel character");
// } else {
//   document.write("false");
// }
//anns
// document.write(10 !== 8)

//ans
// var input = +prompt("enter the number")
// var voteable = (input < 18) ? "Too young" : "Old enough";

// document.write(voteable);

