let name = "Dipti";
let myName = new String("Dipti-ranjan-Sahoo");

console.log(name);
console.log(myName);

//We canot use negative index in substring method but can use it in slice method

console.log(myName.substring(0, 4)); //Dipt
console.log(myName.substring(-8, 4)); //Dipt

console.log(myName.slice(0, 4)); //Dipt
console.log(myName.slice(-5, -1)); //Saho
