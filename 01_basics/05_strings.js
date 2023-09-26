const name = "Saad"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my Repository is ${repoCount}`);

const gameName = new String('Saad-Salman')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt([8]));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newString1 = "      Saaad    "
console.log(newString1);
console.log(newString1.trim());

const url = "https:www.google.com/saad%20salman"

console.log(url.replace('%20','-'))

console.log(url.includes('google'));

console.log(gameName.split('-'));



