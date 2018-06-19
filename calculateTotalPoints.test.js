const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
    describe('positive points for wind or gate', () => {
		it('should work without decimal points', () => {
            const actual = calculateTotalPoints(93, 'normal', 90, [14, 16, 15, 15.5, 15.5], 4, 6);
    
            const expected = 122;
    
            assert.equal(actual, expected);
        });
		
		it('should work with decimal points', () => {
            const actual = calculateTotalPoints(93, 'normal', 95, [18, 18, 19, 15.5, 19], 1.2, 3.7);

            const expected = 115.9;

            assert.equal(actual, expected);
        });
    });

    describe('negative points for wind or gate', () => {
        it('should work without decimal points', () => {
            const actual = calculateTotalPoints(103, 'large', 120, [14, 16, 15, 15.5, 15.5], -4, -6);

            const expected = 65.4;

            assert.equal(actual, expected);
        });

        it('should work with decimal points', () => {
            const actual = calculateTotalPoints(122.5, 'large', 120, [18, 18, 19, 15.5, 19], -1.3, -3.6);

            const expected = 114.6;

            assert.equal(actual, expected);
        });

    });

    describe('negative points for wind or gate', () => {
        it('should work without decimal points', () => {
            const actual = calculateTotalPoints(226, 'flying', 120, [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, 8.9);

            const expected = 215.4;

            assert.equal(actual, expected);
        });

        it('should work with decimal points', () => {
            const actual = calculateTotalPoints(226, 'flying', 120, [18.5, 18.5, 18.5, 18.0, 18.5], 8.7, -8.9);

            const expected = 206.5;

            assert.equal(actual, expected);
        });

    });
});