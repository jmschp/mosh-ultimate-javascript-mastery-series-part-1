// 19- Exercise 10- Stars


function showStars(rows) {
    let pattern = '';
    for (let i = 1; i <= rows; i++) {
        pattern += '*';
        console.log(pattern);
    }
}


//Mosh solution:
function showStars(rows) {
    for (let row = 1; row <= rows; row++) {
        let pattern = '';
        for (let i = 0; i < row; i++) {
            pattern += '*';
        }
        console.log(pattern)
    }
}

showStars(5)