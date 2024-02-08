let score = 33;
let sc = "33";

console.log(typeof score);
console.log(typeof sc);

//Conversion
let valueInnumber = Number(sc);
console.log(valueInnumber);

//There is no strict check
let age = "34bssv";
let ageInNum = Number(age); //it is converted to NaN but type of shows number
console.log(ageInNum);
console.log(typeof ageInNum);

/*
Likewise we can check other datatypes by converting to Number:
--------------------------------------
"33"->33
"33abc"->NaN
true->1
false->0
null->0
*/

let isLoggedIn = 1;
let convertBool = Boolean(isLoggedIn);
console.log(convertBool);

/*
 Likewise we can convert many things to Boolean

 "aabc" -> true
 ""->true
 1->true
 0->false
*/
