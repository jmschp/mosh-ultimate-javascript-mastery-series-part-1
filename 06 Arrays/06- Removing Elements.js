// 06- Removing Elements


const numbers = [1, 2, 3, 4, 5, 6]

// Remove the last element
// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const last = numbers.pop();
console.log(last);
console.log(numbers);

// Remove the first element
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const first = numbers.shift();
console.log(first);
console.log(numbers);

// Remove one or more elements from the middle
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.


const elementsRemoved = numbers.splice(1, 2); // With the "splice()", it will remove n elements counting from the indicated index.
console.log(elementsRemoved);
console.log(numbers);
