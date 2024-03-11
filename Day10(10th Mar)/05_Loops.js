//Filter

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const nums = myNum.filter((num) => {
  return num > 4;
});

console.log(nums);

//Map : Different in than filter

const newNums = myNum.map((el) => {
  return el + 5;
});

console.log(newNums);

//Chaining

const newNums1 = myNum
  .map((el) => {
    return el + 5;
  })
  .map((num) => {
    return num * 2;
  });

console.log(newNums1);

//Reduce

const Nums = [1, 2, 3, 4];

const myTotal = Nums.reduce((acc, currVal) => {
  console.log(`Acc ${acc} , Cuurent Value ${currVal}`);
  return acc + currVal;
}, 5); //by default it also gives 0
console.log(myTotal);

//Add shoping cart values
const shoppingCart = [
  {
    courseName: "Java",
    price: 1299,
  },
  {
    courseName: "CPP",
    price: 1699,
  },
  {
    courseName: "Js",
    price: 299,
  },
  {
    courseName: "C",
    price: 129,
  },
];

const add = shoppingCart.reduce((acc,currVal)=>{
    return acc+currVal.price
},0)

console.log(add);
