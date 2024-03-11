// IIFE : Immediately Invoked Function Expression

//Global scope ke pollution se bachne keliye humne IIFE ka selection kiya

(function Hello() {
  //It is called as named IIFE
  console.log("Hello");
})(); //Direct Execution

(() => {
  //It is called as Unnamed IIFE
  console.log("Hello");
})(); //if you have more than one IIFE then end each IIFE with semicolon
