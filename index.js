// Code your solution in this file!
  
const streetHQ = 42;


function distanceFromHqInBlocks(pickUpLocation) {
        if (pickUpLocation >= 42) {
            return pickUpLocation - streetHQ;
        } else if (pickUpLocation <= 42) {
            return streetHQ - pickUpLocation
        }
    }





/*
describe('index.js', function() {
  describe('distanceFromHqInBlocks()', function() {
    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(43)).to.equal(1);
    });

    it('returns a distance in blocks', function() {
      expect(distanceFromHqInBlocks(50)).to.equal(8);
    });

    it('calculates distances below 42nd street', function() {
      expect(distanceFromHqInBlocks(34)).to.equal(8);
    });
  });

*/