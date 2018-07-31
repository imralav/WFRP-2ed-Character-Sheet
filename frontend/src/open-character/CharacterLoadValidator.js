import CharacterData from '../model/CharacterData';
import _ from 'underscore';

export default class CharacterLoadValidator {
    constructor() {
        this.expectedCharacterDataModel = new CharacterData();
    }

    isValid(characterData) {
        return !!characterData && this.hasCorrectSectionsPresent(characterData) && this.areSectionsCorrect(characterData);
    }

    hasCorrectSectionsPresent(characterData) {
        const targetKeys = Object.keys(this.expectedCharacterDataModel);
        return !!characterData && _.isEqual(targetKeys, Object.keys(characterData));
    }

    areSectionsCorrect(characterData) {
        return Object.keys(this.expectedCharacterDataModel).every(sectionName => this.isSectionCorrect(characterData, sectionName));
    }

    isSectionCorrect(characterData, sectionName) {
        return !!characterData[sectionName] && this.hasCorrectPropertiesForSection(characterData[sectionName],sectionName);
    }

    hasCorrectPropertiesForSection(sectionData, sectionName) {
        const currentProperties = Object.keys(this.expectedCharacterDataModel[sectionName]);
        const sectionKeys = Object.keys(sectionData);
        for(let propertyName of sectionKeys) {
            if(currentProperties.indexOf(propertyName) < 0) {
                return false;
            }
        }
        return sectionKeys.length > 0;
    }
}