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
            }
        });
    }
}