// 01- Basics

/*
In javascript objects are collections of key value pairs.
If we have properties that are highly related we want to encapsulate then inside of an object

For example, if we are building an app to draw different shapes:
In the case a circle
*/

let radius = 1;
let x = 10;
let y = 20;

/*
Instead of defining a bunch of variables like the one above, we should put this variables inside of an object. And then we can use this object anywhere in our program.
In an object the values can be of any type in JavaScript.
The purpose of an object is to group related variables, and quite often we also have functions that operate in these variables.
*/

const circle = {
    radius: 1,
    location: {
        x: 10,
        y: 20
    },
    isVisible: true,
    draw: function() {
        console.log('Draw')
    },
    move: function() {
        console.log('Move')
    }
};

circle.draw();

/*
This is object oriented style of programming (Object Oriented Programing - OOP).
This is basically a style of programming that were a program is a collections of objects that talk to each other to perform some functionality.

In programing terms if a functions is part of an object we call that function a method.
*/