// Constructor : Singleton
// Literal : Not Singleton

//Constructor
/*
const user = new Object()
*/

let mySymbol = Symbol("Key 1");

//Literal
const jsUser = {
  name: "Diptiranjan",
  age: 18,
  [mySymbol]: "My Key Value",
  "location area": "Jajpur",
  email: "abc@gmail.com",
  isLoggedin: false,
  lastLoginDay: ["Mon", "Tue", "Wed"],
};

console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(jsUser.location area); //You can not print
console.log(jsUser["location area"]);
console.log(jsUser[mySymbol]);

//Chnaging Email Values
jsUser.email = "dipti@gmail.com";

//If you want that no one can change the object then
// Object.freeze(jsUser);

// jsUser.email = "abc@gmail.com"; //This change will not applied CHECK

console.log(jsUser);

console.log("--------------------------------------------");

jsUser.grertings = function () {
  console.log("Hello User");
};

jsUser.grertings2 = function () {
  console.log(`Hello , ${this.name}`);
};

console.log(jsUser);
console.log(jsUser.grertings);
console.log(jsUser.grertings());
console.log(jsUser.grertings2());
