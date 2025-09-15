/* TODO: Find the Second Last element in the Array */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// const arr2 = [
//   'Ankush',
//   'Yash',
//   'Rohit',
//   'Vipin',
//   'Matta',
//   'Bali',
//   'Sharma',
//   'Thakur',
// ]

// console.log(arr[arr.length -2]);
// console.log(arr2[arr2.length -2]);

/* TODO: /* SUM of Element */

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// let sum = 0

// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i]
// }
// console.log(sum)

// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// const res = arr.reduce((acc, curr) => {
//   acc = acc + curr
//   return acc
// }, 0)

// console.log("res",res);

/*TODO: Remove Duplicate Element in an Array */
// const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 10, 50, 70, 90]

/* USING FILTER & indexOF */
// const res = arr.filter((item, index) => arr.indexOf(item) === index)

// console.log('res', res)

/* USING SET */
// const uniqueArr = [...new Set(arr)]
// console.log('uniqueAr', uniqueArr)

/* USING BASIC */
// const handleDuplicate = () => {
//   const uniqueAr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (!uniqueAr.includes(arr[i])) {
//       uniqueAr.push(arr[i])
//     }
//   }

//   console.log('uniqueAr===', uniqueAr)
// }

// handleDuplicate()

/*TODO: Find Minimum and Maximum Value */
// const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40]

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))

// const handleMinMax = () => {
//   let min = arr[0]
//   let max = arr[0]

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     } else if (arr[i] < min) {
//       min = arr[i]
//     }
//   }

//   console.log('min', min)
//   console.log('max', max)
// }

// handleMinMax()



/* TODO:Sort the elements */
const arr = [40, 50, 70, 20, 10, 60, 5, 3, 78, 56, 40];

// const res = arr.sort((a, b) => b - a); /* Largest to Lowest */
// const res2 = arr.sort((a, b) => a - b); /* Lowest to Largest */

// console.log(res);
// console.log(res2);

const sortArray = (arr) => {
  for (i = 0; i <= arr.length - 1; i++) {
    console.log("ssss", arr[i]);
    for (j = 0; j <= arr.length - 1 - i; j++) {
      console.log("asasa", arr[j]);
      console.log("checl", arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    return arr;
  }
};

console.log(sortArray(arr));