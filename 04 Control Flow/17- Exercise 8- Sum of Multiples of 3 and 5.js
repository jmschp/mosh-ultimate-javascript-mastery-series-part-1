// 17- Exercise 8- Sum of Multiples of 3 and 5

/*
Create a function that will sum all the multiples of 3 and 5 from 0 the limit argument passed.
*/

function sum(limit) {
    let result = 0;
    for (i = 0; i <= limit; i++) {
        if (i * 3 <= 10) result += (i * 3)
        if (i * 5 <= 10) result += (i * 5)
    }
    return result
}



// Mosh solution
function sum(limit) {
    let sum = 0;
    
    for (let i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
        sum += i
    }
    
    return sum
}


console.log(sum(10))