// 05 Objects

/*
Reference types
    Objects
    Array
    Function

An object in JavaScript or other programing languages is like an object in real life, something that has properties
Like a person that as name, age, height.
When we are dealing with multiple related variable, we can put this variable inside an object.


To declare an object we create a variable, or a constant if we don't want the properties to change, and set it to {}
let object = {}
This creates an object literal.
Between the {} we can add one or more key/value pairs.
*/
let person = {
    name: 'Miguel',
    age: 37,
    height: 1.80
};

console.log(person);

// We have to ways to work with this properties

// With the Dot Notation, we can read o write to a property
person.name = 'Mosh'
console.log(person.name)

// With Bracket Notation
person['name'] // We pass a string that determines the name of the target property.
console.log(person['name'])

let selection = "age"
person[selection] // with the Bracket Notation we can use a variable which holds a string with the property name we want to access.
console.log(person[selection])


person[selection]  = 40
console.log(person[selection])