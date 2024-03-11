//this : tells about current context

const user = {
  username: "Dipti",
  price: 999,

  welcomMSG: function () {
    console.log(`${this.username} , WELCOME`);
    console.log(this);
  },
};

user.welcomMSG(); //Dipti
user.username = "Sam";
user.welcomMSG(); //Sam
console.log(this); //empty object but it is different in browser

//Check the Difference

function abc() {
  const username = "Dipti";
  console.log(this); //See the Output
  console.log(this.username); //undefined
}
abc();

const abc2 = () => {
  const username = "Dipti";
  console.log(this); //See the Output
  console.log(this.username); //undefined
};
abc2();

const addNum = (num1, num2) => num1 + num2; //Implicit arrow function

console.log(addNum(3, 5));

const returnObj = () => ({ username: "DIpti" }); //Implicit arrow function
console.log(returnObj());
