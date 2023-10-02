// console.log("S");
// console.log("A");
// console.log("A");
// console.log("D");


// function myName(params) {

// console.log("S");
// console.log("A");
// console.log("A");
// console.log("D");
    
// }

//myName()

// function addTwoNumbers(number1, number2) { //parameters when defining

//     console.log(number1 + number2);
      
// }

function addTwoNumbers(number1, number2) { //parameters when defining

    // let result = number1 + number2
    // return result

    return  number1 + number2

}

const result = addTwoNumbers(154, 10) // arguements in calling function

// console.log("Result:", result);

function loginUserMessage(username = "Saad") {

    if (!username) {
        console.log("Please Enter A Username");
        return
    }

    return `${username} Just Logged in`
    
}

console.log(loginUserMessage("Salman"));

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 700, 2000));

const user = {

    username: "Saad",
    price: 1000
}

function handleObject(anyObject) {

    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

handleObject({

    username: "Salman",
    price: 300
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray) {

    return getArray[1]
    
}

console.log(returnSecondValue([200, 400, 500, 600]));