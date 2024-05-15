/*TODO: Hoisting */
/* 
printNumber();
console.log(a);

var a = 10;
// function printNumber() {
//   var b = 20;
//   console.log(b);
// }

var printNumber = () => {
  var b = 20;
  console.log(b);
}; 
*/

/*TODO: Let var const */

/*
 let a = 10;
const b = 20;
var c = 30;
 */

/* TODO: This Keyword */
/* 
var a = 10;

const PrintName = () => {
  const c = 10;
  console.log(c);
};
console.log(a);
console.log(this.a);
console.log(window.a); 

*/

/* TODO: Lexical Scope */

/* 
var a = 10;

function getNumber() {
  var b = 20;
  console.log(myName);
  function printNumber() {
    var myName = "Ankush";
    console.log(b);
  }

  printNumber();
}

getNumber();
 */

/*TODO: SetTimeOut */

/* 
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, [i * 1000]);
}

for (var i = 1; i <= 5; i++) {
  function close(x) {
    setTimeout(() => {
      console.log(x);
    }, [x * 1000]);
  }

  close(i);
}
 */

/* TODO: block Scope */

/* let b = 100;

{
  var a = 10;
  let b = 20;
  const c = 30;
  console.log(a, b, c);
}

console.log(b);
 */

/* TODO: Closures */
/* 
function getName() {
  var myName = "Ankush Thakur";

  function printName() {
    console.log(myName);
  }

  printName();
}

getName();

function getName() {
  var myName = "Ankush Thakur";

  function printName() {
    console.log(myName);
  }

  return printName;
}

const result = getName();

result();
 */

/* TODO: Data Hiding and Encaplusation */

/* 
function counter() {
  var count = 0;
  function incrementCounter() {
    count++;
    console.log(count);
  }
  return incrementCounter;
}


counter()();
var result = counter();
result();


// THIS IS NOT A GOOD WAY, GOOD WAY IS WITH CONSTRUCTOR


function Counter() {
    var count = 0;
    this.incrementCounter = function () {
      count++;
      console.log(count);
    };
  
  
    this.decrementCounter = function () {
      count--;
      console.log(count);
    };
  }
  
  
  var counter1 = new Counter();
  
  
  counter1.incrementCounter();
  counter1.incrementCounter();
  counter1.decrementCounter();
   */

/* TODO: Higher Order Function */
// function a(name) {
//   console.log(`My Name is ${name}`);
// }

// function b(a, name) {
//   a(name);
// }

// b(a, "Thakur");

/* TODO: Functional Programming */

const radius = [1, 2, 3, 4];

// const CalculateArea = (radius) => {
//   let output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   console.log(output);
// };

// const CalculateCircumference = (radius) => {
//   let output = [];

//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   console.log(output);
// };

// const CalculateDiameter = (radius) => {
//   let output = [];

//   for (i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }

//   console.log(output);
// };

// CalculateArea(radius);
// CalculateCircumference(radius);
// CalculateDiameter(radius);

/* const AreaFormula = (radius) => Math.PI * radius * radius;
const CircumferenceFormula = (radius) => 2 * Math.PI * radius;
const DiameterFormula = (radius) => 2 * radius;

const CircleCalculation = (radius, formula) => {
  let output = [];
  console.log(formula);

  for (let i = 0; i < radius.length; i++) {
    output.push(formula(radius[i]));
  }
  console.log(output);
};

CircleCalculation(radius, AreaFormula);
CircleCalculation(radius, CircumferenceFormula);
CircleCalculation(radius, DiameterFormula);
 */

/* TODO: Promises */

const githubApi = "https://api.github.com/users/ankushthakur08";

const res = fetch(githubApi)
  .then((data) => data.json())
  .then((data) => console.log(data));

function getName() {
  var myName = "Ankush Thakur";

  function printName() {
    console.log(myName);
  }
  return printName;
}

const res2 = getName();
res2();
