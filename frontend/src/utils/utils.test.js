import Utils from './utils';

describe('Utils', () => {
    describe('isObjectEmpty', () => {
        [null, undefined, {}]
            .forEach(object => {
                it(`should return true for ${object}`, () => {
                    expect(Utils.isObjectEmpty(object)).toEqual(true);
                });
            });
        it(`should return false for not empty object`, () => {
            expect(Utils.isObjectEmpty({prop: 'val'})).toEqual(false);
        });
    });
    describe('isStringEmptyOrBlank', () => {
        [null, undefined, '', 0, ' ', '     ']
            .forEach(string => {
                it(`should return true for ${string}`, () => {
                    expect(Utils.isStringEmptyOrBlank(string)).toEqual(true);
                });
            });
        it(`should return false for not empty string`, () => {
            expect(Utils.isStringEmptyOrBlank('someString')).toEqual(false);
        });
    });
});