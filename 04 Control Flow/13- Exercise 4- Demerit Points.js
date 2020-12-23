// 13- Exercise 4- Demerit Points


/*
Implement functions "checkSpeed()", it take one parameter, the speed of teh car.
Speed Limit <= 70 ---> display ok message
For every 5 km/h above the speed limit, they are going to get 1 point
If speed above 180 km/h ---> Points >= 12 ---> License suspended
*/


// My solution
function checkSpeed(speed) {
    let points;
    if (speed < 75) return "Ok";
    else if (speed >= 75 && speed < 180) {
        points = (speed - 70) / 5;
        return points;
    }
    return "License suspended";
}


let result = checkSpeed(130)
console.log(result)


// Mosh solution
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint)
        console.log("Ok");
    else {
        const points  = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log("License suspended");
        else
            console.log('Points', points);
    }
}

// For a better cleaner looking code
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5
    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log("License suspended");
    else
        console.log('Points', points);
}