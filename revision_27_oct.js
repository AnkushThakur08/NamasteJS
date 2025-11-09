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