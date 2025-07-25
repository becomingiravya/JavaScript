//types of datatypes : primitive and reference(non-primitive)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// Javascript is a statically typed language or dynamically typed language?
// JavaScript is a dynamically typed language. This means that variable types are determined at runtime,
//  and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;             // this 
let userEmail2 = undefined // and this are both same


// Symbol is a type of datatype which is used if you want to give unique values 
const id  = Symbol('123')         // even though this 
const anotherId = Symbol('123')  // and this has the same value, they are not the same.

//console.log(id === anotherId);


const bigNumber = 3438490293012479234723947293479247290840234723462347294802n

// reference (Non-primitive)

// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraaj", "doga"]
let myObj = {
    name: "lumishka",
    age: 19
}

const myFunction = function() {
     console.log("hello world")
}

console.log(typeof bigNumber)
console.log(typeof outsideTemp)
console.log(typeof myFunction)
console.log(typeof heroes)
console.log(typeof anotherId)