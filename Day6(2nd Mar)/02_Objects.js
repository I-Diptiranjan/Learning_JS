// Objects inside objects

const user1 = {
  email: "abc@gmail.com",
  userFullName: {
    fullName: {
      fname: "Dipti",
      lname: "Sahoo",
    },
  },
};

const user2 = {
  email: "def@gmail.com",
  userFullName: {
    fullName: {
      fname: "DEF",
      lname: "Sahoo",
    },
  },
};

//Combine Objects

const user3 = Object.assign( user1, user2);
//OR
// const user = { ...user1, ...user2 };

console.log(user3);
console.log(Object.keys(user3));
console.log(Object.values(user3));
console.log(user3.hasOwnProperty('email'));
console.log(Object.entries(user3));

