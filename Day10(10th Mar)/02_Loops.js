//For Of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

const Greetings = "Good Morning";
for (const greet of Greetings) {
  console.log(greet);
}

//Maps : Unique values

const map = new Map();
map.set("IN", "India");
map.set("IN", "India"); // Not added
map.set("AUS", "Australia");

console.log(map);

for (const key of map) {
  console.log(key);
}

for (const [key, value] of map) {
  console.log(key, value);
}

// Objects can not be iterable like the above syntax
