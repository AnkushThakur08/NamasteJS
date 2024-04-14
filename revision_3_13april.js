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

/* var myName = "ankush";
function getAge() {
  var myAge = 24;

  function printAge() {
    console.log(myAge);
  }

  printAge();
  console.log(myName);
}

getAge(); */

/* TODO: Let_Const_Var */

// console.log(a);
// console.log(b);
// console.log(c);
// var a = 10; /* Global Space - undefined */
// const b = 20; /* Different Space - undefined  */
// let c = 30; /* Different Space - undefined */

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
