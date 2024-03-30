/* function a() {
  console.log("Ankush");
}

function b(a) {
  a();
}
 */
/* Function a is Callback Function
    Function b is a HOF
*/

// Calculate Area, Circumference, & Daimeter

const radius = [1, 4, 5, 8];

const AreaFormula = (radius) => {
  return Math.PI * radius * radius;
};

const CircumferenceFormula = (radius) => {
  return 2 * Math.PI * radius;
};

const DaimeterFormula = (radius) => {
  return 2 * radius;
};

const commonFunction = (Formula, radius) => {
  let output = [];
  for (i = 0; i < radius.length; i++) {
    output.push(Formula(radius[i]));
  }
  return output;
};

console.log(commonFunction(AreaFormula, radius));
console.log(commonFunction(CircumferenceFormula, radius));
console.log(commonFunction(DaimeterFormula, radius));
