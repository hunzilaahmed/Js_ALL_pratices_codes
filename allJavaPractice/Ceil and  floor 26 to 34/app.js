//Math and date Method

//ans 1

// var user = prompt("Enter any Number");
// userset = Math.ceil(user);
// userset1 = Math.floor(user);
// userset2 = Math.round(user);
// document.write(userset+"<br>" + userset1+"<br>" + userset2);

//ans 2

// var user = prompt("Enter any Number");
// userset = Math.ceil(user);
// userset1 = Math.floor(user);
// userset2 = Math.round(user);
// document.write(userset + "<br>" + userset1 + "<br>" + userset2);
//ans 3 & 4
// var user = prompt("Enter any Number");
// var number=parseFloat(user)
// userset = Math.ceil(number);
// userset1 = Math.floor(number);
// userset2 = Math.round(number);
// document.write("Ceil value: " + userset + "<br>");
// document.write("Floor value: " + userset1 + "<br>");
// document.write("Round value: " + userset2);

//ans 5

// var userset = prompt("Enter a number");
// if (userset < 0) {
//   document.write(-userset);
// } else {
//   document.write(userset);
// }

//ans 6

// var set = Math.floor(Math.random() * 2) + 1;

// document.write(set);

//ans 7
// var toss = prompt("heads or tails").toLowerCase();
// var set = Math.floor(Math.random() * 2) + 1;

// if (toss === "heads" && set === 1) {
//   alert("Heads won");
// } else if (toss === "tails" && set === 2) {
//   alert("Tails won");
// } else {
//   alert("Invalid input or you lose");
// }

//ans 8
// var user = Math.floor(Math.random() * 100) + 1;
// document.write("random number 1 to 100: " + user);
//ans 9

// var user = prompt("Enter a Weight");
// var set = parseFloat(user);
// alert(set + " Kilograms");

//ans 10
// var secret = 6;
// var user = prompt("Enter 1 to 100 any Secret number");
// if (user == secret) {
//   alert("congratulations");
// }
//ans 11
// var timeAll=new Date()
// document.write(timeAll)
//ans 12

// var currentDate = new Date();
// var monthNames = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// var currentMonth = currentDate.getMonth();
// var currentMonthName = monthNames[currentMonth];

// alert(currentMonthName);

//ans 12

// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var days = ["Sun", "Mon", "Tues", "Thurs", "Wednes", "Fri", "Satur"];
// var final = days[currentDayIndex];
// alert("Today is " + final);

//ans 13

// var currentDate = new Date();
// var currentDayIndex = currentDate.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var final = days[currentDayIndex];
// if (final === "Sat" || final === "Sun") {
//   alert("It's Fun day");
// } else {
//   alert("Working Day baby..!");
// }

//ans 14

// var currentDate = new Date();

// var currentDay = currentDate.getDate();

// if (currentDay < 16) {
//     alert("First fifteen days of the month");
// } else {
//     alert("Last days of the month");
// }

//ans 15
// var currentDate = new Date();

// var millisecondsSince1970 = currentDate.getTime();

// var minutesSince1970 = millisecondsSince1970 / (1000 * 60);

// var myVariable = minutesSince1970;

// alert("Minutes since midnight, Jan. 1, 1970: " + myVariable);

//ANS 16

// var currentDate = new Date();
// var getTimes = currentDate.getHours();
// if (getTimes < 12) {
//   alert("Its AM");
// } else {
//   alert("Its PM");
// }
//ans 17

// var laterDate = new Date(2020, 12, 0);
// alert(laterDate);

//ans 19

// var targetDate = new Date(2015, 5, 18);
// var today = new Date();

// var final = Math.floor((today - targetDate) / (1000 * 60 * 60 * 24));
// alert(final + " Days passed since 1st ramzan ,2015");

//ans 20
// var dateCurrent = new Date();
// var referDate = new Date(2015, 1, 1);
// var final = Math.floor((dateCurrent - referDate) / 1000 );
// alert(final);

//ans 21
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write(currentDate);

//ans 22

// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert(currentDate);

//ans 23

// var age = prompt("Please enter your age:");

// var currentYear = new Date().getFullYear();
// var final = currentYear - age;
// document.write("Your birth year is: " + final);
