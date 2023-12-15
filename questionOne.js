
// Question One 

// find out the seat number facing you and the seat type :


//answer code
function findFacingSeat(seatNumber) {

    if (seatNumber < 1 || seatNumber > 108) {
        console.log("Invalid seat number. Please enter a seat number between 1 and 108.");
        return;
    }
    
    
    const compartmentNumber = Math.ceil(seatNumber / 12);

    
    const seatPositionInCompartment = (seatNumber - 1) % 12;

    
    const facingSeatNumberInCompartment = 12 - seatPositionInCompartment;

    
    const facingSeatNumber = facingSeatNumberInCompartment + (compartmentNumber - 1) * 12;

  
    const seatType = determineSeatType(seatPositionInCompartment + 1 );

    // Output the result
    console.log(`${facingSeatNumber} ${seatType}`);
}

function determineSeatType(positionInCompartment) {
    
    if (positionInCompartment % 6 === 0 || positionInCompartment % 6 === 1) {
        return "WS"; // Window Seat
    } else if (positionInCompartment % 6 === 2 || positionInCompartment % 6 === 5) {
        return "MS"; // Middle Seat
    } else {
        return "AS"; // Aisle Seat
    }
}



function processTestCases(testCases) {

    if (testCases.length < 1 || testCases.length > 105) {
        console.log("Invalid number of test cases. Please provide between 1 and 105 test cases.");
        return;
    }

    for (let i = 0; i < testCases.length; i++) {
        findFacingSeat(testCases[i]);
    }
}

// Example test cases
const testCases = [18,40];
processTestCases(testCases);


//output:
// 19 WS
// 45 AS