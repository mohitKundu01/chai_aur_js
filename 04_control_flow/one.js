// if
// const isUserLoggedIn = true

// if(2!=3){
//     console.log("executed")
// }

// <, >, <=, >=, ==, ===, !=, !== 

// const score = 100

// if(score>100){
//     const power = "fly"
//     console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)


// Shorthand Notation
const balance = 1000
// if(balance>500) console.log("test"), console.log("test2")

// if(balance<500){
//     console.log("Less than 500")
// }else if(balance<750){
//     console.log("Less than 750")
// }else if(balance<900){
//     console.log("Less than 900")
// }
// else{
//     console.log("Less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course")
// }

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged in");
}

