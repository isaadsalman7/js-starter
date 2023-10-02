const user = {
    username: "Saad",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to this website`);
        console.log(this);
    }

}

// console.log(user.welcomeMessage);
// user.welcomeMessage()
// user.username = "Bumrah"
// user.welcomeMessage()

// console.log(this);

// function chai(params) {

//     let username = "Saad"
//     console.log(this.username);
    
// }

// // console.log(chai);
// chai()

// const chai = function () {
    
//     let username = "Saad"
//     console.log(this.username);
// }

const chai = () => {
    
    let username = "Saad"
    console.log(this);
}
// chai()
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => (num1 + num2) // Implicit Return

const addTwo = (num1, num2) => ({username: "Saad"})


console.log(addTwo(3, 4));

const myArray = [2, 3, 5, 7, 9]

// myArray.forEach()