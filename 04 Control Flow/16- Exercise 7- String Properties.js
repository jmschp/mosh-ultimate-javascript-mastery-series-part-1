// 16- Exercise 7- String Properties

/*
Create function "showProperties()"".
Pass an object to that function, and it should and is should display all the properties of the object that are of type string.
*/

function showProperties(object) {
    for (let property in object) {
        if (typeof object[property] === 'string')
            console.log(property, object[property]);
    }
}

const movie = {
    title: "a",
    releaseYear: 2018,
    rating: 4.5,
    director: "b"
}

showProperties(movie)