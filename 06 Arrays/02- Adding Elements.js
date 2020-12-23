// 02- Adding Elements


const numbers = [3, 4];
console.log(numbers);

// Adding elements to the end.
numbers.push(5, 6); // We can pass one or more arguments and they will be placed in the end of the array.
console.log(numbers);

// Adding elements to beginning.
numbers.unshift(1, 2); // This methods pushes the existing elements to the right and adds new elements in the beginning
console.log(numbers);

// Adding elements in the middle.
numbers.splice(2, 0, 'a', 'b', 'c');
// The first parameter (type number) is the starting position (index).
// The second parameter (type number) is a delete count. How many we want to delete.
// The third parameters are the items we want to add.
console.log(numbers);
