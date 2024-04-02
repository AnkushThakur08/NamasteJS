const cart = ["pant", "shoes", "purfume"];

/* createOrder - This is my Api, which will return me a orderId */
const promise = createOrder(cart);

/* return = {} or {data : (value which is returned by the createOrderApi)} */

promise.then(() => {
  createOrder();
});

/* Before we were passing the callback function, now we are attaching the callback to the promise object */
