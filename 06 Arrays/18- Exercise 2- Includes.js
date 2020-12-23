// 18- Exercise 2- Includes

function includes(array, searchElement) {
    let output = false;
    array.forEach(element => {
        if (element === searchElement) {
            output = true;
        }
    }); 
    return output;
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(includes(numbers, -3));

// Mosh solution

function includesMosh(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
    return false;
}

console.log(includesMosh(numbers, 3));