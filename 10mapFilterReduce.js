const users = [
  { firstName: "John", lastName: "Doe", age: 40 },
  { firstName: "Ankush", lastName: "Thakur", age: 25 },
  { firstName: "Yash", lastName: "Matta", age: 40 },
  { firstName: "Vipul", lastName: "Sharma", age: 20 },
  { firstName: "Rohit", lastName: "Sharma", age: 20 },
];

/* list of FullName */
const res = users.map((values) => values.firstName + " " + values.lastName);
console.log(res); /* Result in array */

/* If you don't want array then use rest operator console.log(...rest) OR .join(", ") */

/* list of ageGroup 
{40:2, 25: 1, 20:2}
*/

const calculateAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(calculateAge);

/* First name of all the People whoes age is less than 30 */

const firstName = users.filter((value) => value.age < 30).map((value) => value.firstName); /* after filter we will use map */
console.log(firstName); /* this give the result but i want only first name */

/* Same with Reduce */
// const output = user.reduce((acc, current) => {

//     if(current.age < 30){
//         acc.push(current.firstname);
//     }

//     return acc;

//   }, []);

//   console.log(output);
