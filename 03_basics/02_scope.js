// var c = 300
let a = 300

if (true) {

    let a = 10
    const b = 20
    // c = 30  
    // console.log("Inner :", a);
    
}


// console.log(a);
// console.log(b);
// console.log(a);

function one() {

    const username = "Saad"

    function two() {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    two ()
}

// one()

if (true) {

    const username = "Saad"
    if (username === "Saad") {
        const website = "Youtube"
        // console.log(username + website);
    }
//   console.log(website);  
} 
// console.log(username);


// ++++++ INTERESTING +++++++++++

console.log(addOne(5)); 

function addOne(num) {
    return num + 1
    
}


const addTwo = function(num) {

    return num + 2
    
}

addTwo(5)