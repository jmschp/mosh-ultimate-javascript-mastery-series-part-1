// 18- Exercise 9- Grade

/*
Calculate the grade of the student
First calculate the average from an array of grade 
if:
01-59   ---> F
60-69   ---> D
70-79   ---> C
80-89   ---> B
90-100  ---> A
*/

function calculateGrade(marks) {
    let average = 0;
    for (mark of marks)
        average += mark / marks.length;
    if (average >= 0 && average < 60) return 'F'
    else if (average >= 60 && average < 70) return 'D'
    else if (average >= 70 && average < 80) return 'C'
    else if (average >= 80 && average < 90) return 'B'
    else return 'A'
}

const marks = [80, 80, 50];

let result = calculateGrade(marks)
console.log(result)

// Mosh solution
function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}


// Mosh solution for cleaner code to respect the Single Responsibility Principle
// We should separate our function in smaller functions each one with its on purpose.
// In the case separate de average calculation from the grade. 

function calculateAverage(array) {
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

function calculateGrade(marks) {
    const average = calculateAverage(marks);
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}