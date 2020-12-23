// 08- Enumerating Properties of an Object


/*
There are different ways to iterate over the properties of an object.
We saw the for loops
*/

const circle = {
    radius: 1,
    draw() {
        console.log('Draw');
    }
}

// Using the for..in loop to get the properties and values of an object
for (let key in circle) {
    console.log(key, circle[key]);
}

for (let key of Object.keys(circle)) { // The "Object.keys()" method will return an array of strings with the object properties.
    console.log(key);
}

for (let entry of Object.entries(circle)) { // The "Object.entries()" method will return an array with the object key value pair.
    console.log(entry);
}

if ('radius' in circle) console.log('Yes') // With the in operator we can check if a given property exists in an object.