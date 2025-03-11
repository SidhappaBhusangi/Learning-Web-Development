// primitive data types

// 7 types = string, number, boolean, null, undefined, symbol, BigInt



// non-premitive or reference data type
// Array, Objects, Function


// const score = 33  here we are not set type of data i.e. 33 is number. We type 33, java will assume 33 is number data type so we can say java is dynamic typed language not a static typed langauage.

const score = 100; //number
const Name = "Sidhappa" //string
const isLoggedIn = false //boolean
let outsideTemp = null //null
let cityName; //undefined
let bigNumber = 1111111222214455n //BigInt

const myFriends = ["Sagar","Ram","Ajay"]  //Array

//object data type
const myself = {
    Name :"Sidhappa",
    Age : 33,
    City : "Pune",
    Mobile : 8999348260
}


//function data type
const sumFormula = function(num1, num2){
    sum = num1 + num2
    console.log(sum)
}

// let sum1 = sumFormula(10,10)

// console.log(sum1);