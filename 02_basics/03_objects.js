// Singleton - When we declare a object in object literals way then it is not singleton.
//           - And when we declare a object in constructor method way then it is singleton.
// Object.create() 

// object literals 

const mySym = Symbol("key1")

const JsUser  = {
    name:"Kundu",
    "full Name":"Mohit Kundu",
    [mySym]:"myKey1",
    age:18,
    location:"Harayana",
    email:"hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser.fullName) -> give error
// console.log(JsUser["full Name"])
// console.log(JsUser[mySym])

// JsUser.email = "Kundu@gamil.com"
// Object.freeze(JsUser)
// JsUser.email = "Kudnu...."
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())