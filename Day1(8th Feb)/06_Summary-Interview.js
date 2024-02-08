// Primitive Datatypes :
/*
    7 types:
    String,Number.Boolean,null,undefined,Symbol ,BIgInt
*/

// JS is Dynamically typed Language

// Reference Datatype (Non Primitive)
/*
Array,Objects,Functions
*/

//Symbol uniquely identifies each elments although there value is same e.g,

let id = Symbol("123");
let anotherId = Symbol("123");
console.log(id === anotherId);

//Bigint
let bigNumber = 3658375385724n; //add a n at last

// Array , Objects , Functions

let arr = ["a", "b", "c"];
let obj = {
  num: 3,
  name: "abc",
  loggedIn: true,
};
let myFunc = function () {
  console.log("Hello World");
};

console.log(myFunc());

// type of all nonprimitive datatypes are object or function object
