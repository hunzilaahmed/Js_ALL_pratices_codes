// const arr = ['apple','orange','banana']
// arr = ['mango','peach','cherry']
// arr[0] = "cherry"
// arr[1] = "Mango"
// arr[2] = "Peach"
// console.log(arr)

// const obj = {
//     fname: "expertizo",
//     lname: "web and app"
// }
// const obj2 = {
//     ...obj,
//     ins: "hello world"
// }

// console.log(obj2)
// console.log(obj)

// function sum(a, b){
//     return a + b
// }

// let getValue = sum(10, 20)
// console.log(getValue)

// let sum = () => {
//     console.log("hello world")
// }

// sum()

// let sum = (a, b) => {
//     return a + b
// }

// console.log(sum(20,20))

// let print = (a, b) => a + b
// console.log(print(10,10))

// let print = (a, b) => a + b

// console.log(print())

// error
// undefined
// NaN
// kuch bhi nahi ayega

// let pro = new Promise((res, rej)=>{
//     let module = "Beginners"
//     if(module == "Advance"){
//         res("you are already enrolled")
//     }
//     else{
//         rej("enroll in Advance")
//     }
// })

// pro.then(data => console.log(data))
// .catch(err => console.log(err))

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(data => data.json())

// .then(data => document.write(data))
// .catch(err => console.log(err))

// let getDiv = document.querySelector("#showNews");

// let getSearch = () => {
//   let abc = document.querySelector("#search");

//   fetch(
//     " https:newsapi.org/v2/everything?q=tesla&from=2024-03-21&sortBy=publishedAt&apiKey=d7f51286c02748f9984cf0ddfc6296ea"
//   )
//     .then((data) => data.json())
//     .then((data) => {
//       for (let i = 0; i < data.articles.length; i++) {
//         getDiv.innerHTML += `
//        <div class="card p-3 m-3" style="width: 18rem;">
//   <img src=${data.articles[i].urlToImage} class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${data.articles[i].title}</h5>
//     <p class="card-text">${data.articles[i].content}</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;
//       }
//     })
//     .catch((err) => console.log(err));
// };
// let getDiv = document.querySelector("#show");

// let getSearch = () => {
//   // let searchInp = document.querySelector("#search");
//   fetch(
//     "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=74a0a13bb379ae741a13b65fe9bc3899    "
//   )
//     .then((data) => data.json())
//     .then((data) => {
//       console.log(data);
//       getDiv.innerHTML = data.data.main.temp;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// let getDiv = document.querySelector("#show");

// let getSearch = () => {
//   let searchInp = document.querySelector("#search").value;
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${searchInp}&appid=74a0a13bb379ae741a13b65fe9bc3899`
//   );
//   console
//     .log(searchInp)
//     .then((data)=>data.json())
//     .then((resp) => {
//       console.log(resp);
//       getDiv.innerHTML = data.main.temp;
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// let getDiv = document.querySelector("#show");

// let getSearch = () => {
//   let searchInp = document.querySelector("#search").value;
//   fetch(
//     `https://api.openweathermap.org/data/2.5/weather?q=${searchInp}&appid=74a0a13bb379ae741a13b65fe9bc3899`
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       console.log(response);
//       let tempCelsius = response.main.temp - 273.15;
//       getDiv.innerHTML = `${tempCelsius.toFixed(0)} °C`;
//     })
//     .catch((err) => {
//       console.error("Error:", err);
//       getDiv.innerHTML = "Error fetching data";
//     });
// };
