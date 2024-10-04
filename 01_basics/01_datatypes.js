"use_strict"; // to treat all JS code as new JS version

// data types

// number / integer

let rollNumber = 18;

// decimal / float

let price = 99.34;

// boolean

let isAuthorized = true;

// Object

let car = {
    name: "Mercedes-Benz",
    model: "G Class",
    price: 9999999999
}

// null : null is a data type in the javascript which defined there is no value.

let firstName = null


// console.log(typeof firstName);   // output: object

// undefined

let lastName;

// console.log(lastName) // output: undefined


// string

let surName = "Patil"

console.table([ rollNumber , price  , isAuthorized , firstName , lastName , surName ])

console.log(car)



// symbol : unique. used in the react component to find which component is unique.


// to get the type of the variable use the typeof operator