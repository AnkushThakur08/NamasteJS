/*FIXME: Lexical Scope */

// function getName() {
//   const myName = "Ankush";
//   function printName() {
//     return myName;
//   }

//   //   printName();
//   return printName;
// }

// const res = getName();

// /* other lines of codes */

// res();

/*FIXME: Closures */

// function outer() {
//   var myName = "Ankush Thakur";

//   function inner() {
//     var myAge = 24;
//     console.log(myName, myAge);
//   }

//   return inner;
// }

// outer()();

/* FIXME: setTimeout with Closures */
// for (var i = 1; i < 6; i++) {
//   function close(x) {
//     setTimeout(() => {
//       console.log(x);
//     }, x * 1000);
//   }
//   close(i);
// }

// for (var i = 1; i < 60000; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

/* FIXME: Callback hell */

// api.createOrder(() => {
//   api.processToPayment(() => {
//     api.showOrderSummary(() => {
//       api.updateWallet();
//     });
//   });
// });

// promise
//   .then(() => {
//     api.ProcessToPayment();
//   })
//   .then(() => {
//     api.ProcessToPayment();
//   })
//   .then(() => {
//     api.showOrderSummary();
//   })
//   .then(() => {
//     api.updateWalletStatus();
//   });

/* FIXME: Promises Chaining */

const cart = ["Shoes", "Jeans", "Perfume", "Wallet"];

const promise = createOrder(cart);

promise
  .then((orderID) => {
    return processToPayment(orderID);
  })
  .then((paymenID) => {
    console.log(paymenID);
  });

function createOrder(cart) {
  const createOrder = new Promise((resolve, reject) => {
    if (!cart) {
      const error = new Error("Cart is empty");
      reject(error);
    }
    const OrderID = "565232";
    setTimeout(() => {
      resolve(OrderID);
    }, 3000);
  });
  return createOrder;
}

function processToPayment(orderID) {
  const promise = new Promise((resolve, reject) => {
    if (!orderID) {
      const error = new Error("OrderID is empty");
      reject(error);
    }
    const paymenID = "Payment_ID_56454321";
    setTimeout(() => {
      resolve(paymenID);
    }, 3000);
  });
  return promise;
}
