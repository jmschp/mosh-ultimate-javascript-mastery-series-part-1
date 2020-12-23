// 13- Template Literals

/*
Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.
Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a tagged template. In that case, the tag expression (usually a function) gets called with the template literal, which you can then manipulate before outputting.
To escape a backtick in a template literal, put a backslash (\) before the backtick.
Syntax
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag`string text ${expression} string text`
*/

let name = 'Miguel'

const message = 
` Hello ${name},

This is a message sent using template literals.`;

console.log(message);
