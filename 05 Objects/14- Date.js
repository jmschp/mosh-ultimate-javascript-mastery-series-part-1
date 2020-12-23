// 14- Date

/*
JavaScript Date objects represent a single moment in time in a platform-independent format.
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

Constructor
Date()
Creates a new Date object.

Creates a JavaScript Date instance that represents a single moment in time in a platform-independent format.
Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.

Syntax
new Date()
new Date(value)
new Date(dateString)
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]])
*/

const dateNow = new Date(); // Using the date without any parameters returns the current date.
console.log(dateNow);

const date1 = new Date('September 15 2020')
console.log(date1);

let date2 = new Date(2020, 0, 11, 9, 0); // Month is 0 based indexed
console.log(date2)

// Date Object have several "get" and "set" methods.

console.log(dateNow.getDate()); // Get the day of the month.

console.log(dateNow.setFullYear(2029)); // to set to a different date.

console.log(dateNow.toDateString()); // Converts date object to string.

console.log(dateNow.toTimeString()); // Return the time component of the date object.

console.log(dateNow.toISOString()); // Converts to a standard ISO format commonly used in web applications.