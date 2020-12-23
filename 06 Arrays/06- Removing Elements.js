// 06- Removing Elements


const numbers = [1, 2, 3, 4, 5, 6]

// Remove the last element
const last = numbers.pop(); // The push method removes the last element and returns it.
console.log(last);
console.log(numbers);

// Remove the first element
const first = numbers.shift();
console.log(first);
console.log(numbers);

// Remove one or more elements from the middle
const elementsRemoved = numbers.splice(1, 2); // With the "splice()", it will remove n elements counting from the indicated index.
console.log(elementsRemoved);
console.log(numbers);
