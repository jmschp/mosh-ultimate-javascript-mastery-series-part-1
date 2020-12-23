// 20 - Exercise 4 - Moving an Element

const numbers = [1, 2, 3, 4];

const output = move(numbers, 0, 4);
console.log(output);
console.log(numbers);

function move(array, index, offset) {
    const output = [...array];
    const itemToMove = output.splice(index, 1)[0];
    const positionToInsert = index + offset;
    if (positionToInsert >= 0 && positionToInsert <= numbers.length) {
        output.splice(positionToInsert, 0, itemToMove);
        return output;
    } else {
        console.error('Invalid offset');
    }

}


// Mosh solution

function moveMosh(array, index, offset) {
    const position = index + offset;
    if (position >= array.length || position < 0) {
        console.error('Invalid offset');
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}
