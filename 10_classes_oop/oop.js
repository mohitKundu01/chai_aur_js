// object literal
const user = {
    username:"Hitesh",
    loginCount : 8,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        console.log(this);
    }
}

console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    return this
}


// const userOne = User("Kundu", 12, true);
// const userTwo = User("Mohit", 15, false);
// console.log(userOne) // Here Values overwrite

// here empty object is create called  instance of an object is create fill value according to u
// new keyword call constructor 
const userOne = new User("Kundu", 12, true);
const userTwo = new User("Mohit", 15, false);
console.log(userOne); 