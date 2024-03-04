function calculateCartPrice(...num1) {
  return num1; //return as a array
}

console.log(calculateCartPrice(2));
console.log(calculateCartPrice(2, 5, 2, 12, 1));

function calculateCartPrice2(num1, num2, ...others) {
  console.log(num1, num2, others);
}

calculateCartPrice2(2);
calculateCartPrice2(2, 5, 2, 12, 1);

// =======================================================

// Passing Object in Function

const user = {
  username: "Dipti",
  price: 199,
};

function handleObj(anyObject) {
  console.log(`${anyObject.username} and Price is ${anyObject.price}`);
}

handleObj(user);
handleObj({
  username: "abc",
  price: 503,
});

//Passing Arrays

const array =[100,1200,2101,3273]

function returnSecValue(array)
{
    return array[2];
}

console.log(returnSecValue(array));
console.log(returnSecValue([212,212,122,2,1212]));
