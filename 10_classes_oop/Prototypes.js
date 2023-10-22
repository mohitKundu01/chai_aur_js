let myName = "kundu  ";
let myChannel = "chai  ";
console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present in all objects`);
}


Array.prototype.heyHitesh = function(){
    console.log(`Hitesh say hello`);
}


// heroPower.hitesh()
// myHeros.hitesh()

// heroPower.heyHitesh()  // This object is not access array method
myHeros.heyHitesh()

// inheritance


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: `JS assignment`,
    fullTime: true,
    __proto__: TeachingSupport
}


Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode  ";
String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength()



