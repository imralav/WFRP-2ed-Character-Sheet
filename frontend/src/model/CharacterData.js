import CharacterStat from "./CharacterStat";
import Weapon from "./Weapon";

export default class CharacterData {
    constructor() {
        Object.assign(this, {
            player: {
                name: '',
                gameMaster: '',
                campaign: '',
                campaignYear: ''
            },
            character: {
                name: '',
                race: '',
                currentCareer: '',
                previousCareers: ''
            },
            experiencePoints: {
                current: 0,
                total: 0
            },
            personalDetails: {
                age: 0,
                gender: '',
                eyeColor: '',
                weight: 0,
                hairColor: '',
                height: 0,
                starSign: '',
                numberOfSiblings: 0,
                birthplace: '',
                distinguishingMarks: ''
            },
            combatMovement: {
                moveDisengage: 0,
                chargeAttack: 0,
                run: 0
            },
            characterProfile: {
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
            },
            weapons: []
        });
    }

    addEmptyWeaponRow() {
        this.weapons.push(new Weapon());
    }

    deleteWeapon(index) {
        this.weapons.splice(index, 1);
    }

    clean() {
        this.cleanWeapons();
    }

    cleanWeapons() {
        this.weapons = this.weapons.filter(weapon => weapon.isNotEmpty());
    }
}