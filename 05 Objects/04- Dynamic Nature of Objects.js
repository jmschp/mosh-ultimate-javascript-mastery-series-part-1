// 04- Dynamic Nature of Objects

/*
In JavaScript object are dynamic, once they are created we can add new properties or methods to it.
*/

const circle = {
    radius: 1,
}

circle.color = 'yellow'; // In here we add a new property to the object, in this case color
circle.draw = function() { // Here we add a new method two the object.
    console.log('Draw')
};

console.log(circle);

delete circle.color; // With the "delete" statement we can delete properties or methods.

console.log(circle);