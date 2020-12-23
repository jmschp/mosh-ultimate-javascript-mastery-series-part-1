// 14- Exercise 5- Even and Odd Numbers


/*
Create function "showNumbers()"
Accepts a number as parameter, it will return all the numbers up to that number telling if it is odd or even
Example:
If we pass to that function 3 as argument, it should return the following.
0 "EVEN"
1 "ODD"
2 "EVEN"
3 "ODD"
*/

function showNumbers(limit) {
    for (i = 0; i < limit + 1; i++) {
        if (i % 2 === 0) console.log(i , "EVEN")
        else console.log(i , "ODD")
    }
}


// Mosh solution for a cleaner code
function showNumbers(limit) {
    for (i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? "EVEN" : "ODD"
        console.log(i, message)
    }
}
