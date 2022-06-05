// Code your solution in this file!
//   First 3 tests
const streetHQ = 42;


function distanceFromHqInBlocks(pickUpLocation) {
        if (pickUpLocation >= 42) {
            return pickUpLocation - streetHQ;
        } else if (pickUpLocation <= 42) {
            return streetHQ - pickUpLocation
        }
    }

//  4-6 tests
function distanceFromHqInFeet(pickUpLocation){
    if (pickUpLocation >= 42) {
        return (pickUpLocation - streetHQ) * 264;
    } else if (pickUpLocation <= 42) {
        return (streetHQ - pickUpLocation) * 264;
    }
}

// 7-9 tests
function distanceTravelledInFeet(start, end){
    if (start >= end) {
        return (start - end) * 264;
    } else if (start <= end) {
        return (end - start) * 264;
    }
}




/*

*/