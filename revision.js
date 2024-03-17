// // for (var i= 1; i<=5; i++){
// //     function close(x) {
// //         setTimeout(() => {
// //             console.log(x)
// //         }, x *1000)

// //     }
// //     close(i)
   
// // }


// function outest(){
//     var c = 100;
//     function outer(b){
//         var a = 10;
//         function inner(){
//             console.log(a, b, c);
//         }
//         return inner;
//     }
//     return outer;


// }




// outest()("hello world")();



// api.createOrder(car, function(){
//     api.processToPayment(function () {
//         api.showOrderHistory(function () {
//             api.updateWallet()
//         } );
//     })

// })

// const arr = [10,10, 20,30,30, 40];

// const uniqueArray = arr.filter((value, index) => {
//     return arr.indexOf(value) === index
// })

// console.log(uniqueArray)

// SUM
// const sum = arr.reduce((previousValue, currentValue) => {
//     return previousValue+currentValue
// })

// console.log(sum)

// console.log(Math.min(...arr))
// console.log(Math.max(...arr))


// let output= [];

// for(i=arr.length-1; i>=0; i--){
//     output.push(arr[i])
// }

// console.log(output)

// const arr = [10,10, 20,30,30, 40];
// let x = 10;
// let count = 0

// for(var i=0; i<arr.length; i++){
//     if(arr[i] ===x){
//         count ++;
//     }
// }

// console.log(count)

// const arr = [10,10, 20,30,30, 40, 50, 50, 60, 70];

// const counts={}

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])

//     const elements = arr[i]

//     console.log(elements)

//     if(counts[elements]){
//         counts[elements]++;
//     } else {
//         counts[elements] = 1
//     }
// }

// console.log(counts)

// const arr = [10,10, 20,30,30, 40, 50, 50, 60, 70];

// const counts = {}

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])

//     const elements = arr[i];

//     if(counts[elements]){
//         counts[elements]++;
//     } else {
//         counts[elements] = 1
//        }
// }

// console.log(counts)

const name = "Ankush"
const name2 = "kush"

const n1 = [...name]
const n2 = [...name2]

function ankush(){
    var uniqueArray = n1.filter((value, index) =>  {
        console.log(n2.includes(value))
        return n2.includes(value)
    })
    console.log(uniqueArray)
    console.log(uniqueArray.join(" "))
}