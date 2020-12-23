// 05- Equality Operators

/*
As we seen in the last lectures we have different equality operators
    ==	equal to	
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type	
*/

// Strict Equality operator (checks for Type + Value) 
// Ina strict equality operator both values have to be of the same type and mus have the same value
console.log(1 === 1) // This returns true because we are comparing the same type to the same value
console.log('1' === 1) // This returns false because we are comparing different types, a string to number.


// Lose Equality operator (checks for Value)
console.log(1 == 1) // Here we get true
console.log('1' == 1) // Here we also get true. Because this operator will look at the first part and see a string, then it will convert the second part to a string, and if they became the same value will return true.
console.log(true == 1) // Here we get true as well. Because when we convert 1 to boolean it will be true 
console.log(false === 1) // Here we ge false.
console.log(false == 0) // Here we also get true because 0 is a false value.
