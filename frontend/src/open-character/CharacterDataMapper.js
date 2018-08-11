import CharacterData from '../model/CharacterData';
import Weapon from '../model/Weapon';
import CharacterStat from '../model/CharacterStat';

export default class CharacterDataMapper {
    static map(characterData) {
        let newCharacterData = new CharacterData();
        CharacterDataMapper.rewriteBasicProperties(newCharacterData, characterData);
        CharacterDataMapper.rewriteAdvancedProperties(newCharacterData, characterData);
        return newCharacterData;
    }

    static rewriteBasicProperties(newCharacterData, oldCharacterData) {
        Object.assign(newCharacterData.player, oldCharacterData.player);
        Object.assign(newCharacterData.character, oldCharacterData.character);
        Object.assign(newCharacterData.experiencePoints, oldCharacterData.experiencePoints);
        Object.assign(newCharacterData.personalDetails, oldCharacterData.personalDetails);
        Object.assign(newCharacterData.combatMovement, oldCharacterData.combatMovement);
    }

    static rewriteAdvancedProperties(newCharacterData, oldCharacterData) {
        CharacterDataMapper.rewriteWeapons(newCharacterData, oldCharacterData);
        CharacterDataMapper.rewriteCharacterProfile(newCharacterData.characterProfile, oldCharacterData.characterProfile);
    }

    static rewriteWeapons(newCharacterData, oldCharacterData) {
        oldCharacterData.weapons.forEach(originalWeapon => newCharacterData.weapons.push(new Weapon(originalWeapon)));
    }

    static rewriteCharacterProfile(newCharacterProfile, oldCharacterProfile) {
        CharacterDataMapper.rewriteCharacterProfileStat(newCharacterProfile, oldCharacterProfile, 'main');
        CharacterDataMapper.rewriteCharacterProfileStat(newCharacterProfile, oldCharacterProfile, 'secondary');
    }

    static rewriteCharacterProfileStat(newCharacterProfile, oldCharacterProfile, statSection) {
        Object.keys(newCharacterProfile[statSection]).forEach(stat => {
            newCharacterProfile[statSection][stat] = new CharacterStat(oldCharacterProfile[statSection][stat]);
        });
    }
}