// var userInp = +prompt("Enter table number")

// for(var i=1; i<=10; i++){
//     document.write(userInp  + " x " + i + " = " + userInp * i +"<br>")
// }

// while F
// var num = prompt("Enter number");
//  var num2 = prompt("Enter number");
// var i = 1;
// while (i <= 10) {
//   document.write(num + "x" + i + "=" + num * i + "<br>");
//   i++;
// }
// for (var i = 1; i <= 100; i = i + 10) {
//   for (var j = i; j < i + 10; j++) {
//     document.write(j + " ");
//   }
//   document.write(" <br>");
// }
// for (var i = 1; i <= 5; i++) {
//   for (var x = 1; x <= i; x++) {
//     document.write(x);
//   }
//   document.write("<br>");
// }

// var arr = ["Lahore", "Islamabad", "Pindi", "Karachi"];
// var userInp = prompt("Enter any City Name");
// var change = userInp.slice(0, 1).toUpperCase();
// var change2 = userInp.slice(1).toLowerCase();
// var final = change + change2;
// var cond = "";
// for (i = 0; i < arr.length; i++) {
//   if (final == arr[i]) {
//     cond = true;
//     alert(final + " City is found");
//   }
// }
// if (cond == false) {
//   alert(final + " City not found");
// }
// var arr = ["Bmw", "Audi", "Toyota", "Tesla"];
// var userInp = prompt("Enter any Car Name");
// var change = userInp.slice(0, 1).toUpperCase();
// var change2 = userInp.slice(1).toLowerCase();
// var final = change + change2;
// var cond = "";
// for (var i = 0; i < arr.length; i++) {
//   if (final == arr[i]) {
//     cond = true;
//     alert(final + " Car is found");
//   }
// }
// if (cond == false) {
//   alert(final + " Car is nnot found");
// }

// var palyer1=prompt("Enter the value")
// var palyer2=prompt("Enter the value")
// var gen= Math.random()*2
// var con=Math.floor(gen)
// if (con==0){
//     alert("c")

// }

// function abc(a = 2, b = 30, c = 20) {
//   alert(a - b + c );
// }
// abc(30, 20, 20);

// function set(a, b, c) {
//   if (b == "+") {
//     console.log(a + c);
//   } else if (b == "*") {
//     console.log(a * c);
//   } else if (b == "-") {
//     console.log(a - c);
//   } else if (b == "/") {
//     console.log(a / c);
//   }
// }
// set(prompt("enter first value"), prompt("enter operater "), prompt("enter the second "));

// var printDate = new Date().toString().slice(16, 25);
// console.log(printDate);

// for (var i = 0; i < 10; i++) {
//   console.log(i++)
//   }

// var purani=new Date().getDate()
// console.log(purani)

// function abc(birthyear) {
//   var birth = new Date(pro).getTime()
//   var todatyyyy = new Date(today).getTime()

// }
// abc()

// function set(start){
//   var  start=new Date().getTime()
//    var today=new Date().getTime()
//    var minus=start-today
// var for=minus/

// }
// start(prompt("enter date of birth"))

// function showPara(){
//     var text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, eius rationeSuscipitiure, placeat, dolores reiciendis maxime error debitis ipsam cupiditate illum perspiciatisalias, facere repellendus rerum! Illo, voluptate modi! '
//     document.getElementById("para").innerHTML = text
//     document.getElementById("read").innerHTML=""
// }
// function clickMe(e) {
//   let inpData = document.getElementById("inp");

//   inpData.value += e;
// }
// function clearBtn() {
//   getInp = document.getElementById("inp");
//   console.log(getInp);
//   getInp.value = "";
// }
// function eq() {
//   var abc = document.getElementById("inp");
//   abc.value = eval(abc.value);`
// }

// var minutes = 0;
// var second = 0;
// var milisecond = 0;
// var getmin = document.getElementById("min");
// var getsec = document.getElementById("sec");
// var getmsec = document.getElementById("msec");

// setInterval(function () {
//   milisecond++;
//   getmsec.innerHTML = milisecond;
//   if (milisecond >= 100) {
//     second++;
//     getsec.innerHTML = second;
//   }
//   else if(second>=60){
//     minutes++
//     getmin.innerHTML=minutes

//   }
// }, 10);

// var arr = ["abc", "123"];

// var obj = {
//   fname: "Saad",
//   lname: "Ali",
//   age: 24,
//   roll_no: "CSC-204",
//   bool: true,
//   arr: ["expertizo", "faraz", "smit"],

//   foo: function () {
//     return this.fname + this.age;
//   },

//   pri: function () {
//     return obj.fname + obj.lname;
//   },

//   sum: function () {
//     alert("hello world");
//   },
// };

// var dob = new Date("09,25,2001");
// var getmilli = dob.getTime();
// var full = new Date();
// var fullMilli = full.getTime();
// var diff = fullMilli - getmilli;
// var final = diff / (1000 * 60 * 60 * 24 * 30 * 12);
// var accurate = Math.floor(final);
// console.log(accurate);

// function tellTime() {
//   var now = new Date();
//   var theHr = now.getHours();
//   var theMin = now.getMinutes();
//   alert("Current time: " + theHr + ":" + theMin);
// }
// tellTime();

let xyz=document.createElement('p')
let text=document.createTextNode("hello world")
// console.log(xyz)
xyz.appendChild(text)

let abc=document.getElementById("abc")
abc.appendChild(xyz)