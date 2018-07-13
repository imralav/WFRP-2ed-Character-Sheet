import TranslationsProvider from './translations-provider';

describe('get', () => {
    let translations;
    beforeEach(() => {
        translations = TranslationsProvider.get();
    });
    afterEach(() => {
        translations = null;
    });
    it('should contain general polish entry', () => {
        expect(translations.pl["create-character"]).toEqual("Stwórz postać");
    });
    it('should contain general english entry', () => {
        expect(translations.en["create-character"]).toEqual("Create a character");
    });
    it('should contain skills polish entry', () => {
        expect(translations.pl["reading-writing"]).toEqual("Czytanie i pisanie");
    });
    it('should contain skills english entry', () => {
        expect(translations.en["reading-writing"]).toEqual("Reading and writing");
    });
});