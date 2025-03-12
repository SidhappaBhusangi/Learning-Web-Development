const name = "sidhappa";
const repoCount = 50;

// console.log(name + repoCount + " value"); not usable in modern coding

// concatenating method
console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //backtick "`"
//result : hello my name is sidhappa (name variable) and my repo count (repoCount variable) is 50


const game = new String ("Sidhappa")
console.log(game.__proto__);

// console.log(game.toUpperCase()); // result "SIDHAPPA" for to work this you should first import proto)
// console.log(game.charAt(2));
// console.log(game.indexOf('S'));

//study methods of strings on mdn

// const newString = game.substring(0, 4)
// console.log(newString)

// const anotherString = game.slice(-8, -4);
// console.log(anotherString)

const newStringOne = "   sidhappaB"
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "google.com"
console.log(url.replace("com", "in"))

console.log(url.includes("com"))
console.log(url)
