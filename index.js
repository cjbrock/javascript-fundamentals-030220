// var a = "a" // can be redeclared, can be reassigned, can be hoisted
// let b =  "b" // can't be redeclared, can be reassigned, cannot be hoisted
// const c = "c" // can't be redeclared, cannot be reassigned, cannot be hoisted

// console.log(b)


// String interpolation

// const hello = "hi there"
// const greeting = `${hello} World` + "!"

// console.log(greeting)

// Functions

// 1. Regular function
// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// function hello(){
//   console.log(greeting)
// }

// 2. Constant declaration of a function (can also use let)
// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// const hello = function(){
//   console.log(greeting)
// }

// 3. Arrow functions!

// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// const hello = () => {
//   console.log(greeting)
// }



// Hoisting!

// this works!

// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// hello()

// function hello(){
//   console.log(greeting)
// }

// this doesn't

// const hi = "hi there"
// const greeting = `${hi} World` + "!"

// hello()

// const hello = function(){
//   console.log(greeting)
// }

// Arguments

// const hi = "hi there"
// const greeting = `${hi} `

// const hello = function(name){
//   console.log(greeting + name + "!")
// }

// hello("Bryant")

// Default Arguments

// const hi = "hi there"
// const greeting = `${hi} `

// const hello = function(name = "Maynard"){
//   console.log(greeting + name + "!")
// }

// hello("Gavin")
// hello()

// JavaScript ODDNESS

// const hi = "hi there"
// const greeting = `${hi} `

// const hello = function(name = "Maynard"){
//   console.log(greeting + name + "!")
// }

// hello("Gavin", "Lialah", "Stephen", "Jessica")

// Return values

// const hi = "hi there"
// const greeting = `${hi} `

// const hello = function(name = "Maynard"){
//   return(greeting + name + "!")
// }

// console.log(hello("Jarbi"))
// const may = hello()


// how to do an implicit return in JS? The only way that you can get around using the return keyword is by using parentheses in an arrow function. This makes JS think that it's a single line function, and it automatically returns it. 

// const hi = "hi there"
// const greeting = `${hi} `

// const hello = name => (greeting + name + "!")

// const t = hello("Terrence")


// 7. Datatypes

// Primitive datatypes (base level, immutable, pass by value)
  // Number
  // String
  // Undefined
  // Null
  // Symbol
  // Boolean

// Object Datatypes (higher level, pass by reference)
  // Function
  // Array
  // Objects

// What evaluates to false?
  // false
  // falsy
  // undefined
  //null
  // 0
  // nan
  // ""

// Can't change small things about it - i.e. change the first letter of a string to a capital without changing it to an array first.

// const hi = "hi there"
// hi[0] = "H"
// console.log(hi)

// const arr = ["h", "i", "t", "h", "e", "r", "e"]
// arr[0] = "H"
// console.log(arr)

// Comparisons

// const hi = "hi there"
// const hi2 = "hi there"
// console.log(hi === hi2) - will be true


// const arr = ["h", "i", "t", "h", "e", "r", "e"]
// const arr2 = ["h", "i", "t", "h", "e", "r", "e"]
// console.log(arr == arr2) - will be false
// difference in pass by value vs pass by reference

// Conditionals
// If statement
// const fizzbuzz = function(){
//   for (let i=1; i<=100; i++) {
//     if (i%3 == 0 && i%5 == 0){
//       console.log(i + " FizzBuzz")
//     } else if (i % 3 == 0) {
//       console.log(i + " Fizz")
//     } else if (i % 5 == 0) {
//       console.log(i + " Buzz")
//     } else {
//       console.log(i)
//     }
//   }
// }

// fizzbuzz()

// const switchbuzz = function(){
//   for (let i = 1; i <= 100; i++) {
//     switch (true){
//         case (i % 3 == 0 && i % 5 == 0):{
//             console.log(i + " SwitchBuzz");
//             break;
//         }
//         case (i % 3 == 0 ):{
//             console.log(i + " Switch");
//             break;
//         }
//         case (i % 5 == 0 ):{
//             console.log(i + " Buzz");
//             break;
//         }
//         default:{
//             console.log(i);
//         }
//     }
//  }
// }

// switchbuzz()

// Arrays!

const nums = [1,2,3,4,5]

// destructive:

// .push -> add an element to end of array 
// .unshift -> add an element to front of array
// .pop -> removes last element
// .shift -> removes first element
// .splice -> removes elements between specified indexes

const removed = nums.splice(1,3)

// console.log(removed)

// non-destructive:
  // We use the ... or spread operator in order to copy and paste elements of an existing array into a "new" array

  let array = ['hello']
  let array2 = [...array, 'world']
  let array3 = ['world', ...array]
  // array is still ['hello']
  // array2 is ['hello', 'world']
  // array3 is ['world', 'hello']

  let numberList = [0,1,2,3,4,5,6]

  // slice allows you to slice our a new array from an older array
  numberList.slice(1, 5) // returns [1,2,3,4,5]
  numberList // is still [0,1,2,3,4,5,6]


  // Objects

//   Objects in Javascript are similiar to hashes in ruby with key / value pairs. For example:

  let todd = {
    name: "todd",
    age: 21, 
    profession: "Doctor of psychology and assistant dean of grad students!"
  }

// However one added thing that javascript objects have that ruby hashes don't, are function definition values.

  let alex = {
    name: "todd",
    age: 21, 
    profession: "Doctor of psychology and assistant dean of grad students!",
    description: function() {
      console.log(`Hello my name is ${this.name}, i am ${this.age} years old, and my profession is ${this.profession}`)
    }
  }

  todd.description() // logs Hello my name is todd, i am 21 years old, and my profession is Doctor of psychology and assistant dean of grad students!