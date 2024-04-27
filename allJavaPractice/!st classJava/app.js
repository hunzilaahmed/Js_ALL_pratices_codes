var num1 = +prompt("Enter  Your first value");
var num2 = +prompt("Enter  Your second value");

var add = num1 + num2;
var sub = num1 - num2;
var mul = num1 * num2;
var div = num1 / num2;

document.write(
  `Addition of ${num1} and ${num2} is ${add} <br>
    Subtraction of ${num1} and ${num2} is ${sub} <br>
    Multiplication of ${num1} and ${num2} is ${mul} <br>
    Division of ${num1} and ${num2} is ${div.toFixed(2)} <br>

`
);
