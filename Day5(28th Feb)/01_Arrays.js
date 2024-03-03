//Arrays

/*
->Arrays are resizable in JS
->Array copy oprations create shalow copies in JS
*/

const myArr = [1, 3, 4, 5, 6, 7, 9];
console.log(myArr);

myArr.push(10);
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(233);
console.log(myArr);

myArr.shift();
console.log(myArr);

//Other ways to create a array

const myArr2 = new Array(65, 3242, 424, 313);
console.log(myArr2);

//Different Array Operations

const newArr = myArr.slice(1, 3);
console.log(newArr); //3,4
console.log(myArr); //1,3,4,5,6,7,9

const newArr2 = myArr.splice(1, 3);
console.log(newArr2); //3,4,5
console.log(myArr); //1,6,7,9

//Diffrence between Slice and Splice is
/*
->Slice does not include the end index while splice includes
->SLice does not modify the original array where splice does
*/

//Some other operations

const newStr = myArr.join(); //converts arrray to string
console.log(newStr);
