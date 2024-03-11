function one() {
  const user = "abc";
  function two() {
    const web = "youtube";
    console.log(user);
  }

  // console.log(web);  We can not print here

  two();
}

one();

//+++++++++++++++++++++ INTERESTING ++++++++++++++++++++++

console.log(addOne(4)); ///MARK IT

function addOne(num) {
  return num + 1;
}
addOne(5);

//Here Comes the main part

addTwo(6); //Gives Error
const addTwo = function addTwo(num) {
  return num + 2;
};

addTwo(5);
