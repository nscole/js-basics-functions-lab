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

// 10-13 tests
function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
        
}


/*
  describe('calculatesFarePrice(start, destination)', function() {
    it('gives customers a free sample', function() {
      expect(calculatesFarePrice(43, 44)).to.equal(0);
    });

    it('charges 2 cents per foot when total feet travelled is between 400 and 2000 (remember the first 400 feet are free!)', function() {
      // total feet travelled is 528, minus the first 400 feet, comes to 128 -> 2.56
      expect(calculatesFarePrice(34, 32)).to.equal(2.56);
    });

    it('charges 25 dollars for a distance over 2000 feet', function() {
      expect(calculatesFarePrice(50, 58)).to.equal(25);
    });

    it('does not allow rides over 2500 feet', function() {
      expect(calculatesFarePrice(34, 24)).to.equal('cannot travel that far');
    });
*/