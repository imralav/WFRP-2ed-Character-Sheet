export default class CharacterLoadValidator {
    constructor() {
        this.validPropertyNames = {
            player: ['name', 'gameMaster', 'campaign', 'campaignYear'],
            character: ['name', 'race', 'currentCareer', 'previousCareers'],
            experiencePoints: ['current', 'total']
        };
    }
    isValid(characterData) {
        return !!characterData && this.hasCorrectSectionsPresent(characterData) && this.areSectionsCorrect(characterData);
    }

    hasCorrectSectionsPresent(characterData) {
        return !!characterData &&
            characterData.hasOwnProperty('player') &&
            characterData.hasOwnProperty('character') &&
            characterData.hasOwnProperty('experiencePoints') &&
            Object.keys(characterData).length === 3;
    }

    areSectionsCorrect(characterData) {
        return Object.keys(this.validPropertyNames).every(sectionName => this.isSectionCorrect(characterData, sectionName));
    }

    isSectionCorrect(characterData, sectionName) {
        return !!characterData[sectionName] && this.hasCorrectPropertiesForSection(characterData[sectionName],sectionName);
    }

    hasCorrectPropertiesForSection(sectionData, sectionName) {
        const currentProperties = this.validPropertyNames[sectionName];
        const sectionKeys = Object.keys(sectionData);
        for(let propertyName of sectionKeys) {
            if(currentProperties.indexOf(propertyName) < 0) {
                return false;
            }
        }
        return sectionKeys.length > 0;
    }
}