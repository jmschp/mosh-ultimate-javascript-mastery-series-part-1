// 19- Exercise 3- Except


function except(array, excluded) {
    const output = [];
    array.forEach(element => {
        if (!excluded.includes(element)) {
            output.push(element);
        }
    });
    return output;
}

const numbers = [1, 1, 2, 3, 4, 1, 1];

const newArray = except(numbers, [1, 3, 4]);
console.log(newArray);
