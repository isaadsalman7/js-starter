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