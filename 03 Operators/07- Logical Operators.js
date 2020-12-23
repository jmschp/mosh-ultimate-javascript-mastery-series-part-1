// 07- Logical Operators

/*
Logical operators are used to determine the logic between variables or values. To make decisions on multiple conditions.
These are the logical operators
    &&	(and operator) With the and operator both conditions or operator have to be true.
    ||	(or operator)  With the or operator only one of the conditions has to be true.
    !	(not operator) The not operator converts true to false and vice-versa.
x = 6 and y = 3
(x < 10 && y > 1) is true
(x === 5 || y === 5) is false
!(x === y) is true
*/

// Lets say we want to determine if some one is eligible for a loan, based on is income and credit score.

let hiIncome = false
let goodCreditScore = true

let eligibleForLoan = hiIncome && goodCredit // With and operator "&&" applicant has to have high income and good credit score to be eligible for loan.
console.log(eligibleForLoan)

eligibleForLoan = hiIncome || goodCredit // With or operator "||" applicant has to have high income or good credit score to be eligible for loan. If one of them is true elidible for loan will be true.
console.log(eligibleForLoan)

let applicationRefused = !eligibleForLoan
console.log(applicationRefused)
// With not operator "!" it will convert true to false and false to true.
//So if the applicant is not eligible for loan, meaning "eligibleForLoan = false", is application will be refused meaning "applicationRefused = !eligibleForLoan" will return true.