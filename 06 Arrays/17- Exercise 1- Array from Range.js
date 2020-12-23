// 17- Exercise 1- Array from Range


function arrayFromRange(min, max) {
    const numbersArray = new Array();
    for(let i = min; i <= max; i++) {
        numbersArray .push(i);
    }
    return numbersArray;
}

const numbers = arrayFromRange(-10, -0)

console.log(numbers);