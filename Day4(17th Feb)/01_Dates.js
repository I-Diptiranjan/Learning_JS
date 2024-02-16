// Starts the milisecond from 1970

//Date is an Object

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let myCreateDate = new Date(2022, 0, 8, 6, 8);
console.log(myCreateDate.toDateString());

let myCreateDate2 = new Date("2022-01-02");
console.log(myCreateDate2.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreateDate.getTime()); //gives output in miliseconds

//to get output in seconds
console.log(Math.floor(Date.now() / 1000));

console.log(new Date().getDay()); //likewise we can get month , year etc

let newDate = new Date();
console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
  })
); //Saturday
