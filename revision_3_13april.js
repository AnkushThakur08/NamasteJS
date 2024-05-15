/* TODO: Hoisting */

// printNumber();
// console.log(a);
// printNumberAgain();

// var a = 10;

// function printNumber() {
//   var number = 50;
//   console.log(number);
// }

// var printNumberAgain = () => {
//   var number2 = 40;

//   console.log(number2);
// };

/* TODO: Coding Question */
// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   //   var x = 100;
//   console.log(x);
// }

/* TODO: Lexical Scoping */

// var myName = "ankush";
// function getAge() {
//   var myAge = 24;

//   function printAge() {
//     console.log(myAge);
//   }

//   printAge();
//   console.log(myName);
// }

// getAge();

/* TODO: Let_Const_Var */

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10; /* Global Space - undefined */
// const b = 20; /* Different Space - not defined  */
// let c = 30; /* Different Space - not defined */

/* TODO: BlOCK Space */

// let myCity = "Shimla";
// var myPhoneNumber = "5656565";
// {
//   var myPhoneNumber = "12345";
//   let myName = "Ankush Thakur";
//   const myAge = "24";
//   console.log(`My Name: ${myName} and My Age: ${myAge} and my city is ${myCity} ${myPhoneNumber}`);
// }
// // console.log(`My Name: ${myName} and My Age: ${myAge} and my city is ${myCity}`);
// console.log(`My Phone Number: ${myPhoneNumber}`); /* Var will override..bcz both are in global space this is known as Shadowings */

/* TODO: Clousures */
/* TODO:eg-1 */
/* function outer() {
  var myPhoneNumber = "6767565656";

  const innerFunction = () => {
    console.log(myPhoneNumber);
  };

  return innerFunction;
}

// console.log(outer());  return -innerFunction 
// const res = outer();
// res();
outer()(); */

/* TODO: eg-2 */

// const outest = () => {
//   const company = "PW";
//   function outer() {
//     const myName = "Ankush";

//     const innerFunction = (lastName) => {
//       console.log(myName, lastName, company);
//     };

//     return innerFunction;
//   }

//   return outer;
// };

// // const res = outer();
// // res("Thakur");

// const res = outest();
// res()("Sharma");

/* TODO: SetTimeOut */

// const printNumber = () => {
//   for (var i = 1; i <= 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// };
// /* Here it is reference of i not the value */
// /* i is refering to same memory location, bcz it is lvar */

// printNumber();

// const printNumber = () => {
//   for (var i = 1; i <= 5; i++) {
//     const printDelay = (x) => {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000);
//     };
//     printDelay(i);
//   }
// };
// /* Here it is reference of i not the value */
// /* i is refering to same memory location, bcz it is lvar */

// printNumber();

/* TODO: DATA Hiding */

// function Counter() {
//   let count = 0;

//   this.incrementCounter = function () {
//     count++;
//     console.log(count);
//   };

//   this.decrementCounter = function () {
//     count--;
//     console.log(count);
//   };
// }

// const counter1 = new Counter();

// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.incrementCounter();
// counter1.decrementCounter();

/* TODO: MAP, FILTER, REDUCE */
// let sum = 0;
// const arr = [10, 30, 55, 44, 89, 76, 5, 7, 6];

// arr.map((value, index) => console.log(value * 1));
// arr.map((value, index) => {
//   sum = sum + value;
//   console.log(sum);
// });

// arr.filter((value) => console.log(value > 40));
// const res = arr.reduce((acc, curr) => {
//   return (acc = acc + curr);
// }, 0);

// console.log(res);

const users = [
  { firstName: "John", lastName: "Doe", age: 40 },
  { firstName: "Ankush", lastName: "Thakur", age: 25 },
  { firstName: "Yash", lastName: "Matta", age: 40 },
  { firstName: "Vipul", lastName: "Sharma", age: 20 },
  { firstName: "Rohit", lastName: "Sharma", age: 20 },
];
/* FIXME: get the list of FullName */

// users.map((value) => {
//   console.log(`${value.firstName} ${value.lastName}`);
// });

// const res2 = users.map((value) => value.firstName + " " + value.lastName);

// console.log(...res2);

/*FIXME: list of ageGroup
{40:2, 25: 1, 20:2}
*/
// const calculateAge = users.reduce((acc, curr) => {
//   // console.log(acc[curr.age]);
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(calculateAge);

// FIXME: /* First name of all the People whose age is less than 30 */
// const res = users.filter((user) => user.age < 30).map((user) => user.firstName);

// console.log(...res);

/*TODO: Call Back hell & Promises */

// api.createOrder(() => {
//   api.processToPayment(() => {
//     api.updateWallet(() => {
//       api.showOrderSummary();
//     });
//   });
// });

// const promise = api.createOrder(); /* OrderID */

// promise.then(() => {
//   api.ProcessToPayment();
// });

/* TODO: Promise Chaining */
// const cart = ["jeans, purfume, Wallet"];
// const cart = ["jeans, purfume, Wallet"];

// const promise = createOrder(cart); /* OrderID */

// promise
//   .then((orderID) => {
//     console.log(orderID);
//     return proceedToPayment(orderID); /* paymentID */
//   })
//   .then((paymentID) => {
//     console.log("SUCCESS", paymentID);
//   })
//   .catch((err) => console.log(err));

// function createOrder(cart) {
//   const result = new Promise((resolve, reject) => {
//     if (cart.length === 0) {
//       const err = new Error("Cart is empty");
//       reject(err);
//     }

//     const orderID = "7678676";
//     setTimeout(() => {
//       resolve(orderID);
//     }, 2000);
//   });

//   return result;
// }

// function proceedToPayment(orderID) {
//   const result = new Promise((resolve, reject) => {
//     if (!orderID) {
//       const err = new Error("ERROR");
//       reject(err);
//     }

//     const paymentID = "payment_ID_232343";
//     setTimeout(() => {
//       resolve(paymentID);
//     }, 6000);
//   });

//   return result;
// }
