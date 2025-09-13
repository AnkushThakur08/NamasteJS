/*TODO: HOISTING */

// printNumber()

// function printNumber() {
//     const a  = 10;
//     console.log(a);
// }

// var printNumber = () => {
//     const a = 20;
//     console.log(a);

// }

// console.log(a);

// var a = 100;

/* Lexical Scoping */

// const a = 50

// printNumber()
// printNumber2()

// function printNumber() {
//   console.log(a)
// }

// function printNumber2() {
//     const a = 100;
//     console.log(a);
// }

/* TODO: QUESTION */
// var x = 1
// a()
// b()
// console.log(x)

// function a() {
//   var x = 10
//   console.log(x)
// }

// function b() {
//   //   var x = 100;
//   console.log(x)
// }

/* TODO: Clousures: */

// function outer() {
//     const myNumber = 7018298756

//     function inner(){
//         console.log(myNumber)
//     }

//     return inner;
// }

// console.log("outer", outer());

// const res = outer()

// res()

/* TODO: Question2 */
// const outest = () => {
//   const companyName = 'Infosys'

//   const outer = () => {
//     const myName = 'Ankush'

//     const inner = (lastName) => {
//         console.log(myName, lastName, companyName)
//     }

//     return inner
//   }

//   return outer
// }

// const response = outest()
// console.log("res", response)

// const repsonse2 = response()
// console.log("res2", repsonse2);

// console.log(repsonse2("Thakur"))

/* TODO: Set Time out  with let*/

// const printNumber = () => {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i * 1000)
//   }
// }

// printNumber()

/* TODO: Set Time out  with VAR*/

// const printNumber = () => {
//   for (var i = 1; i <= 5; i++) {
//     const inner = (value) => {
//       setTimeout(() => {
//         console.log(value)
//       }, value * 1000)
//     }

//     inner(i)
//   }
// }

// printNumber()

/*  TODO: DATA HIDING*/

// function Counter() {
//   let count = 0

//   this.incrementCounter = function () {
//     count++
//     console.log(count)
//   }

//   this.decrementCounter = function () {
//     count--
//     console.log(count)
//   }
// }

// var count1 = new Counter()
// var count2 = new Counter()

// count1.incrementCounter()
// count1.incrementCounter()
// count1.incrementCounter()
// count1.decrementCounter()

// count2.incrementCounter()

/* TODO: MAP FILTER & REEDUCE */
// const users = [
//   { firstName: 'John', lastName: 'Doe', age: 40 },
//   { firstName: 'Ankush', lastName: 'Thakur', age: 25 },
//   { firstName: 'Yash', lastName: 'Matta', age: 40 },
//   { firstName: 'Vipul', lastName: 'Sharma', age: 20 },
//   { firstName: 'Rohit', lastName: 'Sharma', age: 20 },
// ]
/* FIXME: get the list of FullName */

// const res = users.map((user) => user.firstName + ' ' + user.lastName)
// console.log('res', res.join())

/* TODO: Question list of ageGroup
{40:2, 25: 1, 20:2}
*/

// users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1
//   } else {
//     acc[curr.age] = 1
//   }
//   return acc
// }, {})

/*TODO: Question First name of all the People whose age is less than 30 */

// const res2 = users.filter((user) => user.age < 30).map((filteredData) => filteredData.firstName )

// console.log("res",res2)

/* TODO: CALL BACK HELL */

// api.createOrder(() => {
//     api.proceedToPayment(() => {
//         api.ShowOrderSummary(() => {
//             api.updateWallet()
//         })
//     })
// })

/* Promise */

// promise.then(() => {
//     api.createOrder()
// }).then(() => {
//     api.proceedToPayment()
// }).then(() => {
//     api.ShowOrderSummary()
// }).then(() => {
//     api.updateWallet()
// })

/* TODO: PROMISE CREATION */

// const cart = ['jeans', 'watch', 'phone']

// const createOrder = (cart) => {
//   const createOrder = new Promise((resolve, reject) => {
//     if (cart.length === 0) {
//       const error = new Error('Cart is Empty')
//       reject(error)
//     }
//     const orderID = '767676'
//     setTimeout(() => {
//       resolve(orderID)
//     }, 2000)
//   })
//   return createOrder
// }

// const proceedToPayment = (orderID) => {
//   const proceedToPayment = new Promise((resolve, reject) => {
//     if (!orderID) {
//       const error = new Error('Order ID not found')
//       reject(orderID)
//     }

//     const paymentID = 'PAYMENTDONE'
//     setTimeout(() => {
//       resolve(paymentID)
//     }, 2000)
//   })
//   return proceedToPayment
// }

// const promise = createOrder(cart)

// promise
//   .then((orderID) => {
//     return proceedToPayment(orderID)
//   })
//   .then((paymentID) => {
//     console.log(paymentID)
//   })



/* ASYNC & AWAIT */
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 10000);
});


const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2");
  }, 5000);
});


const getData = async () => {
  console.log("Start");
  const res1 = await p1;


  console.log("STEP -1");
  console.log(res1);


  const res2 = await p2;


  console.log("STEP -2");
  console.log(res2);
};

getData()
