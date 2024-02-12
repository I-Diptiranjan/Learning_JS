//we can direct initialize number and can explicitely also declare numbers

const num = 400;
const newNum = new Number(30003238);

console.log(num);
console.log(newNum);

console.log(num.toString().length);
console.log(num.toFixed(2)); //400.00

const fNum = 423.289381
console.log(fNum.toPrecision(4)); //423.3

//Converting Numbers to local Representation
console.log(newNum.toLocaleString());


//Using Random Function

console.log(Math.floor(Math.random() * 10 + 1));


// If we want to generate a nnumber in a range

const min = 10
const max = 20

let n = Math.floor((Math.random() * (max - min + 1)) + min);
console.log((n));

