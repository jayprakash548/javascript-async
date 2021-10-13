const arr = [5, 1, 3, 9, 2];

// function sum() {
//     let total = 0;
//     for (let index = 0; index < arr.length; index++) {
//         total = total+arr[index];        
//     }
//     return total;
// }
// console.log(sum());

// const output = arr.reduce(function (acc, curr) {
//     acc = acc + curr
//     return acc;
// })
// console.log(output);

// function max() {
//     let max = 0;
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > max) {
//             max = arr[index];
//         }
//     }
//     return max;
// }

// console.log(max());

const output = arr.reduce(function (acc, curr) {
    if (curr > acc) {
        acc = curr;
    }
    return acc;
}, 0);

console.log(output);