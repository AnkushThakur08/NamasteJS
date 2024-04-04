// const cart = ["jeans", "shirt", "shoes"];

// createOrder(cart, () => {
//   proceedToPayment();
// });
// /* This is inversion of Control, As giving th responsibility to createOrder to call my proceedToPayment */

// const promise = createOrder(cart);

// promise.then(() => {
//   proceedToPayment();
// });
/* .then will only be executed when promises object has value in it */

const githubApi = "api.github.com/users/ankushthakur08";

const result = fetch(githubApi);

result.then((data) => {
  console.log(data);
});

// fetch("https:api.github.com/users/ankushthakur08")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));

/* TODO: Promise Chaining */
// When are chaining the promises and promise result need to pass down to another promise, so IMP to return the promise object from the then block

createOrder(cart)
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    return showOrderSummary(paymentInfo);
  })
  .then((paymentInfo) => {
    return updateWalletBalance(paymentInfo);
  });
