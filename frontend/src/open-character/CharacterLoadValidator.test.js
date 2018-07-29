import CharacterLoadValidator from './CharacterLoadValidator';

describe('CharacterLoadValidator', () => {
    let validator;
    beforeEach(() => {
        validator = new CharacterLoadValidator();
    });
    describe('isValid', () => {
        describe('for empty object', () => {
            [undefined, null, {}].forEach(object => {
                it(`should return error for ${object}`, () => {
                    expect(validator.isValid(object)).toEqual(false);
                });
            });
        });
        describe('for data without correct sections', () => {
            [{}, {nonPlayer: undefined}, {player: undefined, nonPlayer: undefined}].forEach(object => {
                it(`should return error for ${object}`, () => {
                    expect(validator.isValid(object)).toEqual(false);
                });
            });
        });
        describe('for incorrect player section', () => {
            [{player: undefined}, {player: {}},{player: {name: undefined, gameMaster: undefined, campaign: undefined, campaignYear: undefined, unusedProperty: undefined}}].forEach(object => {
                it(`should return error for ${object}`, () => {
                    expect(validator.isValid(object)).toEqual(false);
                });
            });
        });
        describe('for correct character data', () => {
            const correctCharacterData = {
                player: {name: undefined, gameMaster: undefined, campaign: undefined, campaignYear: undefined},
                character: {name: undefined, race: undefined, currentCareer: undefined, previousCareers: undefined},
                experiencePoints: {current: 0, total: 0}
            };
            it('should return true', () => {
                expect(validator.isValid(correctCharacterData)).toEqual(true);
            });
        });
    });
});