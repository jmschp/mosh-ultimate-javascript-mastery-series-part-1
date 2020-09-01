// 05 Objects

/*
Reference types
    Objects
    Array
    Function

An object in JavaScript or other programing languages is like an object in real life, something that has propreties
Like a person that as name, age, height.
When we are dealing with multiple related variable, we can put this variable inside an object.


To declare an object we create a variable, or a constant if we don't wan't the propreties to change, and set it to {}
let object = {}
This creates an oject literal.
Between the {} we can add one or more key/value pairs.
*/
let person = {
    name: 'Miguel',
    age: 37,
    height: 1.80
};

console.log(person);

// We have to ways to work with this properties

// With the Dot Notation, we can read o write to a propertie
person.name = 'Mosh'
console.log(person.name)

// With Bracket Notation
person['name'] // We pass a string that determines the name of the target propretie.
console.log(person['name'])

let selection = "age"
person[selection] // with the Bracket Notation we can use a variable wich holds a string with the property name we want to access.
console.log(person[selection])


person[selection]  = 40
console.log(person[selection])