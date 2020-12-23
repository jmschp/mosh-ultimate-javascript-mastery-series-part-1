// 22 - Exercise 6 - Get Max

const numbers = [1, 5, 2, 3, 4];

const max = getMaxMosh(numbers);
console.log(max);

function getMax(array) {
    return array.reduce((accumulator, currentValue) => {
        const max = (accumulator > currentValue) ? accumulator : currentValue
        return max
    }, undefined);
}

// Mosh solution

function getMaxMosh(array) {
    if (array.length ===0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);
}