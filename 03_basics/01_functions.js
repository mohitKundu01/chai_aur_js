function sayMyName(){
    console.log("K")
    console.log("U")
    console.log("N")
    console.log("D")
    console.log("U")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
    console.log("Kundu")
}
const result = addTwoNumbers(21, 4)
// console.log(result)


function loginUserMessage(username = "sam"){
    // if(username===undefined){
        if(!username){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 600))


const user = {
    username:"Kundu",
    prices: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`)
}

// handleObject(user)

const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr))