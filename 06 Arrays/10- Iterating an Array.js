// 10- Iterating an Array



const numbers = [1, 2, 3, 4, 5, 6]

/*
for...of loop
The for...of statement creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects (e.g., arguments or NodeList), TypedArray, Map, Set, and user-defined iterables.
It invokes a custom iteration hook with statements to be executed for the value of each distinct property of the object.
*/

for (let number of numbers)
    console.log(number);


/*
forEach()
The forEach() method executes a provided function once for each array element.

Syntax
    arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

Parameters
    callback: Function to execute on each element. It accepts between one and three arguments:

    currentValue: The current element being processed in the array.

    index (Optional): The index of currentValue in the array.

    array (Optional): The array forEach() was called upon.
    
    thisArg (Optional): Value to use as this when executing callback.

Return value
    undefined
*/

numbers.forEach(function(number) {
    console.log(number);
});

// The same, but using an Arrow function.
numbers.forEach(number => console.log(number));

// Applying the "index" parameter in to get the index of each element.
numbers.forEach((numbers, index) => console.log(index, numbers));