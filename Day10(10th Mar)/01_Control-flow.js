// Truthy Values
/*

"0","false" ," ",[],{},function(){}

*/

//falsy Values
/*

false,0,-0,BigInt 0n ,"",null,undefined,NaN

*/

//Nullish Calescing Oprators (??)

let val1, val2, val3, val4;

val1 = 5 ?? 10; //5
val2 = null ?? 10; //10
val3 = undefined ?? 10; //10
val4 = null ?? 10 ?? 20; //10
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
