export default class Armour {
    constructor(originalArmour) {
        Object.assign(this, originalArmour || {
            type: '',
            encurbance: '',
            locationsCovered: '',
            points: ''
        });
    }

    isNotEmpty() {
        return !!this.type || !!this.encurbance || !!this.locationsCovered || !!this.points;
    }
}