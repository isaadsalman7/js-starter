// Immediately Invoked Function Expressions

(function chai(params) {
    console.log(`DB CONNECTED`);
    
})();

( function chaiTwo() { // Named IIFE
    console.log(`DB CONNECTED TWO`);
} )();

( (name) => {  // Unnamed IIFE
    console.log(`DB CONNECTED THREE ${name}`);
} )('SAAD');