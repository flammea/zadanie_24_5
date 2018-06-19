const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    describe('normal hill', () => {
		it('it should work for jump longer than k-point', () => {
            const actual = calculateDistancePoints(93, 'normal', 90);
    
            const expected = 66;
    
            assert.equal(actual, expected);
        });
		
		it('it should work for jump shorten than k-point', () => {
            const actual = calculateDistancePoints(93, 'normal', 95);

            const expected = 56;

            assert.equal(actual, expected);
        });
    });

    describe('large hill', () => {
        it('it should work for jump shorten than k-point', () => {
            const actual = calculateDistancePoints(103, 'large', 120);

            const expected = 29.4;

            assert.equal(actual, expected);
        });

        it('it should work for jump longer than k-point', () => {
            const actual = calculateDistancePoints(122.5, 'large', 120);

            const expected = 64.5;

            assert.equal(actual, expected);
        });

        it('it should work for jump equal to k-point', () => {
            const actual = calculateDistancePoints(125, 'large', 125);

            const expected = 60;

            assert.equal(actual, expected);
        });
    });

    describe('flying hill', () => {
        it('it should work for jump longer k-point', () => {
            const actual = calculateDistancePoints(215, 'flying', 200);

            const expected = 218;

            assert.equal(actual, expected);
        });

        it('it should work for jump shorten than k-point', () => {
            const actual = calculateDistancePoints(185, 'flying', 200);

            const expected = 182;

            assert.equal(actual, expected);
        });

        it('it should work for jump equal to k-point', () => {
            const actual = calculateDistancePoints(200, 'flying', 200);

            const expected = 120;

            assert.equal(actual, expected);
        });
    });
});