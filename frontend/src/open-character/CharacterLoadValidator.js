export default class CharacterLoadValidator {
    constructor() {
        this.validPropertyNames = {
            player: ['name', 'gameMaster', 'campaign', 'campaignYear']
        };
    }
    isValid(characterData) {
        return !!characterData && this.areAvailableSectionsCorrect(characterData) && this.isSectionCorrect(characterData, 'player');
    }

    areAvailableSectionsCorrect(characterData) {
        return !!characterData && characterData.hasOwnProperty('player') && Object.keys(characterData).length === 1;
    }

    isSectionCorrect(sectionData, sectionName) {
        return !!sectionData[sectionName] && this.hasCorrectPropertiesForSection(sectionData[sectionName],sectionName);
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