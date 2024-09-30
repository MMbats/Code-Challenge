
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        const demeritPoints = Math.floor(excessSpeed / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

//  user for input
const speed = prompt("Enter the car speed (in km/h):");

//  input to number
const numericSpeed = parseInt(speed);

// Check speed and calculate points
checkSpeed(numericSpeed);
