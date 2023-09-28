const marvel = ["Thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Batman", "Aquaman"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// marvel.concat(dc)
// const league = marvel.concat(dc)
// console.log(league);

const justice_league = [...marvel, ...dc]

// console.log(justice_league);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10, [11, 12]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Saad"));
console.log(Array.from("Saad"));
console.log(Array.from({name: "Saad"})); //Interesting


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

