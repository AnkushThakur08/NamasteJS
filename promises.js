const cart = ["pant", "shoes", "purfume"];

/* Earlier Approach */

creatrOrder(cart, () => {
  proceedToPayment();
});

/* To Solve this */
/* createOrder - This is my Api, which will return me a orderId */
const promise = createOrder(cart);

/*  */
/* return = {data: undefined} or {data : (value which is returned by the createOrderApi)} */
/* When JS run this code, promise will return an object/empty object which have undefined in it {data: undefined}....  */
/* JS continue to run the REST OF CODE (WRITTEN BELOW) */
/* When the createOrderApi will return the value, it will update the promise object with the value {data: (value which is returned by the createOrderApi)} */
promise.then(() => {
  proceedToPayment();
});

/* Before we were passing the callback function, now we are attaching the callback to the promise object */

const promise1 = createOrder(cart);

promise1.then(() => {
  proceedToPayment();
});
