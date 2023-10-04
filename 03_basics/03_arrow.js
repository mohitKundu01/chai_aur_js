const user = {
    username: "Kundu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)   // this current value koa represent krta hai

    }
}

// user.welcomeMessage();
// user.username = "Mohit"
// user.welcomeMessage()

// console.log(this)  -> referes empty object

// function chai(){
//     let username = "Kundu"
//     console.log(this.username)
// }


// const  chai = function(){
//     let username = "Kundu"
//     console.log(this.username)
// }

// ++ Arrow function ++
// const chai = () =>{
//     let username = "Kundu"
//     console.log(this.username)
// }
// chai();


//++++++++++ Arrow Function ++++++++++++

// const addTwo = (num1, num2) =>{
//       return num1 + num2;
// }


// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({name:"Kundu"})
console.log(addTwo(3, 2))






