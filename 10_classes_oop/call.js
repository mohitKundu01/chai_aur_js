function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername(username) // Here function is not called
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fbfcom", 123);
console.log(chai)