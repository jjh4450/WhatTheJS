let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split((/ |\n/)).map(Number);
let input_iterator = input[Symbol.iterator]();

function next() {
    return input_iterator.next().value;
}

let num = next();
let num2 = next();

console.log(num, num2);

// node IO/psio_template.js < IO/psio_input.txt