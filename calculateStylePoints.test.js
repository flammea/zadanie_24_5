const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylePoints', () => {
    describe('all diffrent notes', () => {
		it('should work for notes without comma', () => {
            const actual = calculateStylePoints([14, 19, 18, 15, 16]);
    
            const expected = 49;
    
            assert.equal(actual, expected);
        });
		
		it('should work for notes with comma', () => {
            const actual = calculateStylePoints([18, 17.5, 18.5, 19.5, 20]);

            const expected = 56;

            assert.equal(actual, expected);
        });
    });

    describe('two same notes', () => {
        it('should work for notes without comma', () => {
            const actual = calculateStylePoints([18, 17, 18, 19, 20]);

            const expected = 55;

            assert.equal(actual, expected);
        });

        it('should work for notes with comma', () => {
            const actual = calculateStylePoints([18.5, 17.5, 17.5, 19.5, 20]);

            const expected = 55.5;

            assert.equal(actual, expected);
        });
    });

    describe('more same notes', () => {
        it('should work for three same notes without comma', () => {
            const actual = calculateStylePoints([20, 20, 18, 19, 20]);

            const expected = 59;

            assert.equal(actual, expected);
        });

        it('it should work for three same notes with comma', () => {
            const actual = calculateStylePoints([20, 19.5, 19.5, 19.5, 20]);

            const expected = 59;

            assert.equal(actual, expected);
        });

        it('should work for five same notes without comma', () => {
            const actual = calculateStylePoints([20, 20, 20, 20, 20]);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should work for five same notes with comma', () => {
            const actual = calculateStylePoints([19.5, 19.5, 19.5, 19.5, 19.5]);

            const expected = 58.5;

            assert.equal(actual, expected);
        });
    });
});