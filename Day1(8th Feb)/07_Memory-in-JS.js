// Two types of Memory i.e Stack(for primitive datatypes) & Heap (for Nonprimitive Datatypes)

/*

Stack -> always returns a copy
Heap -> always returns a referenceb  

*/

//Difference between Stack & Heap Memory

let id = "abcd";
let id2 = id;
console.log(id);
console.log(id2);
id2 = "vdjvk";
console.log(id);
console.log(id2);


//But in Case of Heap it gives reference so it chnges the original value

let user1 = {
    id:1,
    email:"abc@gmail.com",
    name : "abcd"
}

let user2 = user1
console.log(user1);
console.log(user2);

user2.name="vbjdkclc"

console.log(user1)
console.log(user2)
