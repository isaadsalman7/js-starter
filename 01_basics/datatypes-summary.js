// PRIMITIVE DATATYPES
// 7 TYPES
// CALL BY VALUE STRING, NUMBER, BOOLEAN, NULL, UNDEFINED, SYMBOL, BIGINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

const bigNumber = 544482123465445432121321n


// REFERENCE NON-PRIMITIVE DATATYPES MEMORY MAI REFERENCE DIRECTLY ALLOCATE
// ARRAY, OBJECTS


const heros = ["Spiderman", "Batman", "Superman"]


let myObj =  

{
    name: "Saad",
    age: 26,
    
}

const myFunction = function (){
    console.log("Hello World");
}

console.log(typeof anotherID);

// TO MASTER JS, MASTER OBJECTS and WEB EVENTS

// +++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive) Copy of variable, Heap Memory (Non-Primitive) Reference of Original Value

// let myYoutubeName = "Thoughts By Saad"
// let anotherName = myYoutubeName
// anotherName = "TravelgateWorldwide"

// console.log(myYoutubeName);
// console.log(anotherName);

let userOne = {
    
    email: "user@google.com",
    upi: "user@ubl"
}

let userTwo = userOne

userTwo.email = "i.saadsalman7@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);



