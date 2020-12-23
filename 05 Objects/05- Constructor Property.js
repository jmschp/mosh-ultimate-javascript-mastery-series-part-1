// 05- Constructor Property

/*
Every object in JavaScript has a property called "constructor" that references the function that was used to create that objects
*/

// Factory Function
function createCircle (radius, x, y) {
    return {
        radius, // in JavaScript if our key and value are the same "radius: radius", we can make our code sorter and simply remove the value.
        location: {
            x,
            y
        },
        draw() { // For functions we don't need the full function syntax to define the function.
            console.log('Draw')
        },
        move() {
            console.log('Move')
        },
    };
}

const circleFactory = createCircle(1, 2, 3);
console.log(circleFactory.constructor);

/*
[Function: Object] In this case it returns a built-in constructor function "Object()".
When we create an object using the object literal syntax, internally JavaScript uses the "Object()"
let x = {};  JavaScript will do this:
let x = new Object()
*/


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function draw() {
        console.log('Draw')
    }
}

const circleConstructor = new Circle(1);
console.log(circleConstructor.constructor); // [Function: Circle] This returns our circle function that we use to create this object.
