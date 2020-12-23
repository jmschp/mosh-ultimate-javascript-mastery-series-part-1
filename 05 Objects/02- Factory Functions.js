// 02- Factory Functions

/*
In the last lesson we use the object literal syntax to create ann object. But in case we need to create more than one of teh same object.
For a better implementation we use Factory and Constructor Functions.
In this lesson we are looking at Factory Functions.
Just like a factory producing products, this factory functions produce objects.
*/

// Create a new function and copy the object in it
function createCircle () {
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
    return circle
}

// We can improve syntax and make it shorter, and we can pass a parameter to the function.
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

/*
With this Factory Function we have define our logic only in one place, and the we can call this function, in our program and pass to it different arguments.
In case of a bug in the future there is only one place to modify.
*/

const circle1 = createCircle(1, 2, 3)
circle1.draw()