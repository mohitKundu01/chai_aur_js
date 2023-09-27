// Note: JavaScript is dynamically type language it automatical find out what type of data is it.

// DataType - divided into two part 01) Primitive 02) Non-Primitive 
// This is based on how we store data in memory and access data from the memory

// 01) Primitive datatype - These data-types access call by value from the memory means copy of the value
// 7 types : String, Number, Boolean, undefined, null, BigInt, Symbol

const score = 100;
const scoreValue = 10.1

const isLoggedValueIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id==anotherId);

const bigNumber = 3543245948372492022n;

// 02) Reference (non-primitive) - These data are access from the memory call by reference means directly point 
//                                  to the data in memory.

// Arrays, Object, Functions

const heroes = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:"Kundu",
    age:20
}

const myFunction = function(){
    console.log("Hello World");
}


// +++++++++++++++++++++++++++++++++++++++++++++++++
// STACK AND HEAP MEMORY

// Stack(Primitive) , Heap(Non-Primitive)

// Primitive - Here orginal value is not change copy of original value is used and store in stack memory(call by value)
let myYoutubename = "HiteshChoudarydotcom";
let anothername = myYoutubename  
anothername = "ChaiaurCode"

console.log(myYoutubename)
console.log(anothername);


// Non-Primitive - Here change will be done in original value (call by reference) and heap memory is used
let  userOne = {
    email: "user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "Htiesh@google"

console.log(userOne.email)
console.log(userTwo.email)
