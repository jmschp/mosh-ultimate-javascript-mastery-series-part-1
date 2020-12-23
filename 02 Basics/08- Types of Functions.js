// 08 Types of Functions


/*
We have to types of functions:
    Performs a task
    Calculates value
*/

// Performs a task
function greetPerson(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}


// Calculates value
function square(number) {
    return number * number;
}

// This function is calculates a value and returning it. So we return the value to how ever is calling the function.

let number = square(2)
console.log(number)