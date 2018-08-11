export default class Weapon {
    constructor(originalWeapon) {
        Object.assign(this, originalWeapon || {
            name: '',
            encurbance: '',
            group: '',
            damage: '',
            range: '',
            reload: '',
            qualities: ''
        });
    }

    isNotEmpty() {
        return !!this.name || !!this.encurbance || !!this.group || !!this.damage || !!this.range || !!this.reload || !!this.qualities;
    }
}