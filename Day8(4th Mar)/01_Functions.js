function addNumbers(num1 = 5, num2 = 8) {
  console.log(num1 + num2);
  return num1 + num2;
  console.log("Dipti"); //Unreachable code
}

addNumbers(3, 4);
addNumbers(3, "4");
addNumbers(3, "a");
addNumbers(3, null);
addNumbers();

function loginUserMsg(user) {
  if (!username) {
    console.log("Enter User Name");
    return;
  }

  return `${user} just logged in`;
}
