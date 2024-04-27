// Stings method
//Ans 1
// var firstName = prompt("Enter your First Name");
// var lastName = prompt("Enter your Last Name");
// var setFirst =
//   firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase();
// var setLast =
//   lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase();
// var fullName = setFirst + " " + setLast;

// console.log("Hello " + fullName + " Welcome");

//Ans 2
// var favoriteMobile = prompt("Enter your favorite mobile phone Model:");

// var inputLength = favoriteMobile.length;

// document.write(
//   "The length of your favorite mobile phone model is: " + inputLength
// );
//Ans 3

// var word = "Pakistan";

// var indexOf = word.indexOf("n");

// document.write(
//   "The index of letter 'n' in the word 'Pakistan' is: " + indexOf
// );
//Ans 4
// var word="Hello World !"

// var indexlast=word.lastIndexOf("l")

// document.write("The last index of letter 'l' in the word 'Hello World !' is: " + indexlast);

//ans 5
// var word = "Pakistan";

//  var indexOf = word.indexOf("n");

// document.write(
//   "The index of letter 'n' in the word 'Pakistan' is: " + indexOf
// );
//ans 7
// var word = "Hyderabad";
// var rep = word.replace("Hyder", "Islam");
// document.write(rep);

//ans 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var shifti= message.replace(/and/g, "&")

// document.write("Message :" +message+"<br>"+"After replacement :"+shifti)

//ans 9

// var str = "472"
// var con=Number(str)

// document.write(con)
//ANS 11

// var user = prompt("enter  Words");
// var chnge = user.toUpperCase();
// document.write(chnge);

//ans 12

// var user = prompt("enter Capital Words");
// var chnge = user.toLowerCase();
// document.write(chnge);

//ANS 13

// var user = prompt("enter  Words");
// var chnge = user.slice(0, 1).toUpperCase();
// var chnge2 = user.slice(1).toLowerCase();
// var con = chnge + chnge2;
// document.write(con);

//ans 14

// var num = 35.36;
// var numAsString = num.toString();
// var numWithoutDot = numAsString.replace('.', '');

// document.write("Original Number: " + num + "<br>");
// document.write("Number without dot: " + numWithoutDot);

//ans 15

// var a = "3";
// var b = "3";
// con = a + b;
// document.write(con);
// ans 16
// var a = 3;
// var b = 3;
// con = a - b;
// document.write(con);

//ans 17

// var a = ["Cake", "Pineapple", "Banana", "cookie"];
// var user = prompt("Enter any Food Name");
// var found = false;

// for (i = 0; i < a.length; i++) {
//   if (a[i].toLowerCase() === user.toLowerCase()) {
//     found = true;
//     break;
//   }
// }
// if (found) {
//   alert("Yes, the item '" + user + "' is found in the list.");
// } else {
//   alert("No, the item '" + user + "' is not found in the list.");
// }
//ans 18

// var user = prompt("enter value 1");
// var user2 = prompt("enter value 2");
// if (user == user2) {
//   document.write(user +" & "+ user2 + " Both are equal");
// } else if (user > user2) {
//     document.write(user  + " greater than " + user2);

// }
// else if(user2>user){
//     document.write(user2  + " greater than " + user);

// }

//ans 20
// alert(
//   "Please enter a password that meets the requirements:\n" +
//     "- It should contain alphabets and numbers\n" +
//     "- It should not start with a number\n" +
//     "- It must be at least 6 characters long"
// );
// var user = prompt("Enter a Password");

// if(user<6|| /^\d/.test(user) || !/[a-zA-Z]/.test(user) || !/\d/.test(user)){
//     document.write("welcome")
// }else(
//     document.write("SORRYYY..................!")
// )
//ans 21
// var university = "University of karachi";
// var universityArray = university.split('').join('\n');
// console.log(universityArray);
//ans 22
// var user = prompt("Enter words");
// var set = user.charAt(user.length - 1);
// document.write("Last Charac of " + set);
//ans 23
// var sentence = "The quick brown fox jumps over The lazy dog";
// var wordToSearch = "The";
// var count = 0;
// var findss= sentence.split(" ");
// for (i = 0; i < sentence.length; i++) {
//   if (findss[i] === wordToSearch) {
//     count++;
//   }
// }
// console.log("The word '" + wordToSearch + "' occurs " + count + " times in the given string.");
