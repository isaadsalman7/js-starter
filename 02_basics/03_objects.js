// singleton if made from constructor
// Object.create Constructor method

// object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Saad",
    "full name": "Saad Salman",
    
    [mySym]: "myKey1",
    age: 18,
    location: "Sialkot",
    email: "saad@google.com",
    isLoggedIn: false,
    lastLoggedinDays: ["Sunday", "Monday"]
    
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// // console.log(JsUser.mySym);
// // console.log(typeof JsUser.mySym);
// console.log(typeof [JsUser]);

JsUser.email = "saad@gpt.com"
// Object.freeze(JsUser)

JsUser.email = "saad@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){

    console.log("Hello JS User");
}

console.log(JsUser.greeting);


JsUser.greeting2 = function(){

    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

