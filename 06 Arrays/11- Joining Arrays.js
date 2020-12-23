// 11- Joining Arrays

/*
The "join()" method joins the elements array into a string.

The join method takes one optional parameter, a string that will be used to join each item from the array.

Syntax
[].join()
*/

const numbers = [1, 2, 3];
const numbersJoined = numbers.join(';');
console.log(numbersJoined);
console.log(typeof numbersJoined); // The "joined()" method returns a string.

// The "split()" method goes hand in hand With the "join()" method.
// It converts a string to an array.

const message = "This is a message";
const messageArray = message.split(' ');
console.log(messageArray);

const urlSlugExample = messageArray.join('-');
console.log(urlSlugExample);
// This technic is particular useful to build url slugs.
// For example when we want to convert a blog post title to the url.