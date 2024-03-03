const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 0];

arr1.push(arr2);
console.log(arr1); //see output

const arr3 = [1, 2, 3, 4, 5];
const arr4 = [6, 7, 8, 9, 0];

const mergeArr = arr3.concat(arr4);
console.log(mergeArr); //see output

//we can also use the spread opeartor

const mergeArr2 = [...arr3, ...arr4];
console.log(mergeArr2);

//We can convert anything to an array by some methods

console.log(Array.from("Diptiranjan"));
console.log(Array.from({ name: "Dipti" })); //see output **interesting

let s1 = 5;
let s2 = 7;
let s3 = 9;
console.log(Array.of(s1, s2, s3)); //[5,7,9]

//important
let arr = [1, 2, 5, 5, [6, 93, 67], 7, 98, [6, 68, 46, 9, [798, 80]]];

console.log(arr);
console.log(arr.flat(Infinity));
