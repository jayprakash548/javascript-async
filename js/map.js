const arr = [10, 20, 30, 40];


// function double(x) {
//     return x * 2;
// }
// const output = arr.map(double);

function binary(x) {
    return x.toString(2);
}
const output = arr.map(binary);

console.log(output);