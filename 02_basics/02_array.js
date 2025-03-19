const marvel_herose = ["thor", "ironman", "spiderman"]
const dc_herose = ["batman", "superman", "flash"]

// marvel_herose.push(dc_herose);
// console.log(marvel_herose);
// console.log(marvel_herose[3][1]);

// const allHerose = marvel_herose.concat(dc_herose);
// console.log(allHerose);

// const allNewHerose = [...marvel_herose, ...dc_herose];
// console.log(allNewHerose);

// const arraywithinarray = [1,2,3,4,[5,6,7,],8,["a","b","c",["z","y","z"]]];
// const flatarray = arraywithinarray.flat(Infinity);
// console.log(flatarray);

console.log(Array.isArray("sidhappa"));// false
console.log(Array.from("sidhappa"));
console.log(Array.from({name : "sidhappa"}));   // result : empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

