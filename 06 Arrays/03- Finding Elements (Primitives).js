// 03- Finding Elements (Primitives)


const numbers = [1, 2, 3, 4, 1, 6, 2];

console.log(numbers.indexOf(1));
console.log(numbers.indexOf('a'));
/*
The "indexOf()" takes two parameters:
    The item we are looking for
    The index to start from (optional paramter)
This method will return the index of the first occurrence of that item.
In case the item is not found it will return "-1".
*/

console.log(numbers.lastIndexOf(1));
/*
The "lastIndexOf()" takes two parameters:
    The item we are looking for
    The index to start from (optional paramter)
This method will return the index of the last occurrence of that item.
In case the item is not found it will return "-1".
*/


// To verify if a given elements exist in an array
console.log(numbers.indexOf(1) !== -1); // This expression will return true or false. Depending if the element exist in the array.

// This a new better method to achieve the same thing.
console.log(numbers.includes(1));
console.log(numbers.includes('a'));