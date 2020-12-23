// 21 - Exercise 5 - Count Occurrences

const numbers = [1, 2, 3, 4, 1, 1];

const count = countOccurrences(numbers, 1);
// console.log(count);

const countReduce = countOccurrencesReduce(numbers, 1);
console.log(countReduce);

function countOccurrences(array, searchElement) {
    let counter = 0;
    array.forEach(element => {
        if (element === searchElement) counter += 1;
    });
    return counter;
}

function countOccurrencesReduce(array, searchElement) {
    let counter = array.reduce((accumulator, currentValue) => {
        if (currentValue === searchElement) {
            accumulator += 1
            return accumulator;
        } else {
            return accumulator;
        }
    }, 0);
    return counter
}

// MoshSolution

function countOccurrencesMosh(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0
        return accumulator + occurrence;
    }, 0);
}