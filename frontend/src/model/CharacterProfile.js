import simplePropertyReplacementReducer from "./SimplePropertyReplacementReducer";
import CharacterStat from "./CharacterStat";

const DEFAULT_CHARACTER_PROFILE = {
    main: {
        weaponSkill: CharacterStat.builder().withId('characterStat.weaponSkill.id').build(),
        ballisticSkill: CharacterStat.builder().withId('characterStat.ballisticSkill.id').build(),
        strength: CharacterStat.builder().withId('characterStat.strength.id').build(),
        toughness: CharacterStat.builder().withId('characterStat.toughness.id').build(),
        agility: CharacterStat.builder().withId('characterStat.agility.id').build(),
        intelligence: CharacterStat.builder().withId('characterStat.intelligence.id').build(),
        willPower: CharacterStat.builder().withId('characterStat.willPower.id').build(),
        fellowship: CharacterStat.builder().withId('characterStat.fellowship.id').build()
    },
    secondary: {
        attacks: CharacterStat.builder().withId('characterStat.attacks.id').build(),
        wounds: CharacterStat.builder().withId('characterStat.wounds.id').build(),
        strengthBonus: CharacterStat.builder().withId('characterStat.strengthBonus.id').build(),
        toughnessBonus: CharacterStat.builder().withId('characterStat.toughnessBonus.id').build(),
        movement: CharacterStat.builder().withId('characterStat.movement.id').build(),
        magic: CharacterStat.builder().withId('characterStat.magic.id').build(),
        insanityPoints: CharacterStat.builder().withId('characterStat.insanityPoints.id').build(),
        fatePoints: CharacterStat.builder().withId('characterStat.fatePoints.id').build()
    }
};
export const UPDATE_CHARACTER_PROFILE_ACTION = 'UPDATE_CHARACTER_PROFILE_ACTION';
export default simplePropertyReplacementReducer(UPDATE_CHARACTER_PROFILE_ACTION, DEFAULT_CHARACTER_PROFILE);