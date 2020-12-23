// 09- Cloning an Object

/*
In case we want to duplicate anm objects
*/

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
};

const anotherCircle1 = {};

for (let key in circle) {
    anotherCircle1[key] = circle[key];
}
// We could use the for..in loop do duplicate an object like in the example above.
// But there are better ways to do this in modern JavaScript.

// Using the "Object.assign()" method.
const anotherCircle2 = Object.assign({}, circle);
/*
As a target we can pass an empty object, and then one or more source objects.
This method copies the object to the new object and the returns it.
This is the same as teh for..in loop above.
*/

const anotherCircle3 = Object.assign(
    {color: "red"},
    circle
);
// This is the same but in this case we are using an object with one property already in it.


// Using the Spread Operator. Is a more simple way to clone an object.
const anotherCircle4 = {...circle};
