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

/* SetTimeOut */

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, [i * 1000]);
// }
