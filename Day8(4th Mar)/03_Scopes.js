var c = 300;

if (true) {
  //Block Scope
  let a = 10;
  const b = 20;
  console.log("outer", c);
  var c = 30;
  console.log("innre", c);
}

// console.log(a); not able to print
// console.log(b); not able print
console.log(c); //But Prints 30.. so here is the Scope Problem

// REMEMBER !!!! : Scope in Browser and Node Environment are different
