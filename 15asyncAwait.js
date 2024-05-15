// async function getData() {
//   return "Ankush Thakur";
// }

// const result = getData();

// result.then((data) => console.log(data));

//TODO: Before Async Await

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1");
//   }, 5000);
// });

// const getData = () => {
//   p1.then((data) => console.log(data));
//   console.log("Namaste JavaScript");
// };

// getData();
/* 
Namaste JavaScript
Promise 1 (i.e after 5 seconds)
Bcz JS waits for none
*/

// TODO: AFTER ASYNC/AWAIT

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 1");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise 2");
//   }, 5000);
// });

// const getData = async () => {
//   console.log("Start");
//   const res1 = await p1;

//   console.log("STEP -1");
//   console.log(res1);

//   const res2 = await p2;

//   console.log("STEP -2");
//   console.log(res2);
// };

// getData();
/* JS DOES NOT WAIT, BUT IT JUST seems to be waited
but actually the function was suspended and then after the time expired it come into the call stack
*/

/* TODO: HOW FETCH WORKS */
// 1. IT returns a promise, promise will hold a Response
// 2. Now we convert that response with data.json WHICH IS AGAIN AN ANOTHER PROMISE, THIS WILL RETURN AN JSON VALUE
const url = "https://api.github.com/users/ankushthakur08";
// const fetchData = async () => {
//   const data = await fetch(url);
//   const res = await data.json();
//   console.log(res);
// };
// fetchData();

fetch(url)
  .then((data) => data.json())
  .then((res) => console.log(res));

// const url2 = "https://api.github.com/users/ankushthakur08";

// const getUser = async () => {
//   const data = await fetch(url2);

//   const jsonValue = await data.json();

//   console.log(jsonValue);
// };

// getUser();
