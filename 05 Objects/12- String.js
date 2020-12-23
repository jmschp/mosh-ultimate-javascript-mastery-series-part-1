// 12- String

/*
String Object
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String

*/

// String Primitive
const message1 = '   hi, this is a message   ';
console.log(typeof message1); // Returns "string".

// String Object
const message2 = new String('hi, this is another message');
console.log(typeof message2); // Returns "object".

// Although primitives do not have method and properties, but when we use the dot notations with a string primitive JavaScript engine wraps it with a string objects.
// Thats why we have access to the method and properties of the string object.

// Length property
console.log(message1.length);
// Returns the number of characters, in this case 21.

// Bracket notation to access a character by its index.
console.log(message1[4]); // Returns "t".

// To check if a string includes certain characters.
console.log(message1.includes("this")); // Return a boolean, in this case true.
console.log(message1.includes("hello")); // Returns false.

// To check how th string starts.
console.log(message1.startsWith('hi')); // Return a boolean, in this case true.
console.log(message1.startsWith('Hi')); // Return false.

// To check how the string ends.
console.log(message1.endsWith('ge')); // Return a boolean, in this case true.
console.log(message1.endsWith('end')); // Returns false

// To find the index of a given character.
console.log(message1.indexOf('is')); // Returns the index number.
console.log(message1.indexOf('not')); // Returns -1 if the characters are not in the string.

// To replace the string
console.log(message1.replace('hi', 'hello')) // It returns a new string and does not modify the original one.

// Uppercase
console.log(message1.toUpperCase()) // Returns a new string all uppercase.

// Lowercase 
console.log(message1.toLowerCase()) // Returns a new string all characters lowercase.

// Trim white spaces.
console.log(message1.trim()) // Removes white spaces in the beginning and end of the string. And returns as new message without altering the original.
console.log(message1.trimLeft())
console.log(message1.trimRight())

// Split method to convert string to array.
console.log(message1.split(' ')) // As an argument we specify the character to split the string.

/*
Escape notation
Special characters can be encoded using escape notation:

Code                Output
\XXX    --->    ISO-8859-1 character / Unicode code point between U+0000 and U+00FF
(where XXX is 1–3 octal digits; range of 0–377)

\'      --->        single quote
\"      --->        double quote
\\      --->        backslash
\n      --->        new line
\r      --->        carriage return
\v      --->        vertical tab
\t      --->        tab
\b      --->        backspace
\f      --->        form feed

\uXXXX  --->        UTF-16 code unit / Unicode code point between U+0000 and U+FFFF
(where XXXX is 4 hex digits; range of 0x0000–0xFFFF)

\u{X} ...
\u{XXXXXX}    --->        UTF-32 code unit / Unicode code point between U+0000 and U+10FFFF
(where X…XXXXXX is 1–6 hex digits; range of 0x0–0x10FFFF)	

\xXX    --->        ISO-8859-1 character / Unicode code point between U+0000 and U+00FF
(where XX is 2 hex digits; range of 0x00–0xFF)	

*/
