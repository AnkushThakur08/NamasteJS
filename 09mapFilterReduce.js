const values = [5, 1, 3, 2, 6];
/* TODO: MAP */
// double - 10, 2, 6, 4, 12
// Triple - 15, 3, 9, 4, 18
// Binary - '101', '1', '11', '10', '110'

// console.log(values.map((value) => value * 2));
// console.log(values.map((value) => value * 3));
// console.log(values.map((value) => value.toString(2)));

// console.log(values);

/* TODO: Filter */
// const isOdd = (x) => {
//   return x % 2;
// };

// const isEven = (x) => {
//   return x % 2 === 0;
// };

// const greatherThanFour = (x) => {
//   return x > 4;
// };

// const result = values.filter(isOdd);
// const result1 = values.filter(isEven);
// const result2 = values.filter(greatherThanFour);
// console.log(result);
// console.log(result1);
// console.log(result2);

/* TODO: REDUCE */

const sumofArray = () => {
  let result = 0;
  for (i = 0; i < values.length; i++) {
    result = result + values[i];
  }
  console.log(result);
};

sumofArray();

const sumUsingReduce = values.reduce((acc, curr) => (acc = acc + curr), 0);
console.log(sumUsingReduce);
/* 
Here acc is equal to sum
curr is equal to values[i]
0 is the initial value of acc
  acc = 0 + 5 = 5
  acc = 5 + 1 = 6
  acc = 6 + 3 = 9
  acc = 9 + 2 = 11
  acc = 11 + 6 = 17
  console.log(acc) 17

*/

/* TODO: Find the maxmimum value in an Array */
// const values = [5, 1, 3, 2, 6];

// const maximumValue = () => {
//   let maxValue = values[0];

//   for (i = 0; i < values.length; i++) {
//     if (values[i] > maxValue) {
//       maxValue = values[i];
//     }
//   }

//   console.log(maxValue);
// };

// maximumValue();

const output = values.reduce((acc, curr) => {
  if (curr > acc) {
    acc = curr;
  }
  return acc;
}, 0);

console.log(output);
