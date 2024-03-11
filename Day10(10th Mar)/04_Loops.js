// For each loop

const coding = ["js", "ruby", "java", "cpp"];

coding.forEach((element) => {
  console.log(element);
});

function print() {
  console.log("Hello");
}

coding.forEach(print);

coding.forEach((val, index, arr) => {
  console.log(val, index, coding);
});

//for each have access to the values , indexes and the complete array

const myCoding = [
  {
    name: "Dipti",
    age: 18,
  },
  {
    name: "Abc",
    age: 81,
  },
  ,
  {
    name: "Xyz",
    age: 61,
  },
];

myCoding.forEach((element) => {
  console.log(element);
});

//for each continued

const codes = coding.forEach((element) => {
  console.log(element);
});

console.log(codes); //undefined

const codes1 = coding.forEach((element) => {
  return element;
});

console.log(codes1); //undefined
