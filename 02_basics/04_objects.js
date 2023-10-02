// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Kundu"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mohit",
            lastname:"Kundu"
        }
    }
}

// console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:"b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"kundu@mail.com"
    }
]

users[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


// Object De-Structure 

const course = {
    coursename: "js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}


// course.courseInstructor

// const {courseInstructor} = course   // de-structure  
// console.log(courseInstructor)  
const {courseInstructor: Instructor} = course
console.log(Instructor)



// JSON format (JSON-JavaScript Object Notation)
// {
//     "name":"Kundu",
//     "coursename":"JS in hindi",
//     "price":"free"
// }

