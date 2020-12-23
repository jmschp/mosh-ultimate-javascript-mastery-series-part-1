// 15- Mapping an Array


/*
With the ".map()" method we can map each item in the arry to something else.
This method takes a callback function as an argument, and returns a new array.
It does not modify the original array.

This method is useful, for example, to convert elements in an array to html markup.  
*/

const numbers = [1, -2, 2, -1, 3, 4];

let mappedToHtml = numbers.map(function(value) {
    return '<li>' + value + '</li>'; // We convert each element to html.
});

console.log(mappedToHtml);

const html = '<ul>\n' + mappedToHtml.join('\n   ') + '\n</ul>'; // with the '.join()' method we convert the array to a string.
// I am using the "\n" escape sequence so the html looks well formatted.

console.log(html);

// Chaining different methods is a useful feature.

const filteredToMapped = numbers
    .filter(number => number > 0)
    .map(number => '<li>' + number + '</li>');
/*
In this example chaining the ".filter()" method and then the ".map()" method.
First we filter values greater than 0 and them we map each element to a list html tag.
In this implementation we the arrow function for a cleaner code.
*/

console.log(filteredToMapped);

// Another useful way to use the ".map()" method is to convert the elements to an object.

const mappedToObj = numbers.map(number => ({key: number})); // We set "key" as the key and each element in the array as the value.
console.log(mappedToObj);