import general from './general';
import skills from './skills';
import characterStats from './character-stats';

const supportedLocales = ['pl', 'en'];

export default class TranslationsProvider {
    static get() {
        let newVar = {};
        for(let locale of supportedLocales) {
            newVar[locale] = {
                ...general[locale],
                ...skills[locale],
                ...characterStats[locale]
            };
        }
        return newVar;
    }
}