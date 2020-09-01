// 15- Exercise 6- Count Truthy

/*
Create function "countTruthy()"
That will count truthy values in an array.
*/

function countTruthy(array) {
    let counter = 0
    for (item  of array) {
        if (item !== false && item !== undefined && item !== null && item !== 0 && item !== '' && item !== NaN)
            counter++;
    }
    return counter
}

const myArray = [1, 2, 0, 3, undefined, null, 5, 7, 'a', 'fsf']

const result = countTruthy(myArray)
console.log(result)


// Mosh solution
function countTruthy(array) {
    let count = 0
    for (let value of array) {
        if (value)
            count++;
    }
    return count
}