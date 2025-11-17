// console.log(a) /* undefined */
// console.log(b) /* undefined */
// printNumber() /* 100 */
// console.log(z); /* error: referrence error */

// var a = 10;
// var b = 20

// var printNumber = () => {
//     var c = 100;
//     console.log(c);

// }

// const z = 100;

//TODO: Closure
/* function outer() {
  var a = 10;

  function inner() {
    console.log(a);
  }

  return inner
}


const z = outer()
z() */

// TODO: Nested Closure
/* const getName = () => {
  const myName = "Ankush";

  const getAge = () => {
    const myage = 27;

    const getNumber = () => {
      const myNumber = 100;

      const printInfo = () => {
        console.log(
          `My Name is ${myName} my age is ${myage} and my number is ${myNumber}`
        );
      };
      return printInfo
    };
    return getNumber
  };

  return getAge;
};

// getName()()()()

const ageFunction = getName()

const getNumber = ageFunction()

const printInfo = getNumber()
printInfo()
 */

// TODO: print 1-5 at a delay of 1 second
/* for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
} */

/* for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, x * 1000);
  }

  close(i);
}
 */

// TODO: Data Abstraction
/* function Counter() {
  var count = 1;

  this.incrementCounter = function() {
    count = count + 1;
    console.log(count);
  };

  this.decrementCounter = function() {
    count = count - 1;
    console.log(count)
  }
}


const counter1 = new Counter()
const counter2 = new Counter()


counter1.incrementCounter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()


counter2.incrementCounter()
counter2.incrementCounter()
counter2.decrementCounter() */

// TODO: Coding Question

/* console.log("start");

setTimeout(function cbT() {
  console.log("CB setTimeout");
}, 5000);

fetch("https://randomuser.me/api/").then(() => {
  console.log("CB Netflix");
});


console.log("END") */

// TODO: Pratice Question

const users = [
  { firstName: "John", lastName: "Doe", age: 40 },
  { firstName: "Ankush", lastName: "Thakur", age: 25 },
  { firstName: "Yash", lastName: "Matta", age: 40 },
  { firstName: "Vipul", lastName: "Sharma", age: 20 },
  { firstName: "Rohit", lastName: "Sharma", age: 20 },
];

/* get the list of FullName */
const res = users.map((user, index) => user.firstName + " " + user.lastName);
console.log(res.join());

/* list of ageGroup
{40:2, 25: 1, 20:2}
*/
/* let count = {}

for(let i=0; i<users.length; i++){
  let element = users[i].age;

  if(count[element]){
    count[element]++;
  } else {
    count[element] = 1;
  }
}

console.log(count); */

/* First name of all the People whose age is less than 30 */
// console.log(i);

/* CALLBACK HELL */
/* api.createOrder(() => {
  api.processToPayment(() => {
    api.showOrderSummary(() => {
      api.updateWallet()
    })
  })
})


const promise = createOrder()

promise.then(() => {
  processToPayment()
}) */

/* PROMISES */

const cart = ["Jeans", "Shirt", "Cap"];

const createOrder = (cart) => {
  const promise = new Promise((resolve, reject) => {
    const isValid = true;

    if (!isValid) {
      const message = "Cart is invalid";
      reject(message);
      throw Error(message);
    }

    const orderID = "232323";
    setTimeout(() => {
      resolve(orderID);
    }, 5000);
  });

  return promise;
};

const processToPayment = (orderID) => {
  const promise2 = new Promise((resolve, reject) => {
    const paymentID = "34343"
    if (!orderID) {
      const message = "Order ID is wrong";
      reject(message);
      throw Error(message);
    }

    resolve(paymentID);
  });
  return promise2;
};

const result = createOrder(cart);

result
  .then((orderID) => {
    console.log("orderID", orderID);
   return processToPayment(orderID);
  })
  .then((message) => {
    console.log("Message", message);
  });
