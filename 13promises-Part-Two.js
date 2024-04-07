const cart = ["Jeans", "Shirt", "Kurtas"];

const promise = createOrder(cart);

promise
  .then((orderID) => {
    console.log(orderID);
    return proceedToPayment(orderID);
  })
  .then((paymenID) => {
    console.log(paymenID);
  })
  .catch((error) => {
    console.log(error.message);
  });

function createOrder(cart) {
  const myPromise = new Promise((resolve, reject) => {
    // To Create Order
    // Validate Card
    // const validateCard = false;
    const validateCard = true;

    if (!validateCard) {
      const error = new Error("Card is not valid");
      reject(error);
    }

    const orderID = "123456";
    setTimeout(() => {
      resolve(orderID);
    }, 5000);
  });

  return myPromise;
}

function proceedToPayment(orderID) {
  const myPromise2 = new Promise((resolve, reject) => {
    const paymentID = "23565";

    if (paymentID) {
      resolve(paymentID);
    } else {
      const error = new Error("Payment Failed");
      reject(error);
    }
  });

  return myPromise2;
}

// const creatOrder = (cart) => {};
